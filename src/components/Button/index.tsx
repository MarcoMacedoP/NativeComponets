import React from 'react';
import { StyleProp } from 'react-native';
import {
  ButtonStylesType,
  ButtonText,
  ButtonTouchable,
  ButtonContainer,
} from './styles';
import { useThemeColor } from '../../hooks/useThemeColor';

export type ButtonProps = ButtonStylesType & {
  text: string;
  onPress: () => void;
  style?: StyleProp<any>;
};

type ButtonType = React.FC<ButtonProps>;

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
