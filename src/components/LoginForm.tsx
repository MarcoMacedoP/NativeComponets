import React from 'react';
import ToopagoIconBase from './Icons/ToopagoIcon';
//styled
import styled from '../styled-components';
import ButtonBase from './Button';

type LoginFormType = React.FC<{
  onLogin: () => void;
}>;

const LoginForm: LoginFormType = props => {
  const walletIcon = require('../assets/icons/terminal.png');
  return (
    <Container>
      <Header>
        <WalletIcon source={walletIcon} />
      </Header>
      <Form>
        <ToopagoIcon />
        <Button text="Log in" isPrimary onPress={props.onLogin} />
        <Button text="Log in" isSecondaryDark onPress={props.onLogin} />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.primary};
`;
const Header = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  z-index: 1;
`;
const WalletIcon = styled.Image`
  height: 120%;
  width: 100%;
  position: relative;
  bottom: -20%;
  z-index: 3;
  resize-mode: contain;
`;
const Form = styled.View`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${props => props.theme.background};
  width: 100%;
  z-index: 0;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.5%;
`;
const ToopagoIcon = styled(ToopagoIconBase)`
  width: 70%;
  border: 1px solid red;
  flex: 2;
`;
const Button = styled(ButtonBase)`
  margin-bottom: 16px;
`;

export default LoginForm;
