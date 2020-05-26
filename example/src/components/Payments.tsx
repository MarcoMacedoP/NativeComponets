import React, { useState } from 'react';

import {
  CreditCard,
  AnimatedButton,
  Card,
  styled,
  EmailIcon,
} from '@lomelidev/react-native-toopago-ui';

export default () => {
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isSecondCardChecked, setIsSecondCardChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonPress = () => {
    console.log('onPress');
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  const handleCheck = (value: boolean) => {
    if (isSecondCardChecked && value) {
      setIsSecondCardChecked(false);
      setIsCardChecked(true);
    } else {
      setIsCardChecked(value);
    }
  };
  const handleSecondCheck = (value: boolean) => {
    if (isCardChecked && value) {
      setIsCardChecked(false);
      setIsSecondCardChecked(true);
    } else {
      setIsSecondCardChecked(value);
    }
  };
  return (
    <CardsContainer>
      <Card
        isPrimary
        onPress={() => console.log('')}
        icon={EmailIcon}
        content={[
          { title: 'Example card', desc: 'This is the card description' },
        ]}
      />
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
