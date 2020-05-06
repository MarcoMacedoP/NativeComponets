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

const Footer = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 0.5;
  margin-bottom: 8px;
`;
const Link = styled(ButtonBase)`
  flex: 1;
`;

export default FormFooter as FormFooterType;
