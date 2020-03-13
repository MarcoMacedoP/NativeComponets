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

const Button: ButtonType = ({ onPress, text, ...styleProps }) => {
  return (
    <Touchable {...styleProps} onPress={onPress}>
      <Text {...styleProps}> {text}</Text>
    </Touchable>
  );
};

const Touchable = styled.TouchableOpacity<StylesType>`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props =>
    props.isPrimary
      ? props.theme.primary
      : props.isSecondary
      ? props.theme.secondary
      : 'transparent'};
  height: 40px;
`;

const Text = styled.Text<StylesType>`
  color: ${props => (props.isOutline ? 'red' : props.theme.background)};
  text-transform: uppercase;
`;

export default Button as ButtonType;
