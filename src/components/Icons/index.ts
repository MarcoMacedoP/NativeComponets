import EmailIcon from './Email';
import LockIcon from './Lock';
import ToopagoIcon from './ToopagoIcon';
import CirlcesIcon from './Circles';
import KeyIcon from './Key';
import CrossIcon from './Cross';
import SuccessIcon from './Success';

export {
  EmailIcon,
  LockIcon,
  SuccessIcon,
  ToopagoIcon,
  CirlcesIcon,
  KeyIcon,
  CrossIcon,
};

import { StyleProp, ViewStyle } from 'react-native';
export type IconProps = {
  style?: StyleProp<ViewStyle>;
  color?: any;
};
export type IconType = React.FC<IconProps>;
