import { StyleProp, ViewStyle } from 'react-native';
type IconProps = {
  style?: StyleProp<ViewStyle>;
  color?: any;
};
export type IconType = React.FC<IconProps>;
export type NotificationsIconType = React.FC<
  IconProps & {
    numberOfNotifications: number;
  }
>;
