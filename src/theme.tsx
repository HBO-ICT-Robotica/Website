import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    type: "light",

    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[700],
    },
  },
});

export default Theme;