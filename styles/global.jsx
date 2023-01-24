import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #191919;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: #3498db;
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: #fff;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  small {
    font-size: 0.8rem;
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: #ecf0f1;
  }
`;
