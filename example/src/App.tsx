import * as React from 'react';
import { ThemeProvider } from 'react-native-toopago-ui';
import Signup from './components/Signup';
import Walkthrough from './components/Walkthrough';

export default function App() {
  return (
    <ThemeProvider>
      <Walkthrough />
    </ThemeProvider>
  );
}
