import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IntlProvider, FormattedMessage } from 'react-intl';

import appLanguages from './language';
import { GlobalStyles } from './globalStyles';
import { theme } from './webTheme';
import Header from './layout/Header';
import Content from './layout/content';

interface StyledSwitchLanguagesContainerProps {
  readonly theme: {
    zIndex: {
      top: number;
    };
  };
}
const StyledSwitchLanguagesContainer = styled.div<StyledSwitchLanguagesContainerProps>`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: ${({ theme }) => theme.zIndex.top};
`;

interface StyledSwitchLanguagesButtonProps {
  readonly theme: {
    highlight: string;
    darkShadow: string;
  };
}
const StyledSwitchLanguagesButton = styled.button<StyledSwitchLanguagesButtonProps>`
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
`;

interface StyledLanguagesListProps {
  readonly theme: {
    highlight: string;
    darkShadow: string;
  };
  readonly $isOpenList: boolean;
}
const StyledLanguagesList = styled.ul<StyledLanguagesListProps>`
  list-style: none;
  color: ${({ theme }) => theme.highlight};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.darkShadow};
  padding: 0.5rem 0;
  font-size: 12px;
  display: ${({ $isOpenList }) => ($isOpenList ? 'initial' : 'none')};
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translateY(-0.5rem);
  width: 100%;
`;

interface StyledLanguagesItemButtonProps {
  readonly theme: {
    mainText: string;
    highlight: string;
  };
}
const StyledLanguagesItemButton = styled.button<StyledLanguagesItemButtonProps>`
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
`;

interface SwitchLanguagesButtonProps {
  currentLocale: string;
  setCurrentLocale: React.Dispatch<React.SetStateAction<string>>;
}
const SwitchLanguagesButton: React.FC<SwitchLanguagesButtonProps> = ({
  currentLocale,
  setCurrentLocale,
}) => {
  const [isOpenList, setisOpenList] = useState(false);

  const handleLanguagesClick = (locale: string) => {
    setCurrentLocale(locale);
    setisOpenList(false);
  };

  return (
    <StyledSwitchLanguagesContainer>
      <StyledSwitchLanguagesButton
        onClick={() => setisOpenList((value) => !value)}
      >
        <FormattedMessage id="languages" />
        {currentLocale}
      </StyledSwitchLanguagesButton>

      <StyledLanguagesList $isOpenList={isOpenList}>
        {Object.keys(appLanguages).map((key) => (
          <li key={key}>
            <StyledLanguagesItemButton
              onClick={() => handleLanguagesClick(key)}
            >
              {key}
            </StyledLanguagesItemButton>
          </li>
        ))}
      </StyledLanguagesList>
    </StyledSwitchLanguagesContainer>
  );
};

function App() {
  const [currentLocale, setCurrentLocale] = useState<string>('en-US');

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
