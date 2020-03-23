import * as React from 'react';
import {
  ThemeProvider,
  Navbar,
  NavbarItem,
  NavbarHeader,
  EmailIcon,
} from 'react-native-toopago-ui';
import Payments from './components/Payments';
import styled from 'styled-components/native';
export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Navbar />
        <NavbarHeader
          userName="Fernanda Lopez"
          userImageSource={require('./assets/profile-image.png')}
        />
        <NavbarItem>
          <EmailIcon />
        </NavbarItem>
        <Payments />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
