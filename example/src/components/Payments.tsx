import React from 'react';

import { CreditCard } from '@lomelidev/react-native-toopago-ui';
import styled from 'styled-components/native';

export default () => {
  const onChecked = () => console.log('hello there');
  return (
    <CardsContainer>
      <CreditCard
        card="visa"
        digits={123132112}
        isChecked={false}
        onChecked={onChecked}
      />
      <CreditCard
        card="mastercard"
        digits={123132112}
        isChecked={true}
        onChecked={onChecked}
      />
      <CreditCard
        card="visa"
        digits={123132112}
        isChecked={false}
        onChecked={onChecked}
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
