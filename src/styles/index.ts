export type colorProp =
  | 'primary'
  | 'secondary'
  | 'secondaryDark'
  | 'grayLigth'
  | 'background'
  | 'secondaryLigth'
  | 'error';

type ThemeColors = {
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
  lightGray: string;
};
type ThemeType = ThemeColors & {
  borderRadius: number;
};
export const theme: ThemeType = {
  borderRadius: 18,
  primary: '#ef7d54',
  secondary: '#7E9FE2',
  secondaryLigth: '#65CEDC',
  secondaryDark: '#4267B2',
  background: '#ffffff',
  surface: '#ffffff',
  error: '#EF5350',
  black: '#000000',
  gray: '#ACA8A8',
  grayLigth: '#F0F2F9',
  lightGray: '#B2B2B2',
};
