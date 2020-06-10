import React, { useState, useCallback, useMemo } from 'react';
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  Animated,
  Easing,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/';
import { ErrorLabel } from './ErrorLabel';
const AnimatedInput: any = Animated.createAnimatedComponent(TextInput);

const ANIMATION_TIME = 200;

type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>;
type ChildrenRenderProps = {
  color: Animated.AnimatedInterpolation;
};

export interface InputProps extends TextInputProps {
  containerStyle?: any;
  children?: (props: ChildrenRenderProps) => void;
  icon?: (props: ChildrenRenderProps) => React.ReactNode;
  error?: string | null;
  hasCenterText?: boolean;
}
/**
 * Simple text-input component.
 * @param error (optional) A error to be displayed below the text input box
 * @param children (optional) A render props function with the animated color in the props.
 * @param containerStyle (optional) The styles for the container
 * @param icon? (optional)  A render props function with the animated color in the props. This icon is displayed inside the box of the text input
 */
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      icon,
      error,
      onFocus,
      onBlur,
      children,
      style,
      hasCenterText,
      containerStyle,
      ...inputProps
    },
    ref
  ) => {
    const [animatedValue] = useState(new Animated.Value(1));
    const [colorValue] = useState(new Animated.Value(1));

    const interpolatedColor = colorValue.interpolate({
      inputRange: [1, 2, 3],
      outputRange: [theme.lightGray, theme.secondary, theme.error],
    });

    const animatedContainerStyles = useMemo(
      () => ({
        borderColor: interpolatedColor,
        color: interpolatedColor,
        marginVertical: animatedValue.interpolate({
          inputRange: [1, 2, 3],
          outputRange: [4, 8, 4],
        }),
        opacity: animatedValue.interpolate({
          inputRange: [1, 2, 3],
          outputRange: [0.5, 1, 1],
        }),
      }),
      [interpolatedColor, animatedValue]
    );
    const animatedInputStyles = useMemo(() => ({ color: interpolatedColor }), [
      interpolatedColor,
    ]);

    const handleAnimation = (value: Animated.Value, toValue: number) => {
      return Animated.timing(value, {
        toValue,
        duration: ANIMATION_TIME,
        easing: Easing.linear,
      });
    };

    const handleAnimations = useCallback(
      (toValues: number[]) => {
        Animated.parallel([
          handleAnimation(colorValue, toValues[0]),
          handleAnimation(animatedValue, toValues[1]),
        ]).start();
      },
      [animatedValue, colorValue]
    );

    const handleFocus = useCallback(
      (event: InputEvent) => {
        handleAnimations([error ? 3 : 2, 2]);
        if (onFocus) {
          onFocus(event);
        }
      },
      [error, handleAnimations, onFocus]
    );

    const handleBlur = useCallback(
      (event: InputEvent) => {
        handleAnimations([error ? 3 : 1, 1]);

        if (onBlur) onBlur(event);
      },
      [handleAnimations, error, onBlur]
    );

    return (
      <>
        {children && children({ color: interpolatedColor })}
        <Animated.View
          style={[styles.container, animatedContainerStyles, containerStyle]}
        >
          <View style={[styles.row, hasCenterText && styles.containerCentered]}>
            {icon && (
              <View style={styles.iconContainer}>
                {icon({ color: interpolatedColor })}
              </View>
            )}
            <AnimatedInput
              {...inputProps}
              ref={ref}
              style={[
                hasCenterText ? styles.inputCentered : styles.input,
                style,
                animatedInputStyles,
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>
          <ErrorLabel error={error} />
        </Animated.View>
      </>
    );
  }
);
