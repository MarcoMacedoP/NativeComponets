import * as React from 'react';
import styled from '../../styled-components';
import NotificationIcon from '../Icons/Notifications';

type DrawerNotificationsProps = {
  title?: string;
  notifications: number;
  onPress: () => void;
};

export const DrawerNotifications: React.FC<DrawerNotificationsProps> = ({
  title,
  notifications,
  onPress,
}) => {
  return (
    <NotificationsContainer>
      {title && <NotificationText>{title || 'Hola Fernanda'}</NotificationText>}
      <NotificationIcon
        numberOfNotifications={notifications}
        onPress={onPress}
      />
    </NotificationsContainer>
  );
};
const NotificationsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
`;
const NotificationText = styled.Text`
  color: ${props => props.theme.background};
  margin-right: 8px;
  font-size: 14px;
`;
