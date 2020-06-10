/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Dimensions, Image, Text, StyleSheet } from 'react-native';
import {
  Button,
  SwipeModal,
  Card,
  Input,
  LockIcon,
  InputWithLabel,
} from '@lomelidev/react-native-toopago-ui';

export default ({ navigation }: { navigation: any }) => {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const inputRef = useRef<any>();
  const toggleModal = () => setIsModalShowed(!isModalShowed);
  const closeModal = () => setIsModalShowed(false);
  const handleFocus = () => {
    inputRef && inputRef.current.getNode().focus();
  };
  const defaultError = 'Campo invalido';
  const [error, setError] = useState<string | null>(null);
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

        <Input placeholder="No ref value" hasCenterText icon={LockIcon} />
        <InputWithLabel label="Valor" />
        <InputWithLabel
          label="Hello there"
          placeholder="Some value"
          ref={inputRef}
          error={error}
          icon={LockIcon}
        />
        <Button
          text="Toggle input error"
          type="error"
          onPress={() => {
            if (!error) {
              setError(defaultError);
            } else setError(null);
          }}
        />
        <Button
          text="Focus en button"
          type="secondaryDark"
          onPress={handleFocus}
          style={styles.button}
        />
        <Button
          text="Abir un modal"
          onPress={toggleModal}
          type="primary"
          style={styles.button}
        />
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
const styles = StyleSheet.create({
  button: { marginTop: 16 },
});
