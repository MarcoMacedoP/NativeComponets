import * as styledComponents from 'styled-components/native';

import { ThemeType } from './theme';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeType
>;
export { css, ThemeProvider };
export default styled;
