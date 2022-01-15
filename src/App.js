import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import appLanguages from './language'
import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'
import Header from './layout/Header'
import Content from './layout/content'

function App() {
  const [currentLocale] = useState('en-US')

  return (
    <IntlProvider locale={currentLocale} messages={appLanguages[currentLocale]}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Content />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
