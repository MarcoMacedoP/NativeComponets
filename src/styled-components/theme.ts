export type ThemeType = {
  borderRadius: number;
  primary: string;
  secondary: string;
  secondaryLigth: string;
  secondaryDark: string;
  background: string;
  surface: string;
  error: string;
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
};
export default defaultTheme as ThemeType;
