import { createGlobalStyle } from "styled-components";
import { IGlobalStyleProps } from "../../types/globalStyle";

export const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.secondary[100]};
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
`;
