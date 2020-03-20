import * as React from 'react';
import { ThemeProvider } from 'react-native-toopago-ui';
// import Signup from './components/Signup';
import Login from './components/Login';

export default function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}
