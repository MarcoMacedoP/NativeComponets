import React from 'react';
import ToopagoIconBase from './Icons/ToopagoIcon';
//styled
import styled from '../styled-components';
import ButtonBase from './Button';
import Clipboard from './Clipboard';
import InputBase from './InputRounded';
import EmailIcon from './Icons/Email';
import LockIcon from './Icons/Lock';

type LoginFormType = React.FC<{
  onLogin: () => void;
  onFacebookLogin: () => void;
  email: string;
  password: string;
  onPasswordChange: (password: string) => void;
  onEmailChange: (emial: string) => void;
  onCreateAccount: () => void;
  onBackupAccount: () => void;
}>;

const LoginForm: LoginFormType = props => {
  const walletIcon = require('../assets/icons/terminal.png');
  const facebookIcon = require('../assets/icons/facebook.png');

  return (
    <Container>
      <Header>
        <WalletIcon source={walletIcon} />
      </Header>
      <Form>
        <ToopagoIcon />
        <Input
          placeholder="Email"
          autoFocus
          textContentType="emailAddress"
          value={props.email}
          onChangeText={text => props.onEmailChange(text)}
        >
          <EmailIcon />
        </Input>

        <Input
          placeholder="Contraseña"
          secureTextEntry
          value={props.password}
          onChangeText={text => props.onPasswordChange(text)}
        >
          <LockIcon />
        </Input>

        {/* <Button text="Log in" isPrimary onPress={props.onLogin} />
        <Button text="Log in" isSecondaryDark onPress={props.onLogin}>
          <FacebookIcon source={facebookIcon} />
        </Button> */}
        <Clipboard
          text="3BJGQDbeA7frp8GY4gL7H2YpTefExbbbKL"
          isPrimary
          onPress={props.onLogin}
        >
          <FacebookIcon source={facebookIcon} />
        </Clipboard>
      </Form>
      <Footer>
        <Link text="Crea tu cuenta" onPress={props.onCreateAccount} />
        <Link text="Recupera tu cuenta" onPress={props.onBackupAccount} />
      </Footer>
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
  flex: 3;
  align-items: center;
  z-index: 1;
`;
const WalletIcon = styled.Image`
  height: 120%;
  width: 100%;
  position: relative;
  bottom: -15%;
  resize-mode: contain;
`;
const Form = styled.View`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${props => props.theme.background};
  width: 100%;
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5% 2.5% 0;
`;
const Input = styled(InputBase)`
  margin-bottom: 16px;
`;
const ToopagoIcon = styled(ToopagoIconBase)`
  margin: 16px 0;
  width: 100%;
  max-width: 200px;
  flex: 0.4;
`;
const Button = styled(ButtonBase)`
  margin-bottom: 16px;
`;
const FacebookIcon = styled.Image`
  width: 16px;
  height: 100%;
  resize-mode: contain;
`;

const Footer = styled.View`
  width: 100%;
  padding: 2.5%;
  flex: 0.5;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${p => p.theme.background};
`;
const Link = styled(ButtonBase)`
  flex: 1;
`;

export default LoginForm;
