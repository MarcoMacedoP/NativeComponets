import React from 'react';
import { IconType } from './index';
import { Svg, Path } from 'react-native-svg';
const Success: IconType = ({ color = '#fff', style }) => (
  <Svg
    style={style}
    id="success"
    width="66.808"
    height="66.808"
    viewBox="0 0 66.808 66.808"
  >
    <Path
      id="Trazado_92"
      data-name="Trazado 92"
      d="M33.4,0a33.4,33.4,0,1,0,33.4,33.4A33.442,33.442,0,0,0,33.4,0Zm0,64.239A30.835,30.835,0,1,1,64.239,33.4,30.871,30.871,0,0,1,33.4,64.239Z"
      fill={color}
    />
    <Path
      id="Trazado_93"
      data-name="Trazado 93"
      d="M45.728,15.432,25.982,37.646l-11.9-9.516a1.285,1.285,0,0,0-1.6,2.007L25.33,40.414a1.286,1.286,0,0,0,1.764-.15L47.65,17.138a1.285,1.285,0,0,0-1.922-1.706Z"
      transform="translate(3.417 4.272)"
      fill={color}
    />
  </Svg>
);

export default Success as IconType;
