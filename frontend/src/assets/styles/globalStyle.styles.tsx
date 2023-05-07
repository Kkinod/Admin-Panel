import { createGlobalStyle } from 'styled-components';
import { MyTheme } from './theme';

interface IGlobalStyleProps {
  theme: MyTheme;
}

export const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  .inactive {
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
    width: 100%;
    color: ${({ theme }) => theme.palette.secondary.main};
    background: linear-gradient(90deg, ${(props) =>
      props.theme.palette.green.main} -150%, transparent 100%);
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
