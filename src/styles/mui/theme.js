// Vendors
import { createTheme } from '@mui/material/styles';

// Styles
import buttonStyled from './button';

const defaultTheme = createTheme();

// A custom theme for this app
export const modifyTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#48B9C7',
    },
    error: {
      main: '#F04B32',
    },
    background: {
      default: '#fff',
    },
    social: {
      wa: '#25D366',
      ig: '#DD2A7B',
      fb: '#1877F2',
      tw: '#1DA1F2',
      yt: '#FF0000',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

const theme = createTheme({
  ...modifyTheme,
  overrides: {
    MuiButton: buttonStyled(modifyTheme),
  },
});

export default theme;
