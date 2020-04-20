import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20b8d6',
      dark: '#598894',
      light: '#d0d0d0',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#8d54e9',
      contrastText: '#ffffff'
    },
    error: {
      main: '#d23e29',
      light: '#f8d5d2'
    },
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#2f2f41',
      secondary: '#9b9f9f'
    }
  }
});

type WithThemeProps = {
  children: React.ReactNode;
};

const WithTheme = ({ children }: WithThemeProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
};

export { theme, WithTheme };
