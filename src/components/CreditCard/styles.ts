import { theme } from '../../styles';
import { StyleSheet } from 'react-native';

const cardShadow = {
  borderColor: theme.lightGray,
  shadowColor: theme.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  borderRadius: 5,
  backgroundColor: theme.background,
};

export const styles = StyleSheet.create({
  disabledCard: {
    width: '100%',
    opacity: 0.4,
  },
  container: {
    width: '100%',
  },
  loadingCardContainer: {
    ...cardShadow,
    width: '100%',
    marginVertical: 4,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    paddingHorizontal: 4,
    marginVertical: 4,
    ...cardShadow,
  },
  image: {
    resizeMode: 'contain',
    flex: 0.6,
    marginRight: 8,
  },
  numbers: {
    color: theme.gray,
    flex: 4,
  },
  dotsContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  dots: {
    width: '30%',
    height: '40%',
  },
});
