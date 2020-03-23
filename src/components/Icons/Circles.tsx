import React from 'react';
import { IconType } from './types';
import { Svg, G, Path } from 'react-native-svg';

const Circles: IconType = ({ style }) => (
  <Svg width="218" height="100%" style={style} viewBox="0 0 218 67">
    <G
      id="Enmascarar_grupo_19"
      data-name="Enmascarar grupo 19"
      transform="translate(-2500 176)"
      clip-path="url(#clip-path)"
    >
      <G id="circles">
        <Path
          id="circle"
          d="M59,0c32.585,0,59,26.191,59,58.5S91.585,117,59,117,0,90.809,0,58.5,26.415,0,59,0Z"
          transform="translate(2641 -202)"
          fill="#fff"
          opacity="0.33"
        />
        <Path
          id="circle-2"
          data-name="circle"
          d="M59,0c32.585,0,59,26.191,59,58.5S91.585,117,59,117,0,90.809,0,58.5,26.415,0,59,0Z"
          transform="translate(2609 -201)"
          fill="#fff"
          opacity="0.33"
        />
      </G>
    </G>
  </Svg>
);
export default Circles as IconType;
