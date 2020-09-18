import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  
  html {
    height: 100%;
    min-height: 100%;
  }
  
  body {
    margin: 0;

    height: 100%;
    min-height: 100%;
    
    background-color: black;
    
    &, *, *::after, *::before {
      position: relative;
      box-sizing: border-box;
    }
    
    & > #root {
      height: 100%;
      min-height: 100%;
    }
  }
  
`;
GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;