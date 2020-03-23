/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { DrawerNavbar } from 'react-native-toopago-ui';

export default ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        flex: 1,
        width: Dimensions.get('screen').width,
      }}
    >
      <DrawerNavbar
        title="Hola fernanda"
        notifications={2}
        onMenuPress={() => navigation.toggleDrawer()}
      />

      <Text>Profile screen</Text>
    </View>
  );
};
