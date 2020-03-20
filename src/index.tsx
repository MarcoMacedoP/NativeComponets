//components
import Button from './components/Button';
import ThemeProvider from './components/ThemeProvider';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import DiscountLabel from './components/DiscountLabel';

// Modals
import ConfirmRawModal from './components/Modals/ConfirmRawModal';
import FullscreenModal from './components/Modals/FullscreenModal';

import InputRounded from './components/InputRounded';
//utils
import defaultTheme from './styled-components/theme';
export * from './components/Icons';

export {
  Button,
  defaultTheme,
  ThemeProvider,
  Login,
  InputRounded,
  Signup,
  DiscountLabel,
  ConfirmRawModal,
  FullscreenModal,
};
