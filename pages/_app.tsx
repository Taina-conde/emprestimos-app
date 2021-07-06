import { AppProps } from "next/app";
import { appTheme } from "../styles/app-theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initalReduxState)
  return (
    <Provider store = {store}>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
