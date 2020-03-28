import React, { useState, useEffect } from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

type NumericKeyboardProps = {
  color?: string;
  onPress?: any;
  applyBackspaceTint?: boolean;
  value: string;
};
type NumericKeyboardType = React.FC<NumericKeyboardProps>;

const NumericKeyboard: NumericKeyboardType = ({
  color = 'black',
  onPress,
  applyBackspaceTint = true,
  value,
}) => {
  const decimal = true;
  const backspaceImg = require('./backspace.png');
  const [text, setText] = useState(value);
  useEffect(() => {
    setText(value);
  }, [value]);

  const Backspace = () => {
    return (
      <TouchableOpacity
        accessibilityLabel="backspace"
        style={styles.backspace}
        onLongPress={() => {
          onClick('longback');
        }}
        onPress={() => {
          onClick('back');
        }}
      >
        <Image
          source={backspaceImg}
          resizeMode="contain"
          style={applyBackspaceTint && { tintColor: color }}
        />
      </TouchableOpacity>
    );
  };

  const Row = (numbersArray: Array<number>) => {
    let cells = numbersArray.map(val => Cell(val));
    return <View style={styles.row}>{cells}</View>;
  };

  const Cell = (symbol: number | string) => {
    const handleClick = () => onClick(String(symbol));
    return (
      <TouchableOpacity
        style={[styles.cell]}
        key={symbol}
        accessibilityLabel={String(symbol)}
        onPress={handleClick}
      >
        <Text style={[styles.number, { color: color }]}>{symbol}</Text>
      </TouchableOpacity>
    );
  };

  const onClick = (val: any) => {
    let curText = text;
    if (val === '0') {
      if (text !== '0') {
        if (isNaN(val)) {
          if (val === 'back') {
            curText = curText.slice(0, -1);
          } else if (val === 'longback') {
            curText = '';
          } else {
            curText += val;
          }
        } else {
          curText += val;
        }
      }
    } else {
      if (isNaN(val)) {
        if (val === 'back') {
          curText = curText.slice(0, -1);
        } else if (val === 'longback') {
          curText = '';
        } else {
          curText += val;
        }
      } else {
        curText += val;
      }
    }
    setText(curText);
    onPress(curText);
  };

  return (
    <View style={[styles.container]}>
      {Row([1, 2, 3])}
      {Row([4, 5, 6])}
      {Row([7, 8, 9])}
      <View style={styles.row}>
        {decimal ? Cell('.') : <View style={{ flex: 1 }} />}
        {Cell(0)}
        {Backspace()}
      </View>
    </View>
  );
};
export default NumericKeyboard as NumericKeyboardType;
