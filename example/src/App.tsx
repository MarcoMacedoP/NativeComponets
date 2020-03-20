import * as React from 'react';
import { ThemeProvider } from 'react-native-toopago-ui';
import Walkthrough from './components/Walkthrough';
import styled from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Walkthrough />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
