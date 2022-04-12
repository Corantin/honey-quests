import { ThemeInterface } from 'styled-components';
import { commonTheme } from './common-theme';

export const customLightTheme = {
  ...commonTheme,
  _name: 'customLight',
  _appearance: 'light',
  negativeSurface: '#ce2828',
  negative: '#ce2828',
  background: '#eeeff1',
  content: '#164a25',
  surface: '#F9FAFC',
} as ThemeInterface;
