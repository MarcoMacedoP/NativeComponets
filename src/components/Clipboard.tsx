import React from 'react';
import styled from '../styled-components';
import { StyleProp } from 'react-native';
import BaseCard from './BaseCard';
type StylesType = {
  isPrimary?: boolean;
};

type ClipboardType = React.FC<
  StylesType & {
    text?: string;
    onPress: () => void;
    style?: StyleProp<any>;
  }
>;

const Clipboard: ClipboardType = ({ onPress, text, style, ...styleProps }) => {
  const facebookIcon = require('../assets/icons/facebook.png');
  return (
    <BaseCard text={text} {...styleProps} onPress={onPress} style={style}>
      <ClipboardIcon source={facebookIcon} />
    </BaseCard>
  );
};

const ClipboardIcon = styled.Image`
  width: 16px;
  height: 100%;
  resize-mode: contain;
`;
export default Clipboard as ClipboardType;
