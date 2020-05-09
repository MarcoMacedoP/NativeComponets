import { TouchableOpacityProps } from 'react-native';

export type ButtonStylesType = {
  isPrimary?: boolean;
  isOutline?: boolean;
  isSecondary?: boolean;
  isEnabled?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
};

type StyledProps = {
  color: string | null | any;
};
type TouchableProps = StyledProps & {
  isEnabled: boolean;
};
export type ButtonProps = (ButtonStylesType & TouchableOpacityProps) & {
  text: string;
  onPress: () => void;
  style?: StyleProp<any>;
};

type ButtonType = React.FC<ButtonProps>;
