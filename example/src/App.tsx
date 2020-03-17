import * as React from 'react';
import { ThemeProvider, LoginForm } from 'react-native-toopago-ui';

export default function App() {
  const emptyVoid = () => {
    console.log('hey');
  };

  return (
    <ThemeProvider>
      <LoginForm onLogin={emptyVoid} />
    </ThemeProvider>
  );
}
