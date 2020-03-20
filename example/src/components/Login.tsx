import React, { useState } from 'react';
import {
  ThemeProvider,
  Login,
  InputRounded as InputBase,
  EmailIcon,
  LockIcon,
  ConfirmRawModal,
} from 'react-native-toopago-ui';
import styled from 'styled-components/native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsShowed, setModalIsShowed] = useState(false);
  const emptyVoid = () => {
    console.log('hey');
    setModalIsShowed(true);
  };
  return (
    <ThemeProvider>
      <Login
        onLogin={emptyVoid}
        onFacebookLogin={emptyVoid}
        onBackupAccount={emptyVoid}
        onCreateAccount={emptyVoid}
      >
        <Input
          placeholder="Email"
          autoFocus
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
        >
          <EmailIcon />
        </Input>

        <Input
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        >
          <LockIcon />
        </Input>
      </Login>
      <ConfirmRawModal
        transactionData={{
          amount: '0.000012',
          usd: '0.02',
          currency: 'AGVC',
        }}
        isShowed={modalIsShowed}
        onClose={() => setModalIsShowed(false)}
      />
    </ThemeProvider>
  );
}
const Input = styled(InputBase)`
  margin-bottom: 16px;
`;
