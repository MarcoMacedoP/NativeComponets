import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
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
  const [widthAnim] = useState(new Animated.Value(0));
  const color = useThemeColor(styleProps);
  const interpolatedWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 50],
  });
  const animatedStyles = {
    marginTop: 16,
    width: interpolatedWidth,
  };
  useEffect(() => {
    const makeSmall = isLoading && hasPressed;
    console.log({ makeSmall });
    Animated.timing(widthAnim, {
      toValue: makeSmall ? 1 : 0,
      easing: Easing.linear,
      duration: 400,
    }).start();
  }, [isLoading, hasPressed, widthAnim]);

  const handlePress = () => {
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
      <ButtonText color={color} {...styleProps}>
        {!isLoading && text}
      </ButtonText>
    </AnimatedTouchable>
  );
};
export default AnimatedButton as React.FC<Props>;
