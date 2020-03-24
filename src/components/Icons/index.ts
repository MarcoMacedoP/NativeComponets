import EmailIcon from './Email';
import LockIcon from './Lock';
import ToopagoIcon from './ToopagoIcon';
import CirlcesIcon from './Circles';

export { EmailIcon, LockIcon, ToopagoIcon, CirlcesIcon };

import { StyleProp, ViewStyle } from 'react-native';
export type IconProps = {
  style?: StyleProp<ViewStyle>;
  color?: any;
};
export type IconType = React.FC<IconProps>;
