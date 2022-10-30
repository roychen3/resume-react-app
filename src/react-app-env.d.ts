/// <reference types="react-scripts" />

import { themeTypes } from './webTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends themeTypes {}
}
