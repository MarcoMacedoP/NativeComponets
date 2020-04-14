import React from 'react';
import styled from '../../styled-components';
import ButtonBase from '../Button';

export type FormFooterType = React.FC<{
  leftButtonText: string;
  rigthButtonText: string;
  onLeftButtonPress: () => void;
  onRigthButtonPress: () => void;
}>;
const FormFooter: FormFooterType = props => (
  <Footer>
    <Link text={props.leftButtonText} onPress={props.onLeftButtonPress} />
    <Link text={props.rigthButtonText} onPress={props.onRigthButtonPress} />
  </Footer>
);

const Footer = styled.View`
  margin-top: 24px;
  width: 100%;
  padding: 2.5%;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${p => p.theme.background};
`;
const Link = styled(ButtonBase)`
  flex: 1;
`;

export default FormFooter as FormFooterType;
