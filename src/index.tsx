import { NativeModules } from 'react-native';

type ToopagoUiType = {
  getDeviceName(): Promise<string>;
};

const { ToopagoUi } = NativeModules;

export default ToopagoUi as ToopagoUiType;
