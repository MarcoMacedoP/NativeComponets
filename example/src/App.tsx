import * as React from 'react';
import { ThemeProvider } from 'react-native-toopago-ui';
import Signup from './components/Signup';

export default function App() {
  return (
    <ThemeProvider>
      <Signup />
    </ThemeProvider>
  );
}
