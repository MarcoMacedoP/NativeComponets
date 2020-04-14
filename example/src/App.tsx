import * as React from 'react';
import {
  ThemeProvider,
  EmailIcon,
  LockIcon,
  CustomDrawerContent,
} from '@lomelidev/react-native-toopago-ui';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Payments from './components/Payments';
import styled from 'styled-components/native';
import WalkthorughScreen from './components/Walkthrough';
import ProfileScreen from './components/Profile';
import BackupScreen from './components/Backup';
import LoginScreen from './components/Login';
import Keyboard from './components/Keyboard';
import SignupScreen from './components/Signup';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Container>
          <Drawer.Navigator
            initialRouteName="Payments"
            drawerContent={props => (
              <CustomDrawerContent
                userImageSource={require('./assets/profile-image.png')}
                userName="Fernanda Lopez"
                {...props}
              />
            )}
          >
            <Drawer.Screen
              name="Perfil"
              component={ProfileScreen}
              options={{
                drawerIcon: EmailIcon,
              }}
            />
            <Drawer.Screen
              name="Payments"
              component={Payments}
              options={{
                drawerIcon: LockIcon,
              }}
            />
            <Drawer.Screen name="Walkthorugh" component={WalkthorughScreen} />
            <Drawer.Screen name="Backup" component={BackupScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Signup" component={SignupScreen} />
            <Drawer.Screen name="Keyboard" component={Keyboard} />
          </Drawer.Navigator>
        </Container>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
