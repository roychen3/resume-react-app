import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'
import Header from './layout/Header'
import Content from './layout/content'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
