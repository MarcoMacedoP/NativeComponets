import styled from '../../styled-components';

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
export const ButtonTouchable = styled.TouchableOpacity<TouchableProps>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-radius: ${props => props.theme.borderRadius}px;
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
  text-transform: ${props => (props.color ? 'uppercase' : 'none')};
  align-self: center;
`;
