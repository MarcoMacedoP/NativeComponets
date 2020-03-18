import React, { useEffect } from 'react';
import styled from '../styled-components';
import { StyleProp } from 'react-native';

type StylesType = {
  isPrimary?: boolean;
  isOutline?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
};

type ButtonType = React.FC<
  StylesType & {
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
  ...styleProps
}) => {
  const [hasStyles, setHasStyles] = React.useState(false);
  useEffect(() => {
    const {
      isEnabled,
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
  }, [styleProps]);
  return (
    <Touchable
      hasStyles={hasStyles}
      style={style}
      {...styleProps}
      onPress={onPress}
    >
      {children && children}
      <Text {...styleProps} hasStyles={hasStyles}>
        {text}
      </Text>
    </Touchable>
  );
};

type StyledProps = StylesType & {
  hasStyles: boolean;
};

const Touchable = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props =>
    props.isPrimary
      ? props.theme.primary
      : props.isSecondary
      ? props.theme.secondary
      : props.isSecondaryDark
      ? props.theme.secondaryDark
      : 'transparent'};
  height: 40px;
`;

const Text = styled.Text<StyledProps>`
  color: ${props =>
    props.isOutline || !props.hasStyles
      ? props.theme.secondary
      : props.theme.background};
  text-transform: ${p => (!p.hasStyles ? 'none' : 'uppercase')};
  align-self: center;
`;
export default Button as ButtonType;
