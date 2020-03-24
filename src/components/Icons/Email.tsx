import React from 'react';
import { Svg, G as GBase, Path } from 'react-native-svg';
import { IconType } from '.';
import IconContainer from './Container';
import { Animated } from 'react-native';

const G = Animated.createAnimatedComponent(GBase);

const EmailIcon: IconType = ({ style, color }) => {
  const defaultColor = '#aca8a8';
  return (
    <IconContainer style={style}>
      <Svg width="100%" height="100%" viewBox="0 0 13.163 10.161">
        <G transform="translate(.15 -59.583)">
          <G data-name="Grupo 1326" transform="translate(0 59.733)">
            <G
              fill={color || defaultColor}
              stroke={color || defaultColor}
              strokeWidth="0.3"
              data-name="Grupo 1325"
            >
              <Path
                d="M12.22 0H.643A.643.643 0 000 .643v8.575a.643.643 0 00.643.643H12.22a.643.643 0 00.643-.643V.643A.643.643 0 0012.22 0zm.214 9.218a.214.214 0 01-.214.214H.643a.214.214 0 01-.214-.214V.643A.214.214 0 01.643.429H12.22a.214.214 0 01.214.214z"
                data-name="Trazado 4440"
              />
              <Path
                d="M11.81.858a.214.214 0 00-.156.049L6.708 5.062a.429.429 0 01-.552 0L1.21.907a.214.214 0 00-.276.328L5.88 5.392a.856.856 0 001.1 0l4.945-4.156a.214.214 0 00-.119-.378z"
                data-name="Trazado 4441"
              />
              <Path
                d="M4.123 5.361a.214.214 0 00-.207.067l-3 3.216a.214.214 0 10.313.292l3-3.216a.214.214 0 00-.107-.359z"
                data-name="Trazado 4442"
              />
              <Path
                d="M8.946 5.431a.214.214 0 10-.313.292l3 3.216a.214.214 0 00.313-.292z"
                data-name="Trazado 4443"
              />
            </G>
          </G>
        </G>
      </Svg>
    </IconContainer>
  );
};

export default EmailIcon;
