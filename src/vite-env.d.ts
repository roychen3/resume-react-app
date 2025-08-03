/// <reference types="vite/client" />

import { themeTypes } from './webTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends themeTypes {}
}
