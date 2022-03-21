// Vendors
import { createTheme } from '@mui/material/styles';

// Styles
import buttonStyled from './button';

const defaultTheme = createTheme();

// A custom theme for this app
export const modifyTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#F04B32',
    },
    secondary: {
      main: '#DADCE5',
    },
    error: {
      main: '#F04B32',
    },
    background: {
      default: '#ffffff',
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
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
};

const theme = createTheme({
  ...modifyTheme,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: buttonStyled(modifyTheme),
    },
  },
});

export default theme;
