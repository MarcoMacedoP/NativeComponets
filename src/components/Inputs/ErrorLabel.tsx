import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { styles } from './styles';
type ErrorLabelProps = {
  error?: string | null;
};

export const ErrorLabel = ({ error }: ErrorLabelProps) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const animatedStyles = useMemo(
    () => ({
      marginVertical: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2],
      }),
      height: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 14],
      }),
    }),
    [animatedValue]
  );

  useEffect(() => {
    if (!error) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
      }).start();
    }
  }, [error, animatedValue]);
  return (
    <Animated.Text style={[styles.errorLabel, animatedStyles]}>
      {error ? error : ''}
    </Animated.Text>
  );
};
