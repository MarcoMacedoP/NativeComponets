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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Container>
          <Drawer.Navigator
            initialRouteName="Backup"
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
          </Drawer.Navigator>
        </Container>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
