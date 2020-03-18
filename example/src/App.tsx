import * as React from 'react';
import { ThemeProvider, LoginForm } from 'react-native-toopago-ui';

export default function App() {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const emptyVoid = () => {
    console.log('hey');
  };

  return (
    <ThemeProvider>
      <LoginForm
        onLogin={emptyVoid}
        onFacebookLogin={emptyVoid}
        password={password}
        onPasswordChange={setPassword}
        email={email}
        onEmailChange={setEmail}
        onBackupAccount={emptyVoid}
        onCreateAccount={emptyVoid}
      />
    </ThemeProvider>
  );
}
