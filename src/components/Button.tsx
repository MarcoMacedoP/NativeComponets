import React from 'react';
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

const Button: ButtonType = ({ onPress, text, style, ...styleProps }) => {
  return (
    <Touchable style={style} {...styleProps} onPress={onPress}>
      <Text {...styleProps}> {text}</Text>
    </Touchable>
  );
};

const Touchable = styled.TouchableOpacity<StylesType>`
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

const Text = styled.Text<StylesType>`
  color: ${props =>
    props.isOutline ||
    (!props.isPrimary &&
      !props.isSecondary &&
      !props.isSecondaryDark &&
      !props.isSecondaryLigth)
      ? props.theme.secondary
      : props.theme.background};
  text-transform: uppercase;
  align-self: center;
`;

export default Button as ButtonType;
