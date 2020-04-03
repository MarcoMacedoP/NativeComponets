import React, { useEffect, useState } from 'react';
import { Animated, Easing, ActivityIndicator } from 'react-native';
import { ButtonTouchable, ButtonText } from './styles';
import { ButtonProps } from '.';
import { useThemeColor } from '../../hooks/useThemeColor';
const AnimatedTouchable = Animated.createAnimatedComponent(ButtonTouchable);

type Props = ButtonProps & {
  isLoading: boolean;
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
  isEnabled = true,
  ...styleProps
}) => {
  const [hasPressed, setHasPressed] = useState(false);
  const [shouldRenderIndicator, setShouldRenderIndicator] = useState(false);
  const [widthAnim] = useState(new Animated.Value(0));
  const color: any = useThemeColor(styleProps);
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
    }).start(
      () => shouldMakeSmall && setShouldRenderIndicator(shouldMakeSmall)
    );
    if (!shouldMakeSmall) {
      setShouldRenderIndicator(false);
    }
  }, [isLoading, hasPressed, widthAnim]);

  const handlePress = () => {
    console.log('lol');
    !hasPressed && setHasPressed(true);
    isLoading ? shouldTriggerOnPressWhileLoading && onPress() : onPress();
  };

  return (
    <AnimatedTouchable
      color={color}
      style={[style, animatedStyles]}
      {...styleProps}
      isEnabled={isEnabled}
      onPress={handlePress}
      activeOpacity={isEnabled ? 0.6 : 1}
    >
      {shouldRenderIndicator ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText color={color} {...styleProps}>
          {text}
        </ButtonText>
      )}
    </AnimatedTouchable>
  );
};
export default AnimatedButton as React.FC<Props>;
