import React from 'react';
import { Svg, G, Path } from 'react-native-svg';
import { MenuIconType } from './types';
import { TouchableOpacity } from 'react-native';
export const MenuIcon: MenuIconType = props => (
  <TouchableOpacity>
    <Svg
      id="menu"
      width="16.927"
      height="16"
      viewBox="0 0 16.927 16"
      style={props.style}
    >
      <G id="_x33__6_" transform="translate(0 0)">
        <G id="Grupo_1328" data-name="Grupo 1328">
          <Path
            id="Trazado_4448"
            data-name="Trazado 4448"
            d="M16.081,44.141H.846a.846.846,0,0,0,0,1.693H16.081a.846.846,0,0,0,0-1.693ZM.846,32.292H16.081a.846.846,0,1,0,0-1.693H.846a.846.846,0,1,0,0,1.693ZM16.081,37.37H.846a.846.846,0,0,0,0,1.693H16.081a.846.846,0,0,0,0-1.693Z"
            transform="translate(0 -30.599)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  </TouchableOpacity>
);
