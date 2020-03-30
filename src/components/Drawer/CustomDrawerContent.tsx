import React, { useContext } from 'react';
import DrawerHeader, { DrawerHeaderProps } from './DrawerHeader';
import {
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { ThemeType } from 'src/styled-components/theme';
import { ThemeContext } from 'styled-components';
type CustomDrawerContentType = React.FC<
  DrawerContentComponentProps & DrawerHeaderProps
>;
const CustomDrawerContent: CustomDrawerContentType = props => {
  const { userName, userImageSource, ...otherProps } = props;
  const theme: ThemeType = useContext(ThemeContext);
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
