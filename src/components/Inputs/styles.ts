import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  inputWithLabelContainer: {
    marginVertical: 4,
  },
  inputRounded: {
    borderRadius: 18,
    paddingVertical: 4,
    paddingLeft: 12,
    minHeight: 32,
  },
  container: {
    marginVertical: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
    width: '100%',
  },
  containerCentered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  inputCentered: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    width: '30%',
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
