import React from 'react';
import DrawerHeader from './DrawerHeader';
import { SafeAreaView } from 'react-native';
import { Route } from '@react-navigation/native';
import DrawerItem from './DrawerItem';
import { CustomDrawerContentType } from './types';

const CustomDrawerContent: CustomDrawerContentType = props => {
  function renderIcon(route: Route<string>) {
    const drawerIcon: any = props?.descriptors[route.key]?.options?.drawerIcon;
    if (drawerIcon) {
      return drawerIcon();
    }
  }
  return (
    <SafeAreaView>
      <DrawerHeader
        userName={props.userName}
        userImageSource={props.userImageSource}
      />
      {props.state.routes.map(route => {
        return (
          <DrawerItem key={route.key} title={route.name}>
            {renderIcon(route)}
          </DrawerItem>
        );
      })}
    </SafeAreaView>
  );
};
export default CustomDrawerContent as CustomDrawerContentType;
