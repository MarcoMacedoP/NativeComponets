import React from 'react';
import { StyleProp } from 'react-native';
import { ButtonStylesType, ButtonText, ButtonTouchable } from './styles';
import { useThemeColor } from '../../hooks/useThemeColor';
type ButtonType = React.FC<
  ButtonStylesType & {
    text: string;
    onPress: () => void;
    style?: StyleProp<any>;
  }
>;

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
    <ButtonTouchable
      color={color}
      style={[style]}
      {...styleProps}
      isEnabled={isEnabled}
      onPress={handlePress}
      activeOpacity={isEnabled ? 0.6 : 1}
    >
      {children && children}
      <ButtonText color={color} {...styleProps}>
        {text}
      </ButtonText>
    </ButtonTouchable>
  );
};

export default Button as ButtonType;
