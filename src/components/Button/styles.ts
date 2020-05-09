import styled from '../../styled-components';
import { TouchableProps, StyledProps } from './types';

export const ButtonContainer = styled.View`
  width: 100%;
  height: 42px;
  min-height: 42px;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const ButtonTouchable = styled.TouchableOpacity<TouchableProps>`
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius}px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.isEnabled
      ? props.color
        ? props.color
        : 'transparent'
      : props.theme.gray};
`;

export const ButtonText = styled.Text<StyledProps>`
  color: ${props =>
    props.color ? props.theme.background : props.theme.secondary};
 /* text-transform: ${props => (props.color ? 'uppercase' : 'none')}; */
  align-self: center;
  font-size: 16px;
`;
