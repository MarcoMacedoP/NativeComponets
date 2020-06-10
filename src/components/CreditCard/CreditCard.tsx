import React from 'react';
import Dots from '../Icons/Dots';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
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
