import * as React from 'react';

import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const isAndroid = Platform.OS === 'android';

type TouchableProps = TouchableOpacityProps | TouchableNativeFeedbackProps;

export const Touchable: React.FC<TouchableProps> = props =>
  isAndroid ? (
    <TouchableNativeFeedback {...props} />
  ) : (
    <TouchableOpacity {...props} />
  );
