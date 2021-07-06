import { AppProps } from "next/app";
import { appTheme } from "../styles/app-theme";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme = {appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
