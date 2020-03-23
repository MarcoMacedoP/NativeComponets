import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export type DrawerNavbarType = React.FC<{
  title: string;
  onMenuPress: () => void;
  onNotificationPress: () => void;
  notifications: number;
}>;

export type DrawerMenuIconType = React.FC<{
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}>;

export type DrawerItemType = React.FC<{
  title: string;
  children: React.ReactElement<any>;
}>;

type DrawerHeaderProps = {
  userImageSource: ImageSourcePropType;
  userName: string;
};
export type DrawerHeaderType = React.FC<DrawerHeaderProps>;

export type CustomDrawerContentType = React.FC<
  DrawerContentComponentProps & DrawerHeaderProps
>;
