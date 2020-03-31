import React, { useState, useContext } from 'react';
import styled from '../../styled-components';
import { ThemeType } from '../../styled-components/theme';

import { StyleProp, Animated, Easing } from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar, StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components';

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

const SwipeModal: ModalType = ({ onClose, isShowed, children, style }) => {
  const [animatedValue] = useState(new Animated.Value(1));
  const theme: ThemeType = useContext(ThemeContext);
  const interpolatedColor = animatedValue.interpolate({
    inputRange: [1, 2],
    outputRange: [theme.gray, theme.secondary],
  });
  const animatedStyles = {
    backgroundColor: interpolatedColor,
  };
  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 2,
      duration: 200,
      easing: Easing.circle,
    }).start();
  };
  function reverseAnimation({
    shouldClose = false,
  }: {
    shouldClose?: boolean;
  }) {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.circle,
    }).start(() => shouldClose && onClose());
  }
  function handleClose() {
    reverseAnimation({ shouldClose: true });
  }
  return (
    <>
      <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
      <Modal
        style={styles.modal}
        isVisible={isShowed}
        onBackdropPress={handleClose}
        onSwipeComplete={handleClose}
        onSwipeStart={startAnimation}
        onSwipeCancel={() => reverseAnimation({})}
        swipeDirection={['down']}
      >
        <SwipeModalContent style={style}>
          <HrRounded
            style={[animatedStyles]}
            onTouchStart={startAnimation}
            onTouchEnd={reverseAnimation}
          />
          {children}
        </SwipeModalContent>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
  },
});

type StyledProps = StylesType & {};

const HrRounded = styled(Animated.View)`
  position: absolute;
  top: 10px;
  height: 5px;
  width: 200px;
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
  min-height: 120px;
`;
export default SwipeModal;
