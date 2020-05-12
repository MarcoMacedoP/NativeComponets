import React from 'react';
import FullscreenModal from '../Modals/FullscreenModal';
import { SuccessIcon } from '../Icons';
import styled from '../../styled-components';
import Button from '../Button';

export type SuccessModalProps = {
  /** Function to be called when sucess modal is showed*/
  onCloseModal: () => void;
  /** Boolean that determine if the success modal is showed*/
  isModalShowed: boolean;
  /** Function to be called when the email is submited*/
};
export default ({ onCloseModal, isModalShowed }: SuccessModalProps) => (
  <FullscreenModal
    icon={SuccessIcon}
    onClose={onCloseModal}
    isShowed={isModalShowed}
    isSecondaryDark
  >
    <Container>
      <Text>
        Te enviaremos las instruccciones a tu correo para recuperar tu cuenta.
      </Text>
      <Button text="Continuar" type="secondaryDark" onPress={onCloseModal} />
    </Container>
  </FullscreenModal>
);

const Container = styled.View`
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  flex-direction: row;
`;
const Text = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.black};
  align-self: flex-start;
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 24px;
`;
