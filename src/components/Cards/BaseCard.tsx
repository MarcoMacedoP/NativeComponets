import React from 'react';
import styled from '../../styled-components';
import { StyleProp } from 'react-native';

type StylesType = {
  isPrimary?: boolean;
};

type BaseCardType = React.FC<
  StylesType & {
    text?: string;
    onPress: () => void;
    style?: StyleProp<any>;
    thumbnail?: () => void;
  }
>;

const BaseCard: BaseCardType = ({
  onPress,
  children,
  text,
  style,
  thumbnail,
  ...styleProps
}) => {
  return (
    <Touchable style={style} {...styleProps} onPress={onPress}>
      {thumbnail && (
        <IconBox style={style} {...styleProps}>
          {thumbnail}
        </IconBox>
      )}
      <TextBox style={style} {...styleProps}>
        <Text {...styleProps}>{text}</Text>
      </TextBox>
      <IconBox style={style} {...styleProps}>
        {children}
      </IconBox>
    </Touchable>
  );
};

type StyledProps = StylesType & {};

const Touchable = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 5px ${props => props.theme.gray};
  elevation: 1;
  border-radius: 5px;
  background-color: ${props => props.theme.background};
`;
const IconBox = styled.View<StyledProps>`
  flex-direction: row;
  flex: 0.5;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-top-end-radius: 5px;
  border-bottom-end-radius: 5px;
  background-color: ${props =>
    props.isPrimary ? props.theme.primary : 'transparent'};
`;
const TextBox = styled.View<StyledProps>`
  flex: 4;
  height: 40px;
  margin-left: 16px;
  align-items: flex-start;
  justify-content: center;
  border-top-start-radius: ${props => props.theme.borderRadius}px;
  border-bottom-start-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const Text = styled.Text<StyledProps>`
  color: ${props => props.theme.grayLigth};
  font-weight: 200;
  font-size: 14px;
`;
export default BaseCard as BaseCardType;
