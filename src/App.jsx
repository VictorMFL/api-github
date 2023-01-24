import React from 'react';

import { Normalize } from 'styled-normalize';

import Rotas from './routes';


import Theme from "/styles/theme";
import GlobalStyle from '/styles/global';

function App() {
  return (
    <Theme Theme={Theme}>
      <Rotas />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
