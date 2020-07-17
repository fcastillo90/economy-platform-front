export default {
  lightTheme: {
    palette: {
      type: 'light',
      background: {
        paper: '#f7f7f7',
        default: '#fff',
      },
      primary: {
        light: '#6573c3',
        main: '#3f51b5',
        dark: '#2c387e',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#ff4569',
        main: '#ff1744',
        dark: '#b2102f',
        contrastText: '#FFFFFF',
      },
    },
  },
  darkTheme: {
    palette: {
      type: 'dark',
      primary: {
        light: '#6573c3',
        main: '#3f51b5',
        dark: '#2c387e',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#ff4569',
        main: '#ff1744',
        dark: '#b2102f',
        contrastText: '#FFFFFF',
      },
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: '#3f51b5',
        },
      },
    },
  },
}
