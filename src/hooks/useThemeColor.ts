import { ThemeType } from '../styled-components/theme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useEffect, useState } from 'react';

export type StylesType = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSecondaryLigth?: boolean;
  isSecondaryDark?: boolean;
  isDanger?: boolean;
};
/**
 * Hook that return the color based on style props
 */
export function useThemeColor({
  isDanger,
  isPrimary,
  isSecondary,
  isSecondaryDark,
  isSecondaryLigth,
}: StylesType) {
  const theme: ThemeType = useContext(ThemeContext);
  const [color, setColor] = useState<string | null>('');

  useEffect(() => {
    const themeColor = isDanger
      ? theme.error
      : isPrimary
      ? theme.primary
      : isSecondary
      ? theme.secondary
      : isSecondaryDark
      ? theme.secondaryDark
      : isSecondaryLigth
      ? theme.secondaryLigth
      : null;
    setColor(themeColor);
  }, [
    isDanger,
    isPrimary,
    isSecondary,
    isSecondaryDark,
    isSecondaryLigth,
    theme,
  ]);

  return color;
}
