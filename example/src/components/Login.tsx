import React, { useState } from 'react';
import {
  ThemeProvider,
  Login,
  InputRounded as InputBase,
  EmailIcon,
  LockIcon,
} from '@lomelidev/react-native-toopago-ui';
import styled from 'styled-components/native';

export default function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const emptyVoid = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <ThemeProvider>
      <Login
        onLogin={emptyVoid}
        isLoading={isLoading}
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
    </ThemeProvider>
  );
}
const Input = styled(InputBase)`
  margin-bottom: 16px;
`;
