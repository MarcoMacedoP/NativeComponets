/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  DrawerNavbar,
  Button,
  SwipeModal,
} from '@lomelidev/react-native-toopago-ui';
export default ({ navigation }: { navigation: any }) => {
  const toggleDrawer = () => navigation.toggleDrawer();
  const [isModalShowed, setIsModalShowed] = useState(false);
  const toggleModal = () => setIsModalShowed(!isModalShowed);
  const closeModal = () => setIsModalShowed(false);
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
        onMenuPress={toggleDrawer}
        onNotificationPress={toggleDrawer}
      />
      <SwipeModal isShowed={isModalShowed} onClose={closeModal}>
        <Text>Profile screen</Text>
      </SwipeModal>
      <Button text="Open modal" onPress={toggleModal} />
    </View>
  );
};
