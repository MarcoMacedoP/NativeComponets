import * as React from 'react';
import {
  ThemeProvider,
  EmailIcon,
  LockIcon,
  CustomDrawerContent,
  useTheme,
  DrawerNotifications,
  DrawerMenu,
} from '@lomelidev/react-native-toopago-ui';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Container>
          <Drawer.Navigator
            initialRouteName="Stack"
            drawerContent={props => (
              <CustomDrawerContent
                userImageSource={require('./assets/profile-image.png')}
                userName="Fernanda Lopez"
                {...props}
              />
            )}
          >
            <Drawer.Screen name="Stack" component={StackRouter} />
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

/**
 * Example of using the stack router to render the toopago default Navbar.
 *
 */
const StackRouter = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  return (
    // sets the header rigth to display notifications.
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: theme.background,
        headerRight: () => (
          <DrawerNotifications onPress={() => {}} notifications={2} />
        ),
      }}
    >
      {/* in the screens that need the drawer button add the option, don't do it on Navigator screen options
        becase will override the back button.
      */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => <DrawerMenu onPress={navigation.openDrawer} />,
        }}
      />
      <Stack.Screen name="Keyboard" component={Keyboard} />
    </Stack.Navigator>
  );
};

const Container = styled.View`
  flex: 1;
`;
