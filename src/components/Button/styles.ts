import styled from '../../styled-components';
import { Touchable } from '../Touchable';

export type ButtonStylesType = {
  isPrimary?: boolean;
  isOutline?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
};

type StyledProps = {
  color: string | null | any;
};
type TouchableProps = StyledProps & {
  isEnabled: boolean;
};

export const ButtonContainer = styled.View`
  width: 100%;
  height: 42px;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius}px;
`;

// eslint-disable-next-line prettier/prettier
export const ButtonTouchable = styled(Touchable) <TouchableProps>`
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
