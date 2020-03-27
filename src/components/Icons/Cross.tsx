import React from 'react';
import { IconType } from '.';
import { Svg, Path } from 'react-native-svg';

const Cross: IconType = ({ style, color = '#fff' }) => {
  return (
    <Svg
      width="17.077"
      height="17.143"
      viewBox="0 0 17.077 17.143"
      style={style}
    >
      <Path
        fill={color}
        opacity={0.5}
        stroke={color}
        strokeWidth="1"
        d="M.802 1.905a.8.8 0 010-1.11.8.8 0 011.11 0L8.575 7.47l6.67-6.675a.781.781 0 011.1 1.11L9.683 8.57l6.661 6.672a.781.781 0 01-1.1 1.11L8.575 9.677l-6.663 6.672a.8.8 0 01-1.11 0 .8.8 0 010-1.11L7.463 8.57z"
      />
    </Svg>
  );
};

export default Cross as IconType;
