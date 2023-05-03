import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  
  *, 
  *::after, 
  *::before {
    margin: 0;
	  padding: 0;
    box-sizing: inherit
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
    font-family: "Inter", sans-serif;
	  /* font-weight: 400;
	  line-height: 1.2; */
    box-sizing: border-box;
  }
`;
