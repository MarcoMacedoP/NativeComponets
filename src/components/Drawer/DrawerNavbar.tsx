import React from 'react';
import styled from '../../styled-components';
import { SafeAreaView, StatusBar } from 'react-native';
import NotificationIcon from '../Icons/Notifications';
import { MenuIcon } from './DrawerMenu';

type DrawerNavbarType = React.FC<{
  title: string;
  onMenuPress: () => void;
  onNotificationPress: () => void;
  notifications: number;
}>;
const DrawerNavbar: DrawerNavbarType = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="transparent" />
      <Container>
        <MenuIconContainer onPress={props.onMenuPress}>
          <MenuIcon onPress={props.onMenuPress} />
        </MenuIconContainer>

        <NotificationsContainer>
          <NotificationText>{props.title || 'Hola Fernanda'}</NotificationText>
          <NotificationIcon
            numberOfNotifications={props.notifications}
            onPress={props.onNotificationPress}
          />
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
const MenuIconContainer = styled.TouchableOpacity`
  height: 50%;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  flex: 0.5;
  position: relative;
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
export default DrawerNavbar as DrawerNavbarType;
