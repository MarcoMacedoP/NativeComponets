import React from 'react';
import { CreditCard } from 'react-native-toopago-ui';
import styled from 'styled-components/native';

export default () => {
  return (
    <CardsContainer>
      <CreditCard card="visa" digits={123132112} isChecked={false} />
      <CreditCard card="mastercard" digits={123132112} isChecked={true} />
      <CreditCard card="visa" digits={123132112} isChecked={false} />
    </CardsContainer>
  );
};

const CardsContainer = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
