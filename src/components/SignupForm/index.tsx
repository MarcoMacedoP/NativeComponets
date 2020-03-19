import React from 'react';
import { FormFooter, BaseForm, FormContainer } from '../BaseForm';

type SignupType = React.FC<{
  onLoginPress: () => void;
  onBackupAccount: () => void;
  onCreateAccount: () => void;
  onCreateWithFacebook: () => void;
}>;

const Signup: SignupType = props => (
  <FormContainer>
    <BaseForm
      primaryButtonText="Crear cuenta"
      onPrimaryButtonPress={props.onCreateAccount}
      onSecondaryButtonPress={props.onCreateWithFacebook}
      secondaryButtonText="Crea una cuenta con facebook"
    >
      {props.children}
    </BaseForm>
    <FormFooter
      onLeftButtonPress={props.onLoginPress}
      leftButtonText="Inicia sesión"
      onRigthButtonPress={props.onBackupAccount}
      rigthButtonText="Recupera tu cuenta"
    />
  </FormContainer>
);

export default Signup as SignupType;
