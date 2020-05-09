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
  isFacebookLoading?: boolean;
}>;
const walletIcon = require('../../assets/icons/terminal.png');

const LoginForm: LoginFormType = props => {
  return (
    <FormContainer>
      <Header>
        <WalletIcon source={walletIcon} resizeMode="contain" />
      </Header>
      <BaseForm
        isLoading={props.isLoading}
        isLoadingFacebook={props.isFacebookLoading}
        primaryButtonText="Inciar sesión"
        onPrimaryButtonPress={props.onLogin}
        secondaryButtonText="Iniciar sesión con Facebook"
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
  position: relative;
`;
const WalletIcon = styled.Image`
  flex: 1;
  width: 100%;
  max-height: 30%;
  position: absolute;
  bottom: -64px;
`;

export default LoginForm as LoginFormType;
