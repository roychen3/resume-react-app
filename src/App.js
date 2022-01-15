import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { IntlProvider, FormattedMessage } from 'react-intl'

import appLanguages from './language'
import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'
import Header from './layout/Header'
import Content from './layout/content'

const StyledSwitchLanguagesContainer = styled.div`
position: fixed;
right: 1rem;
bottom: 1rem;
z-index: ${({ theme }) => theme.zIndex.top}; 
`
const StyledSwitchLanguagesButton = styled.button`
color: ${({ theme }) => theme.highlight}; 
border-radius: 6px;
border: 0px;
background-color: ${({ theme }) => theme.darkShadow};
padding: 0.5rem;
font-size: 12px;
width: 100%;
text-align: left;

:hover {
  cursor: pointer;
}
`
const StyledLanguagesList = styled.ul`
list-style:none;
color: ${({ theme }) => theme.highlight}; 
border-radius: 6px;
background-color: ${({ theme }) => theme.darkShadow};
padding: 0.5rem 0;
font-size: 12px;
display: ${({ $isOpenList }) => $isOpenList ? 'initial' : 'none'};
position: absolute;
bottom: 100%;
left: 0;
transform: translateY(-0.5rem);
width: 100%;
`
const StyledLanguagesItemButton = styled.button`
padding: 0.5rem;
border: 0px;
background-color: inherit;
color: inherit;
font-size: inherit;
width: 100%;
text-align: left;

:hover {
  cursor: pointer;
  color: ${({ theme }) => theme.mainText}; 
  background-color: ${({ theme }) => theme.highlight};
}
`
const SwitchLanguagesButton = ({ currentLocale, setCurrentLocale }) => {
  const [isOpenList, setisOpenList] = useState(false)

  const handleLanguagesClick = (locale) => {
    setCurrentLocale(locale)
    setisOpenList(false)
  }

  return (
    <StyledSwitchLanguagesContainer>
      <StyledSwitchLanguagesButton onClick={() => setisOpenList(value => !value)}>
        <FormattedMessage id="languages" />
        {currentLocale}
      </StyledSwitchLanguagesButton>

      <StyledLanguagesList $isOpenList={isOpenList}>
        {Object.keys(appLanguages).map((key) => (
          <li key={key}>
            <StyledLanguagesItemButton onClick={() => handleLanguagesClick(key)}>
              {key}
            </StyledLanguagesItemButton>
          </li>
        ))}
      </StyledLanguagesList>

    </StyledSwitchLanguagesContainer>
  )
}
SwitchLanguagesButton.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  setCurrentLocale: PropTypes.func.isRequired,
}

function App() {
  const [currentLocale, setCurrentLocale] = useState('en-US')

  return (
    <IntlProvider locale={currentLocale} messages={appLanguages[currentLocale]}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <SwitchLanguagesButton
            currentLocale={currentLocale}
            setCurrentLocale={setCurrentLocale}
          />
          <Header />
          <Content />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
