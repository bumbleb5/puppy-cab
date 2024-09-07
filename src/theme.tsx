import { createTheme, ThemeOptions } from '@mui/material/styles';

export const darkOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3F6587',
      light: '#91bad5',
      dark: '#344857',
    },
    secondary: {
      main: '#ecb04b',
      dark: '#e26c33',
    },
  },
};

export const lightOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3F6587',
      light: '#91bad5',
      dark: '#344857',
    },
    secondary: {
      main: '#ecb04b',
      dark: '#e26c33',
    },
  },
};

export const darkTheme = createTheme(darkOptions);

export const lightTheme = createTheme(lightOptions);
