import * as React from 'react';
import { ThemeProvider } from 'react-native-toopago-ui';
import Payments from './components/Payments';
import styled from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Payments />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
