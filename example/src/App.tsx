import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-toopago-ui';

export default function App() {
  const handleClick = () => console.log('click');
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <Button style={styles.button} onPress={handleClick} text="Ok boomer" />
        <Button
          style={styles.button}
          isPrimary
          onPress={handleClick}
          text="Ok boomer"
        />
        <Button isSecondary onPress={handleClick} text="Ok boomer" />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 8,
  },
});
