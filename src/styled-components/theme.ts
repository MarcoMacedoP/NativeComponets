export type ThemeType = {
  borderRadius: number;
  primary: string;
  secondary: string;
  secondaryLigth: string;
  secondaryDark: string;
  background: string;
  surface: string;
  error: string;
  black: string;
  gray: string;
  grayLigth: string;
};

const defaultTheme: ThemeType = {
  borderRadius: 18,
  primary: '#FF896E',
  secondary: '#7E9FE2',
  secondaryLigth: '#65CEDC',
  secondaryDark: '#4267B2',
  background: '#ffffff',
  surface: '#ffffff',
  error: '#EF5350',
  black: '#000000',
  gray: '#ACA8A8',
  grayLigth: '#F0F2F9',
};
export default defaultTheme as ThemeType;
