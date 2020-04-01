import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Svg, G, Rect, Path } from 'react-native-svg';
import {
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { ThemeType } from '../styled-components/theme';
import { ThemeContext } from 'styled-components';
const AnimatedRect = Animated.createAnimatedComponent(Rect);
type Props = {
  initialCheck?: boolean;
  style?: StyleProp<ViewStyle>;
  isChecked: boolean;
  setIsChecked: (newValue: boolean) => void;
};
const CheckedBox: React.FC<Props> = ({
  style,
  isChecked = false,
  setIsChecked,
}) => {
  const ANIMATION_TIME = 255;
  const [animatedValue] = useState(new Animated.Value(0));
  const theme: ThemeType = useContext(ThemeContext);

  const handleAnimation = useCallback(
    (toValue: number) =>
      Animated.timing(animatedValue, {
        toValue,
        duration: ANIMATION_TIME,
        easing: Easing.circle,
      }).start(),
    [animatedValue]
  );

  /**
   * Hook that handle the changes in the
   * isChecked value and trigger the animation
   */
  useEffect(() => {
    if (!isChecked) {
      handleAnimation(0);
    } else {
      handleAnimation(255);
    }
  }, [isChecked, animatedValue, handleAnimation]);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 255],
    outputRange: [theme.gray, theme.secondary],
  });

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <TouchableOpacity onPress={handleCheck} style={[style]}>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <G data-name="Grupo 5615" transform="translate(-285 -248)">
          <AnimatedRect
            width="24"
            height="24"
            fill={interpolatedColor}
            data-name="Rectángulo 1125"
            opacity="0.51"
            rx="7"
            transform="translate(285 248)"
          />
          <G transform="translate(291.093 255.744)">
            <Path
              fill={isChecked ? theme.background : 'transparent'}
              d="M10.152 67.108l-5.434 5.885a.355.355 0 01-.53 0l-2.34-2.534L0 72.461l3.528 3.821a1.258 1.258 0 00.924.415 1.258 1.258 0 00.924-.415L12 69.11z"
              data-name="Trazado 4581"
              transform="translate(0 -67.108)"
            />
            <G
              data-name="Grupo 1483"
              opacity="0.1"
              transform="translate(3.008 1.34)"
            >
              <Path
                fill={isChecked ? theme.background : 'transparent'}
                d="M166.073 119.888l-7.573 7.572a1.549 1.549 0 01-.758.416 1.415 1.415 0 00.818.261 1.416 1.416 0 001-.415l7.173-7.173z"
                data-name="Trazado 4582"
                transform="translate(-157.743 -119.888)"
              />
            </G>
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default CheckedBox;
