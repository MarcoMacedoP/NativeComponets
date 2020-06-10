import React from 'react';
import { ThemeProvider } from '../styled-components';
import defaultTheme from '../styled-components/theme';
import { ThemeType } from '../styled-components/theme';

export type ThemeProviderType = React.FC<{
  theme?: ThemeType;
}>;

const CustomThemeProvider: ThemeProviderType = ({ theme, children }) => {
  const mergedTheme = {
    ...defaultTheme,
    theme,
  };
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider as ThemeProviderType;
