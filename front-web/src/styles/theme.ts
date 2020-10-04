import { theme, DefaultTheme } from '@chakra-ui/core';

import BackgrounImage from '../assets/imagemFundo.svg';

const customIcons = {
  fundo: {
    path: `url(${BackgrounImage})`,
    viewBox: '0 0 282 316',
  },
};

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Inter, sans-serif',
    heading: "'Roboto Condensed', sans-serif",
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    yellow: {
      ...theme.colors.yellow,
      100: '#FFF1D6',
      400: '#FFC042',
    },
    gray: {
      ...theme.colors.gray,
      300: '#f7f5fa',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
    blue: {
      ...theme.colors.blue,
      300: '#DAD2FF',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
      900: '#4C33CC',
    },
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default customTheme;
