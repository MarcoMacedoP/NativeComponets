import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NumericKeyboard } from '@lomelidev/react-native-toopago-ui';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> {value || 0}</Text>
      </View>
      <NumericKeyboard value={value} onPress={setValue} />
    </View>
  );
};
