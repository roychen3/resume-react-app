import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'
import Header from './layout/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
