import { TouchableOpacityProps, StyleProp } from 'react-native';
import { colorProp } from 'src/styles';

export type ButtonProps = TouchableOpacityProps & {
  type?: colorProp;
  text: string;
  onPress: () => void;
  style?: StyleProp<any>;
};

export type ButtonType = React.FC<ButtonProps>;
