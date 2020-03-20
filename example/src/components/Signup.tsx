import React from 'react';
import styled from 'styled-components/native';

import { Signup, InputRounded, DiscountLabel } from 'react-native-toopago-ui';

export default () => {
  function emptyVoid() {
    console.log('hey');
  }

  return (
    <Signup
      onBackupAccount={emptyVoid}
      onCreateAccount={emptyVoid}
      onCreateWithFacebook={emptyVoid}
      onLoginPress={emptyVoid}
    >
      <Input placeholder="Nombre" />
      <Input placeholder="Email" />
      <Input placeholder="Contrasena" />
      <Input placeholder="Repetir contrasena" />
      <Input placeholder="Telefono" />
      <StyledDiscountLabel text="¿Tienes un código de descuento? ¡Úsalo para recibir los beneficios!" />
      <Input hasCenterText placeholder="Escribe el codigo aqui" />
    </Signup>
  );
};

const Input = styled(InputRounded)`
  margin-bottom: 16px;
`;
const StyledDiscountLabel = styled(DiscountLabel)`
  width: 80%;
`;
