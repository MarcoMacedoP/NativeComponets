import React from 'react';
import { FormFooter, BaseForm, FormContainer } from '../BaseForm';
//styled
import styled from '../../styled-components';

type LoginFormType = React.FC<{
  onLogin: () => void;
  onFacebookLogin: () => void;
  onCreateAccount: () => void;
  onBackupAccount: () => void;
}>;

const LoginForm: LoginFormType = props => {
  const walletIcon = require('../../assets/icons/terminal.png');
  return (
    <FormContainer>
      <Header>
        <WalletIcon source={walletIcon} />
      </Header>
      <BaseForm
        primaryButtonText="Log in"
        onPrimaryButtonPress={props.onLogin}
        secondaryButtonText="Log in with facebook"
        onSecondaryButtonPress={props.onFacebookLogin}
      >
        {props.children}
      </BaseForm>
      <FormFooter
        onLeftButtonPress={props.onCreateAccount}
        onRigthButtonPress={props.onBackupAccount}
        leftButtonText="Crea tu cuenta"
        rigthButtonText="Recupera tu cuenta"
      />
    </FormContainer>
  );
};

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

export default LoginForm as LoginFormType;
