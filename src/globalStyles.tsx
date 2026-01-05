import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  font-family: sans-serif;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body,
#root,
.app {
  height: 100%;
  margin: 0;
}

body {
  color: ${({ theme }) => theme.mainText};
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.link};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
`;
