import React from 'react';
import { FormFooter, BaseForm, FormContainer } from '../BaseForm';
//styled
import styled from '../../styled-components';

type LoginFormType = React.FC<{
  onLogin: () => void;
  onFacebookLogin: () => void;
  onCreateAccount: () => void;
  onBackupAccount: () => void;
  isLoading?: boolean;
}>;

const LoginForm: LoginFormType = props => {
  const walletIcon = require('../../assets/icons/terminal.png');
  return (
    <FormContainer>
      <Header>
        <WalletIcon source={walletIcon} />
      </Header>
      <BaseForm
        isLoading={props.isLoading}
        primaryButtonText="Log in"
        onPrimaryButtonPress={props.onLogin}
        secondaryButtonText="Log in with facebook"
        onSecondaryButtonPress={props.onFacebookLogin}
        footer={() => (
          <FormFooter
            onLeftButtonPress={props.onCreateAccount}
            onRigthButtonPress={props.onBackupAccount}
            leftButtonText="Crea tu cuenta"
            rigthButtonText="Recupera tu cuenta"
          />
        )}
      >
        {props.children}
      </BaseForm>
    </FormContainer>
  );
};

const Header = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 2;
  min-height: 100px;
`;
const WalletIcon = styled.Image`
  flex: 1;
  width: 100%;
  resize-mode: contain;
`;

export default LoginForm as LoginFormType;
