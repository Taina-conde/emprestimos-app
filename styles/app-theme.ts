import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
    primary: {
      main: "#228A95",
      dark: "#187680",
    },
    secondary: {
      main: "#EF9C4B",
      dark: "#FD8030",
    },
    text: {
      main: "#777777",
      secondary: "#FFFFFF",
      error: '#DF0101',
    },
    background: {
      primary: "#F8F8F8",
      secondary: "#E8FFE3",
    }
  },
  input: {
    borderRadius: "5px",
    backgroundColor: {
      primary: "#F8F8F8",
      secondary: 'rgba(239, 223, 75, .23)',
    },
    opacity: 0.4,
  },
};

export { appTheme };
