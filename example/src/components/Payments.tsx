import React, { useState } from 'react';
import {
  CreditCard,
  AnimatedButton,
  styled,
  LoadingCards,
} from '@lomelidev/react-native-toopago-ui';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonPress = () => {
    console.log('onPress');
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <CardsContainer>
      <LoadingCards />
      <CreditCard card="VISA" digits={123132112} isEnabled={true} />
      <CreditCard card="MASTERCARD" digits={123132112} />
      <AnimatedButton
        onPress={handleButtonPress}
        isLoading={isLoading}
        text="Aceptar"
        type="primary"
      />
    </CardsContainer>
  );
};

const CardsContainer = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
