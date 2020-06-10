import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconType } from './index';

const Key: IconType = ({ color = '#fff', style }) => {
  return (
    <Svg width="77" height="77" viewBox="0 0 77 77" style={style}>
      <Path
        fill={color}
        d="M38.5 77A38.51 38.51 0 0123.514 3.025 38.5 38.5 0 0169.773 60.96L49.595 40.782a18.529 18.529 0 10-9.819 9.818l8.024 8.03a1.684 1.684 0 001.191.491h.057l4.371-.154-.142 4.383a1.671 1.671 0 001.659 1.731H55l4.388-.149-.158 4.378a1.7 1.7 0 00.487 1.242l.051.049A38.329 38.329 0 0138.5 77zm27.32-11.372L46.208 46.01a17.888 17.888 0 001.582-1.97l19.747 19.742a39.603 39.603 0 01-1.716 1.845zM26.565 32.842a5.27 5.27 0 113.727-1.542 5.228 5.228 0 01-3.727 1.542z"
        data-name="Sustracción 1"
      />
    </Svg>
  );
};

export default Key as IconType;
