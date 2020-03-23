import React from 'react';
import styled from '../../styled-components';
import { NavbarType } from './types';
import { SafeAreaView, StatusBar } from 'react-native';
import { MenuIcon as MenuIconBase } from './Menu';
import NotificationIcon from '../Icons/Notifications';
const Navbar: NavbarType = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="transparent" />
      <Container>
        <MenuIcon />
        <NotificationsContainer>
          <NotificationText> {props.title || 'Hola Fernanda'}</NotificationText>
          <NotificationIcon numberOfNotifications={3} />
        </NotificationsContainer>
      </Container>
    </SafeAreaView>
  );
};
const Container = styled.View`
  background-color: ${props => props.theme.primary};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
`;
const MenuIcon = styled(MenuIconBase)`
  flex: 1;
`;
const NotificationsContainer = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const NotificationText = styled.Text`
  color: ${props => props.theme.background};
  margin-right: 8px;
`;
export default Navbar as NavbarType;
