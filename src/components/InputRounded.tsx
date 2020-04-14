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

const AnimatedInput: any = Animated.createAnimatedComponent(TextInput);

type InputType = React.FC<TextInputProps & { hasCenterText?: boolean }>;

const InputRounded: InputType = React.forwardRef(
  ({ children, style, ...props }, ref: any) => {
    const [animatedValue] = useState(new Animated.Value(1));
    const theme: ThemeType = useContext(ThemeContext);
    const interpolatedColor = animatedValue.interpolate({
      inputRange: [1, 2],
      outputRange: [theme.gray, theme.secondary],
    });

    const animatedStyles = {
      borderColor: interpolatedColor,
      color: interpolatedColor,
    };
    const ANIMATION_TIME = 300;
    //handlers
    const { onBlur, onFocus } = props;

    function handleFocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: ANIMATION_TIME,
        easing: Easing.circle,
      }).start();
      if (onFocus) onFocus(e);
    }
    function handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: ANIMATION_TIME,
      }).start();
      if (onBlur) onBlur(e);
    }

    return (
      <Container style={[style, animatedStyles]}>
        {children && React.isValidElement(children) && (
          <IconContainer>
            {React.cloneElement(children && children, {
              color: interpolatedColor,
            })}
          </IconContainer>
        )}
        <StyledInput
          {...props}
          ref={ref}
          maxFontSizeMultiplier={0}
          style={{ color: interpolatedColor }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Container>
    );
  }
);

const Container = styled(Animated.View)`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius}px;
  flex-direction: row;
  border: 1px;
  align-items: center;
  padding-left: 12px;
`;
const IconContainer = styled.View`
  width: 16px;
  height: 16px;
`;
const StyledInput = styled(AnimatedInput)<{ hasCenterText?: boolean }>`
  text-align: ${props => (props.hasCenterText ? 'center' : 'left')};
  color: ${props => props.theme.gray};
  width: 100%;
  padding: 8px 0 8px 8px;
  min-height: 36px;
  text-transform: none;
`;

export default InputRounded;
