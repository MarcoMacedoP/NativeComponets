import React from 'react';
import { Svg, G as BaseG, Path } from 'react-native-svg';
import { Animated } from 'react-native';
import { IconType } from './types';
import IconContainer from './Container';
const G = Animated.createAnimatedComponent(BaseG);

const LockIcon: IconType = ({ style, color }) => {
  const defaultColor = '#aca8a8';
  return (
    <IconContainer style={style}>
      <Svg width="16" height="16" viewBox="0 0 10.673 13.03">
        <G
          fill={color || defaultColor}
          stroke={color || defaultColor}
          strokeWidth="0.3"
          transform="translate(-4.85 .15)"
        >
          <Path
            d="M13.958 4.741V3.418A3.612 3.612 0 0010.186 0a3.612 3.612 0 00-3.772 3.418v1.323A1.706 1.706 0 005 6.419v4.607a1.706 1.706 0 001.7 1.7h6.964a1.706 1.706 0 001.7-1.7V6.419a1.706 1.706 0 00-1.406-1.678zM6.886 3.418a3.142 3.142 0 013.3-2.947 3.142 3.142 0 013.3 2.947v1.3h-6.6zm8.014 7.608a1.234 1.234 0 01-1.233 1.233H6.7a1.234 1.234 0 01-1.233-1.233V6.419A1.234 1.234 0 016.7 5.186h6.964A1.234 1.234 0 0114.9 6.419z"
            data-name="Trazado 4067"
          />
          <Path
            d="M10.186 6.601a.944.944 0 00-.943.943v1.414a.943.943 0 001.886 0V7.544a.944.944 0 00-.943-.943zm.471 2.357a.472.472 0 01-.943 0V7.544a.472.472 0 11.943 0z"
            data-name="Trazado 4068"
          />
        </G>
      </Svg>
    </IconContainer>
  );
};

export default LockIcon;
