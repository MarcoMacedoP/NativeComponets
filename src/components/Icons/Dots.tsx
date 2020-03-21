import React from 'react';
import Svg, { Defs, Rect, ClipPath, Circle, G } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';
type Props = {
  style?: StyleProp<ViewStyle>;
};
export default function DotsIcon(props: Props) {
  return (
    <Svg width="4" height="15" viewBox="0 0 4 15" style={props.style}>
      <Defs>
        <ClipPath id="clip-path">
          <Rect width="4" height="15" fill="none" />
        </ClipPath>
      </Defs>
      <G
        id="Repetir_cuadrícula_3"
        data-name="Repetir cuadrícula 3"
        clip-path="url(#clip-path)"
      >
        <G transform="translate(-331 -193)">
          <Circle
            id="Elipse_184"
            data-name="Elipse 184"
            cx="2"
            cy="2"
            r="2"
            transform="translate(331 193)"
            fill="#aca8a8"
          />
        </G>
        <G transform="translate(-331 -188)">
          <Circle
            id="Elipse_184-2"
            data-name="Elipse 184"
            cx="2"
            cy="2"
            r="2"
            transform="translate(331 193)"
            fill="#aca8a8"
          />
        </G>
        <G transform="translate(-331 -183)">
          <Circle
            id="Elipse_184-3"
            data-name="Elipse 184"
            cx="2"
            cy="2"
            r="2"
            transform="translate(331 193)"
            fill="#aca8a8"
          />
        </G>
      </G>
    </Svg>
  );
}
