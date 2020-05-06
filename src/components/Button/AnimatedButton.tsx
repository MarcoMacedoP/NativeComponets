import React, { useEffect, useState } from 'react';
import { Animated, Easing, ActivityIndicator } from 'react-native';
import { ButtonTouchable, ButtonText } from './styles';
import { ButtonProps } from '.';
import { useThemeColor } from '../../hooks/useThemeColor';
import { ButtonContainer } from './styles';

const AnimatedContainer = Animated.createAnimatedComponent(ButtonContainer);

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
  isEnabled = true,
  children,
  ...styleProps
}) => {
  const [hasPressed, setHasPressed] = useState(false);
  const [shouldRenderIndicator, setShouldRenderIndicator] = useState<
    boolean | undefined
  >(false);
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
    <AnimatedContainer style={[style, animatedStyles]}>
      <ButtonTouchable
        color={color}
        {...styleProps}
        isEnabled={isEnabled}
        onPress={handlePress}
      >
        {shouldRenderIndicator ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <>
            {children}
            <ButtonText color={color} {...styleProps}>
              {text}
            </ButtonText>
          </>
        )}
      </ButtonTouchable>
    </AnimatedContainer>
  );
};
export default AnimatedButton as React.FC<Props>;
