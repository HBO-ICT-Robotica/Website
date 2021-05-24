import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import React from 'react';

export const lightTheme = createMuiTheme({
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

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",

    primary: {
      main: blue[700],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default function useTheme(): [Theme, (value: "light" | "dark") => void] {
  const [theme, setTheme] = React.useState(lightTheme);

  React.useEffect(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        setTheme(darkTheme);
      } else if (localStorage.getItem('theme') === 'light') {
        setTheme(lightTheme)
      }
    }
  }, []);

  const newSetTheme = (value: "light" | "dark") => {
    if (value == "light") {
      setTheme(lightTheme);
      localStorage.setItem("theme", "light");
    } else if (value == "dark") {
      setTheme(darkTheme);
      localStorage.setItem("theme", "dark");
    }
  }

  return [theme, newSetTheme];
}