/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Dimensions, Image, Text, Animated } from 'react-native';
import {
  Button,
  SwipeModal,
  Card,
  Input,
} from '@lomelidev/react-native-toopago-ui';

export default ({ navigation }: { navigation: any }) => {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const inputRef = useRef<any>();
  const toggleModal = () => setIsModalShowed(!isModalShowed);
  const closeModal = () => setIsModalShowed(false);
  const handleFocus = () => {
    inputRef && inputRef.current.getNode().focus();
  };
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        flex: 1,
        width: Dimensions.get('screen').width,
      }}
    >
      <View
        style={{
          padding: 16,
        }}
      >
        <View style={{ height: 150 }}>
          <Card onPress={toggleModal}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../assets/btc-icon.png')}
                style={{ height: 32, width: 32 }}
                resizeMode="contain"
              />
              <Text style={{ color: 'orange', fontSize: 26 }}>BTC</Text>
            </View>
          </Card>
        </View>

        <Input placeholder="No ref value " />
        <Input placeholder="Some value" ref={inputRef}>
          {({ color }) => (
            <Animated.Text style={[{ color }]}>Hello there</Animated.Text>
          )}
        </Input>
        <Button
          text="Focus en button"
          type="secondaryDark"
          onPress={handleFocus}
        />
        <Button text="Abir un modal" onPress={toggleModal} type="primary" />
        <Button
          text="Ir a otra pantalla"
          onPress={() => navigation.navigate('Keyboard')}
          type="secondary"
          style={{ marginTop: 16 }}
        />
      </View>
      <SwipeModal isShowed={isModalShowed} onClose={closeModal}>
        <Text>Este es un modal</Text>
      </SwipeModal>
    </View>
  );
};
