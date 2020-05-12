import React, { useEffect, useState } from 'react';
import { Animated, Easing, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from './types';
import { TouchableOpacity } from 'react-native';
import { useButtonStyles } from './useButtonStyles';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type Props = ButtonProps & {
  isLoading?: boolean;
  shouldTriggerOnPressWhileLoading?: boolean; //disable onPress function if loading
};
/**
 * An animated button
 */
const AnimatedButton: React.FC<Props> = ({
  isLoading,
  onPress,
  shouldTriggerOnPressWhileLoading = false,
  text,
  style,
  type = 'primary',
  children,
  ...buttonProps
}) => {
  const generatedStyles = useButtonStyles(type);
  const [hasPressed, setHasPressed] = useState(false);
  const [shouldRenderIndicator, setShouldRenderIndicator] = useState<
    boolean | undefined
  >(false);
  const [widthAnim] = useState(new Animated.Value(0));

  const interpolatedWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '20%'],
  });

  const animatedStyles = {
    marginTop: 16,
    width: interpolatedWidth,
  };
  useEffect(() => {
    const shouldMakeSmall = isLoading && hasPressed;
    Animated.timing(widthAnim, {
      toValue: shouldMakeSmall ? 1 : 0,
      easing: Easing.sin,
      duration: 300,
    }).start(() => !shouldMakeSmall && setShouldRenderIndicator(false));
    if (shouldMakeSmall) {
      setShouldRenderIndicator(true);
    }
  }, [isLoading, hasPressed, widthAnim]);

  const handlePress = () => {
    !hasPressed && setHasPressed(true);
    isLoading ? shouldTriggerOnPressWhileLoading && onPress() : onPress();
  };

  return (
    <AnimatedTouchable
      style={[styles.button, generatedStyles.button, style, animatedStyles]}
      onPress={handlePress}
      activeOpacity={0.9}
      {...buttonProps}
    >
      {shouldRenderIndicator ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {children}
          <Text style={[styles.text, generatedStyles.text]}>{text}</Text>
        </>
      )}
    </AnimatedTouchable>
  );
};
export default AnimatedButton as React.FC<Props>;
