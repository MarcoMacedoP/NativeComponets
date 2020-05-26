//components
import Button from './components/Button';
import AnimatedButton from './components/Button/AnimatedButton';
import ThemeProvider from './components/ThemeProvider';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import DiscountLabel from './components/DiscountLabel';
import CreditCard from './components/CreditCard';
import Backup from './components/Backup';
import InputRounded from './components/InputRounded';
import CheckedBox from './components/CheckedBox';
import NumericKeyboard from './components/NumericKeyboard';
import Carousel from './components/Carousel';

import { Input } from './components/Inputs/Input';

//drawer
export * from './components/Drawer';

// Modals
import ConfirmRawModal from './components/Modals/ConfirmRawModal';
import FullscreenModal from './components/Modals/FullscreenModal';
import SwipeModal from './components/Modals/SwipeModal';
//cards
export * from './components/Cards';
//utils
import styled from './styled-components';
import defaultTheme, { ThemeType } from './styled-components/theme';
export * from './components/Icons';
import Walkthrough, { Dot } from './components/Walkthrough';
//hooks
import { useTheme } from './hooks/useTheme';
import { useThemeColor } from './hooks/useThemeColor';

export {
  Button,
  Input,
  AnimatedButton,
  defaultTheme,
  ThemeProvider,
  Login,
  CheckedBox,
  Backup,
  InputRounded,
  Signup,
  Walkthrough,
  CreditCard,
  DiscountLabel,
  ConfirmRawModal,
  FullscreenModal,
  SwipeModal,
  NumericKeyboard,
  Carousel,
  Dot,
  //hooks
  useTheme,
  useThemeColor,
  //utils
  styled,
  ThemeType,
};
