import React from 'react';
import { ButtonText, ButtonTouchable, ButtonContainer } from './styles';
import { useThemeColor } from '../../hooks/useThemeColor';
import { ButtonType } from './types';

const Button: ButtonType = ({
  onPress,
  text,
  children,
  style,
  isEnabled = true,
  ...styleProps
}) => {
  const color = useThemeColor(styleProps);

  //handlers
  const handlePress = () => isEnabled && onPress();

  return (
    <ButtonContainer style={[style]}>
      <ButtonTouchable
        color={color}
        {...styleProps}
        isEnabled={isEnabled}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        {children && children}
        <ButtonText color={color} {...styleProps}>
          {text}
        </ButtonText>
      </ButtonTouchable>
    </ButtonContainer>
  );
};

export default Button as ButtonType;
