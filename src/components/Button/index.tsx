import React, { useEffect } from 'react';
import { StyleProp } from 'react-native';
import { ButtonStylesType, ButtonText, ButtonTouchable } from './styles';

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
  const [hasStyles, setHasStyles] = React.useState(false);

  useEffect(() => {
    const {
      isOutline,
      isPrimary,
      isSecondary,
      isSecondaryDark,
      isSecondaryLigth,
    } = styleProps;
    if (
      isEnabled ||
      isOutline ||
      isPrimary ||
      isSecondary ||
      isSecondaryDark ||
      isSecondaryLigth
    ) {
      setHasStyles(true);
    } else {
      setHasStyles(false);
    }
  }, [styleProps, isEnabled]);

  //handlers
  const handlePress = () => isEnabled && onPress();

  return (
    <ButtonTouchable
      hasStyles={hasStyles}
      style={[style]}
      {...styleProps}
      isEnabled={isEnabled}
      onPress={handlePress}
      activeOpacity={isEnabled ? 0.6 : 1}
    >
      {children && children}
      <ButtonText {...styleProps} hasStyles={hasStyles}>
        {text}
      </ButtonText>
    </ButtonTouchable>
  );
};

export default Button as ButtonType;
