import React from 'react';
import { StyleProp, StyleSheet, StatusBar } from 'react-native';
import styled from '../../styled-components';
import { useThemeColor, StylesType } from '../../hooks/useThemeColor';
import Modal from 'react-native-modal';
import { CrossIcon } from '../Icons';
type FullscreenType = React.FC<
  StylesType & {
    isShowed: boolean;
    style?: StyleProp<any>;
    onClose: () => void;
    icon?: React.FC<{ color?: string; style?: any }>;
  }
>;
/**
 *  This component show a fullscreen modal with a header and an icon
 *  @param isShowed indicates if modal is showed
 *  @param onClose a function to be called when the modal closes.
 *  @param style a styles extra to be showed on the modal.
 *  @param title (optional) an text showed in the top of modal
 */
const FullscreenModal: FullscreenType = ({
  onClose,
  isShowed,
  style,

  children,
  icon,
  ...styleProps
}) => {
  const color = useThemeColor(styleProps);

  return (
    <Modal
      isVisible={isShowed}
      onBackdropPress={onClose}
      style={styles.modal}
      onSwipeComplete={onClose}
      onModalHide={onClose}
      swipeDirection={['down']}
    >
      <StatusBar backgroundColor={color} barStyle="light-content" />
      <Container style={style}>
        <Header color={color}>
          <CloseIconContainer onPress={onClose}>
            <CrossIcon />
          </CloseIconContainer>
          {icon && icon({ color: '#fff', style: styles.icon })}
        </Header>
        <Content>{children}</Content>
      </Container>
    </Modal>
  );
};
type StyledProps = {
  color: string;
};
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    flex: 1,
    margin: 0,
  },
  icon: {
    width: 80,
    height: 80,
  },
});
const Container = styled.View`
  flex: 1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${props => props.theme.background};
`;
const Header = styled.View<StyledProps>`
  background-color: ${props => props.color};
  flex: 1;
  min-height: 50px;
  width: 100%;
  align-items: center;
  padding: 24px 16px 16px;
  border-radius: 12px;
`;
const CloseIconContainer = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 16px;
`;
const Content = styled.View`
  flex: 3;
  padding: 16px;
`;

export default FullscreenModal;
