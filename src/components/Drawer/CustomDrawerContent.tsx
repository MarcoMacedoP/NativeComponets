import React from 'react';
import DrawerHeader from './DrawerHeader';
import {
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { theme } from '../../styles';
import { ImageSourcePropType } from 'react-native';

type DrawerHeaderProps = {
  userImageSource: ImageSourcePropType;
  userName: string;
};

type CustomDrawerContentType = React.FC<
  DrawerContentComponentProps & DrawerHeaderProps
>;
const CustomDrawerContent: CustomDrawerContentType = props => {
  const { userName, userImageSource, ...otherProps } = props;
  return (
    <>
      <DrawerHeader userName={userName} userImageSource={userImageSource} />
      <DrawerItemList
        {...otherProps}
        activeBackgroundColor={theme.grayLigth}
        inactiveTintColor={theme.primary}
        activeTintColor={theme.secondary}
      />
    </>
  );
};

export default CustomDrawerContent as CustomDrawerContentType;
