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
    },
    background: "#F8F8F8",
  },
  input: {
    borderRadius: "5px",
    backgroundColor: {
      primary: "#F8F8F8",
      secondary: "#EFDF4B",
    },
    opacity: 0.23,
  },
};

export { appTheme };
