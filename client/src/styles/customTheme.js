import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#52B788' : '#52B788',
      },
      secondary: {
        main: darkMode ? '#95D5B2' : '#2D6A4F',
      },
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word',
        },
      },
      MuiPaper:{
         root:{
           backgroundColor: darkMode ?  '#080808': '#fff'
         }
      }
    },
  });

export default customTheme;
