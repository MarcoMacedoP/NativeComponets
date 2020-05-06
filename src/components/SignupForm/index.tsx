import React from 'react';
import { FormFooter, BaseForm, FormContainer } from '../BaseForm';
import styled from '../../styled-components';
import { Platform } from 'react-native';
type SignupType = React.FC<{
  onLoginPress: () => void;
  onBackupAccount: () => void;
  onCreateAccount: () => void;
  onCreateWithFacebook: () => void;
}>;

const Signup: SignupType = props => (
  <>
    <StatusBar
      barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
    />
    <FormContainer>
      <BaseForm
        footer={() => (
          <FormFooter
            onLeftButtonPress={props.onLoginPress}
            leftButtonText="Inicia sesión"
            onRigthButtonPress={props.onBackupAccount}
            rigthButtonText="Recupera tu cuenta"
          />
        )}
        primaryButtonText="Crear cuenta"
        onPrimaryButtonPress={props.onCreateAccount}
        onSecondaryButtonPress={props.onCreateWithFacebook}
        secondaryButtonText="Crea una cuenta con facebook"
      >
        {props.children}
      </BaseForm>
    </FormContainer>
  </>
);
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background};
`;
const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.primary,
}))``;
export default Signup as SignupType;
