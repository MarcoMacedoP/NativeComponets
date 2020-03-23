import React, { useContext } from 'react';
import DrawerHeader from './DrawerHeader';
import { SafeAreaView } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import { CustomDrawerContentType } from './types';
import { ThemeType } from 'src/styled-components/theme';
import { ThemeContext } from 'styled-components';

const CustomDrawerContent: CustomDrawerContentType = props => {
  const { userName, userImageSource, ...otherProps } = props;
  const theme: ThemeType = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <DrawerHeader userName={userName} userImageSource={userImageSource} />
      <DrawerItemList
        {...otherProps}
        activeBackgroundColor={theme.grayLigth}
        inactiveTintColor={theme.primary}
        activeTintColor={theme.secondary}
      />
    </SafeAreaView>
  );
};
export default CustomDrawerContent as CustomDrawerContentType;
// {props.state.routes.map((route, index) => {
//   const isFocused = index === props.state.index;
//   const onPress = () =>
//     isFocused
//       ? navigation.closeDrawer()
//       : navigation.navigate(route.name);
//   return (
//     <DrawerItem key={route.key} title={route.name} onPress={onPress}>
//       {renderIcon(route)}
//     </DrawerItem>
//   );
// })}
