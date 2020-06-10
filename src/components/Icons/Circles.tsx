import React from 'react';
import { IconType } from '.';
import { Svg, G, Path } from 'react-native-svg';

const Circles: IconType = ({ style, color = '#fff' }) => (
  <Svg width="100%" height="200%" viewBox="0 0 150 118" style={style}>
    <G id="Grupo_5615" data-name="Grupo 5615" transform="translate(-5016 256)">
      <Path
        id="circle"
        d="M59,0c32.585,0,59,26.191,59,58.5S91.585,117,59,117,0,90.809,0,58.5,26.415,0,59,0Z"
        transform="translate(5048 -256)"
        fill={color}
        opacity="0.33"
      />
      <Path
        id="circle-2"
        data-name="circle"
        d="M59,0c32.585,0,59,26.191,59,58.5S91.585,117,59,117,0,90.809,0,58.5,26.415,0,59,0Z"
        transform="translate(5016 -255)"
        fill={color}
        opacity="0.33"
      />
    </G>
  </Svg>
);
export default Circles as IconType;
