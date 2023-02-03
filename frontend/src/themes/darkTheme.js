import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#949ed4',
          light: '#e8eaf6',
          dark: '#040939',
          contrastText: '#541100',
        },
        secondary: {
          main: '#e1f5fe',
          light: '#ffffff',
          dark: '#2b0703',
          contrastText: '#e0f7fa',
        },
        error: {
          main: '#d50000',
        },
        info: {
          main: '#b2ff59',
        },
        success: {
          main: '#4caf87',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#b2ebf2',
          secondary: '#80deea',
          disabled: '#26c6da',
          hint: '#b0bec5',
        },
        warning: {
          main: '#ff6d00',
        },
        divider: 'rgba(62,39,35,0.26)',
      },
});