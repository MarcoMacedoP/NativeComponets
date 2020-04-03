import { ThemeType } from '../styled-components/theme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function useTheme() {
  const theme: ThemeType = useContext(ThemeContext);
  return theme;
}
