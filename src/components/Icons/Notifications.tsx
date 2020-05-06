import React from 'react';
import { Svg, G, Path, Circle, Text, TSpan } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { IconProps } from '.';

type NotificationsIconType = React.FC<
  IconProps & {
    numberOfNotifications: number;
    onPress: () => void;
  }
>;
const Notifications: NotificationsIconType = ({
  style,
  numberOfNotifications = 1,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="26" height="26" viewBox="0 0 40.25 39.162" style={style}>
        <G id="notifications" transform="translate(-4124.75 -773.69)">
          <G id="icon" transform="translate(4124.75 773.69)">
            <G id="bell">
              <G
                id="Grupo_1330"
                data-name="Grupo 1330"
                transform="translate(0)"
              >
                <G id="Grupo_1329" data-name="Grupo 1329">
                  <Path
                    id="Trazado_4449"
                    data-name="Trazado 4449"
                    d="M175.208,404.514c0,.01,0,.02,0,.031a4.643,4.643,0,0,0,9.286,0c0-.01,0-.02,0-.031Z"
                    transform="translate(-164.659 -370.026)"
                    fill="#fff"
                  />
                  <Path
                    id="Trazado_4450"
                    data-name="Trazado 4450"
                    d="M81.509,28.684,77.33,22.545V14.886A10.649,10.649,0,0,0,68.772,4.446V2.088a2.088,2.088,0,0,0-4.175,0V4.446a10.649,10.649,0,0,0-8.558,10.441v7.659l-4.179,6.139a2.111,2.111,0,0,0,1.745,3.3H79.764a2.111,2.111,0,0,0,1.745-3.3Z"
                    transform="translate(-51.493)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
            {numberOfNotifications > 0 && (
              <Circle
                id="Elipse_182"
                data-name="Elipse 182"
                cx="12"
                cy="12"
                r="12"
                transform="translate(16.25 0.31)"
                fill="#ff5b5b"
              />
            )}
          </G>
          {numberOfNotifications > 0 && (
            <Text
              id="_1"
              data-name="1"
              transform="translate(4150 790)"
              fill="#fff"
              font-size="16"
              font-family="Helvetica"
            >
              <TSpan x="0" y="0">
                {numberOfNotifications}
              </TSpan>
            </Text>
          )}
        </G>
      </Svg>
    </TouchableOpacity>
  );
};
export default Notifications;
