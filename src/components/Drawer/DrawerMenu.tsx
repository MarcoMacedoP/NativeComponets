import React from 'react';
import { Svg, G, Path } from 'react-native-svg';
import { DrawerMenuIconType } from './types';

export const MenuIcon: DrawerMenuIconType = props => (
  <Svg
    id="menu"
    width="24"
    height="20"
    viewBox="0 0 16 16"
    style={props.style}
    onPress={props.onPress}
  >
    <G id="_x33__6_" transform="translate(0 0)" onPress={props.onPress}>
      <G id="Grupo_1328" data-name="Grupo 1328">
        <Path
          id="Trazado_4448"
          data-name="Trazado 4448"
          d="M16.081,44.141H.846a.846.846,0,0,0,0,1.693H16.081a.846.846,0,0,0,0-1.693ZM.846,32.292H16.081a.846.846,0,1,0,0-1.693H.846a.846.846,0,1,0,0,1.693ZM16.081,37.37H.846a.846.846,0,0,0,0,1.693H16.081a.846.846,0,0,0,0-1.693Z"
          transform="translate(0 -30.599)"
          fill="#fff"
          onPress={props.onPress}
        />
      </G>
    </G>
  </Svg>
);
