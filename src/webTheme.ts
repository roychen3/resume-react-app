export interface themeTypes {
  mainText: string;
  subDarkText: string;
  subLightText: string;
  highlight: string;
  darkBackground: string;
  subDarkBackground: string;
  subLightBackground: string;
  darkShadow: string;
  whiteShadow: string;
  zIndex: {
    top: number;
  };
}
export const theme: themeTypes = {
  mainText: 'black',
  subDarkText: '#646464',
  subLightText: '#dddddd',
  highlight: 'white',
  darkBackground: '#3b3b3b',
  subDarkBackground: '#646464',
  subLightBackground: '#dddddd',
  darkShadow: '#000000cc',
  whiteShadow: '#ffffffe6',
  zIndex: {
    top: 2000,
  },
};
