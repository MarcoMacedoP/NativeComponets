import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export type NavbarType = React.FC<{
  title: string;
  notifications: string;
}>;

export type MenuIconType = React.FC<{
  style?: StyleProp<ViewStyle>;
}>;

export type NavbarItemType = React.FC<{
  title: string;
  children: React.ReactElement<any>;
}>;

export type NavbarHeaderType = React.FC<{
  userImageSource: ImageSourcePropType;
  userName: string;
}>;
