import React, { useState, useCallback, useMemo } from 'react';
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  Animated,
  Easing,
  TextInputFocusEventData,
  StyleProp,
  View,
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/';
const AnimatedInput: any = Animated.createAnimatedComponent(TextInput);

const ANIMATION_TIME = 200;

type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>;

interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<Animated.AnimatedComponent<View>>;
  children?: ({ color }: { color: Animated.AnimatedInterpolation }) => void;
}
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    { onFocus, onBlur, children, style, containerStyle, ...inputProps },
    ref
  ) => {
    const [animatedValue] = useState(new Animated.Value(1));
    const interpolatedColor = animatedValue.interpolate({
      inputRange: [1, 2],
      outputRange: [theme.lightGray, theme.secondary],
    });

    const animatedContainerStyles = useMemo(
      () => ({
        borderColor: interpolatedColor,
        color: interpolatedColor,
        marginVertical: animatedValue.interpolate({
          inputRange: [1, 2],
          outputRange: [4, 8],
        }),
        opacity: animatedValue.interpolate({
          inputRange: [1, 2],
          outputRange: [0.5, 1],
        }),
      }),
      [interpolatedColor, animatedValue]
    );
    const animatedInputStyles = useMemo(() => ({ color: interpolatedColor }), [
      interpolatedColor,
    ]);
    const handleFocus = useCallback(
      (event: InputEvent) => {
        Animated.timing(animatedValue, {
          toValue: 2,
          duration: ANIMATION_TIME,
          easing: Easing.linear,
        }).start();
        if (onFocus) {
          onFocus(event);
        }
      },
      [animatedValue, onFocus]
    );

    const handleBlur = useCallback(
      (event: InputEvent) => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: ANIMATION_TIME,
        }).start();
        if (onBlur) onBlur(event);
      },
      [onBlur, animatedValue]
    );

    return (
      <>
        {children && children({ color: interpolatedColor })}
        <Animated.View
          style={[styles.container, animatedContainerStyles, containerStyle]}
        >
          <AnimatedInput
            {...inputProps}
            ref={ref}
            style={[style, animatedInputStyles]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>
      </>
    );
  }
);
