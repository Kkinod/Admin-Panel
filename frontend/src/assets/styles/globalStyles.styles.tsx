import { createGlobalStyle } from 'styled-components';
import { MyTheme } from './theme';

export interface IGlobalStyleProps {
  theme: MyTheme;
}

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
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  ::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.palette.secondary.main};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  .inactive {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.palette.grey.main};
    background-color: transparent;
    text-decoration: none;

    &:hover {
      background: linear-gradient(90deg, ${(props) =>
        props.theme.palette.green.main} -150%, transparent 100%);
    }
  }

  .active {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.palette.secondary.main};
    background: linear-gradient(90deg, ${(props) =>
      props.theme.palette.green.main} -150%, transparent 100%) ;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.green.main};
    }

    &:hover {
      background: transparent;
    }
  }
`;
