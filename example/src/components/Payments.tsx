import React, { useState } from 'react';

import { CreditCard } from '@lomelidev/react-native-toopago-ui';
import styled from 'styled-components/native';

export default () => {
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isSecondCardChecked, setIsSecondCardChecked] = useState(false);
  const [isThirdCardChecked, setIsThirdCardChecked] = useState(false);
  return (
    <CardsContainer>
      <CreditCard
        card="visa"
        digits={123132112}
        isChecked={isCardChecked}
        onChecked={setIsCardChecked}
      />
      <CreditCard
        card="mastercard"
        digits={123132112}
        isChecked={isSecondCardChecked}
        onChecked={setIsSecondCardChecked}
      />
      <CreditCard
        card="visa"
        digits={123132112}
        isChecked={isThirdCardChecked}
        onChecked={setIsThirdCardChecked}
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
