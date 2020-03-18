import React, { useState, useContext } from 'react';
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Animated,
  TextInput,
  Easing,
} from 'react-native';
import styled from '../styled-components';
import { ThemeContext } from 'styled-components';
import { ThemeType } from 'src/styled-components/theme';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

type InputType = React.FC<TextInputProps & { Icon?: React.ReactNode }>;

const InputRounded: InputType = ({ children, style, ...props }) => {
  //hooks
  const [isFocused, setFocused] = useState(false);
  const [animatedValue] = useState(new Animated.Value(1));
  const theme: ThemeType = useContext(ThemeContext);
  const interpolatedColor = animatedValue.interpolate({
    inputRange: [1, 2],
    outputRange: [theme.gray, theme.secondary],
  });

  const animatedStyles = {
    borderColor: interpolatedColor,
    color: interpolatedColor,
    borderWidth: animatedValue,
  };
  const ANIMATION_TIME = 150;
  //handlers
  const { onBlur, onFocus } = props;

  function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true);
    Animated.timing(animatedValue, {
      toValue: 2,
      duration: ANIMATION_TIME,
      easing: Easing.linear,
    }).start();
    if (onFocus) onFocus(e);
  }
  function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: ANIMATION_TIME,
    }).start();
    if (onBlur) onBlur(e);
  }

  return (
    <Container style={[style, animatedStyles]}>
      {children && (
        <IconContainer>
          {React.cloneElement(children, { color: interpolatedColor })}
        </IconContainer>
      )}
      <StyledInput
        {...props}
        style={{ color: interpolatedColor }}
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

const Container = styled(Animated.View)`
  width: 100%;
  border-radius: ${p => p.theme.borderRadius}px;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;
const IconContainer = styled.View`
  width: 16px;
  height: 16px;
`;
const StyledInput = styled(AnimatedInput)<{ isFocused: boolean }>`
  color: ${p => p.theme.gray};
  width: 100%;
  padding: 8px 0 8px 8px;
  min-height: 36px;
`;

export default InputRounded;
