import React from 'react';
import Dots from '../Icons/Dots';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../styles';

type Card = 'VISA' | 'MASTERCARD' | 'AMEX';

type CreditCardProps = {
  card: Card;
  digits: number | string;
  isEnabled?: boolean;
};
export const CreditCard: React.FC<CreditCardProps> = props => {
  const image =
    props.card === 'VISA'
      ? require('../../assets/icons/visa.png')
      : props.card === 'MASTERCARD'
      ? require('../../assets/icons/mastercard.png')
      : require('../../assets/icons/amex.png');

  return (
    <View style={[styles.container, !props.isEnabled && styles.disabledCard]}>
      <TouchableOpacity
        activeOpacity={props.isEnabled ? 0.4 : 1}
        style={[styles.touchable, !props.isEnabled && styles.disabledCard]}
      >
        <Image source={image} style={styles.image} />
        <Text style={styles.numbers}>{props.digits || '2342342342342'}</Text>
        {props.children}
        <View style={styles.dotsContainer}>
          <Dots style={styles.dots} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  disabledCard: {
    width: '100%',
    opacity: 0.4,
  },
  container: {
    width: '100%',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: theme.background,
    borderColor: theme.lightGray,
    marginVertical: 4,
    paddingHorizontal: 4,
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 5,
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
