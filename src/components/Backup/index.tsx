import React from 'react';
import styled from '../../styled-components';
import { KeyIcon, CrossIcon, EmailIcon } from '../Icons';
import Button from '../Button';
import InputRounded from '../InputRounded';
import SuccessModal, { SuccessModalProps } from './SuccessModal';
type Props = SuccessModalProps & {
  onSubmit: () => void;
  /** The value of the email input*/
  email: string;
  /** Function to be called when the email input change*/
  onEmailChange: (value: string) => void;
};
type BackupType = React.FC<Props>;

/**
 *
 */
const Backup: BackupType = ({ email = '', ...props }) => {
  return (
    <>
      <Container>
        <Header>
          <KeyIcon />
          <Title>Recuperar cuenta</Title>
        </Header>
        <Content>
          <FormContainer>
            <CrossIcon />
            {props.children ? (
              props.children
            ) : (
              <Input
                value={email}
                onChangeText={props.onEmailChange}
                placeholder="Ingresa el email de tu cuenta"
              >
                <EmailIcon />
              </Input>
            )}
          </FormContainer>

          <Button
            text="Recuperar cuenta"
            type="primary"
            onPress={props.onSubmit}
          />
        </Content>
      </Container>
      <SuccessModal
        isModalShowed={props.isModalShowed}
        onCloseModal={props.onCloseModal}
      />
    </>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
`;
const Header = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex: 2;
  background-color: ${props => props.theme.primary};
`;
const Title = styled.Text`
  color: ${props => props.theme.background};
  font-size: 16px;
  margin-top: 16px;
`;
const Content = styled.View`
  flex: 4;
  padding: 16px 24px 24px 24px;
  justify-content: space-between;
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.background};
`;
const FormContainer = styled.View`
  align-items: flex-end;
`;
const Input = styled(InputRounded)`
  align-self: flex-start;
  width: 100%;
  margin-top: 16px;
`;

export default Backup as BackupType;
