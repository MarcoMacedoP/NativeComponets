import styled from '../../styled-components';

export type ButtonStylesType = {
  isPrimary?: boolean;
  isOutline?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
};

type StyledProps = ButtonStylesType & {
  hasStyles: boolean;
};

export const ButtonTouchable = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props =>
    !props.isEnabled
      ? props.theme.gray
      : props.isPrimary
      ? props.theme.primary
      : props.isSecondary
      ? props.theme.secondary
      : props.isSecondaryDark
      ? props.theme.secondaryDark
      : 'transparent'};
`;

export const ButtonText = styled.Text<StyledProps>`
  color: ${props =>
    props.isOutline || !props.hasStyles
      ? props.theme.secondary
      : props.theme.background};
  text-transform: ${p => (!p.hasStyles ? 'none' : 'uppercase')};
  align-self: center;
`;
