import React from 'react';
import styled from '../../styled-components';
import { StyleProp } from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar, StyleSheet } from 'react-native';
/**
 *  A component to manage modals through app.
 *  @param isShowed indicates if modal is showed
 *  @param onClose a function to be called when the modal closes.
 *  @param style a styles extra to be showed on the modal.
 *  @param title (optional) an text showed in the top of modal
 */
type StylesType = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
  isDanger?: boolean;
};
type ModalType = React.FC<
  StylesType & {
    onClose: () => void;
    style?: StyleProp<any>;
    isShowed?: boolean;
  }
>;

const SwipeModal: ModalType = ({
  onClose,
  isShowed,
  children,
  style,
  ...styleProps
}) => (
  <>
    {isShowed && (
      <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
    )}
    <Modal
      style={styles.view}
      isVisible={isShowed}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      {...styleProps}
    >
      <SwipeModalContent style={style}>
        <HrRounded />
        {children}
      </SwipeModalContent>
    </Modal>
  </>
);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

type StyledProps = StylesType & {};

const HrRounded = styled.View<StyledProps>`
  position: absolute;
  top: 10px;
  height: 5px;
  width: 200px;
  background-color: ${props => props.theme.gray};
  border-radius: 150px;
`;
const SwipeModalContent = styled.View<StyledProps>`
  background-color: ${props => props.theme.background};
  padding: 20px;
  padding-top: 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: space-around;
  align-items: center;
`;
export default SwipeModal;
