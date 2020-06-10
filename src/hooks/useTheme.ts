import { ThemeType } from '../styled-components/theme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
/**
 * Hook that return the theme
 * from the global context
 */
export function useTheme() {
  const theme: ThemeType = useContext(ThemeContext);
  return theme;
}
