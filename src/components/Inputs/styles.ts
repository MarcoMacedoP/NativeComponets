import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  errorLabel: {
    fontSize: 12,
    color: theme.error,
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
  },
});
