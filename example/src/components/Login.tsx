import React, { useState } from 'react';
import {
  ThemeProvider,
  Login,
  InputRounded,
  EmailIcon,
  LockIcon,
} from '@lomelidev/react-native-toopago-ui';

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
        <InputRounded
          placeholder="Email"
          autoFocus
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
          icon={({ color }) => <EmailIcon color={color} />}
        />

        <InputRounded
          placeholder="Contraseña"
          secureTextEntry
          icon={({ color }) => <LockIcon color={color} />}
          value={password}
          onChangeText={setPassword}
        />
      </Login>
    </ThemeProvider>
  );
}
