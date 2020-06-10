import React from 'react';
import { colorProp, theme } from '../../styles';

export const useButtonStyles = (type?: colorProp) => {
  return React.useMemo(
    () => ({
      button: {
        backgroundColor: type ? theme[type] : 'transparent',
      },
      text: { color: type ? theme.background : theme.secondary },
    }),
    [type]
  );
};
