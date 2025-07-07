import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    tab: {
      youth: {
        main: '#4CAF50',
        light: '#66BB6A',
        dark: '#43A047',
        gradient: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
      },
      employer: {
        main: '#FFA000',
        light: '#FFC107',
        dark: '#F57C00',
        gradient: 'linear-gradient(135deg, #FFA000 0%, #FFC107 100%)',
      },
    },
  },
  palette: {
    primary: {
      main: '#2E7D32', // Dark Green
      light: '#4CAF50', // Light Green
      dark: '#1B5E20', // Darker Green
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFA000', // Orange
      light: '#FFC107',
      dark: '#F57C00',
      contrastText: '#000',
    },
    info: {
      main: '#03A9F4', // Sky Blue
      light: '#03D5F4',
      dark: '#0288D1',
      contrastText: '#000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#333333',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
      marginBottom: '0.75rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#333333',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#666666',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
          padding: '0 1rem',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;
