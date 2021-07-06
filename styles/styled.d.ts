import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
          main: string;
          dark: string;
    }
      secondary: {
          main: string;
          dark: string;
      }
      text: {
          main: string;
          secondary: string;
      }
    
    };
  }
}