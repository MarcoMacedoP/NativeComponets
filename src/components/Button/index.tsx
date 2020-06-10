import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonType } from './types';
import { styles } from './styles';
import { useButtonStyles } from './useButtonStyles';

const Button: ButtonType = ({
  onPress,
  text,
  children,
  style,
  type,
  ...buttonProps
}) => {
  const generatedStyles = useButtonStyles(type);

  const handlePress = () => onPress();

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={[styles.button, generatedStyles.button, style]}
      {...buttonProps}
    >
      {children && children}
      <Text style={[styles.text, generatedStyles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button as ButtonType;
