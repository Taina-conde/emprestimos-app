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
          error: string;
      }
      background: {
        primary: string;
        secondary: string;
      }
    
    }
    input: {
        borderRadius: string;
        backgroundColor: {
            primary: string;
            secondary: string;

        },
        opacity: number;
    }
   
  }
}