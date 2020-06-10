import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    borderRadius: theme.borderRadius,
    height: 42,
  },
  text: {
    alignSelf: 'center',
  },
});
