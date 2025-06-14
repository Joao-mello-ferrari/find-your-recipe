// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
