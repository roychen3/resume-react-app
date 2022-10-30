interface themeTypes {
  mainText: string;
  subDarkText: string;
  subLighDarkText: string;
  highlight: string;
  darkBackground: string;
  subDarkBackground: string;
  subLightDarkBackground: string;
  darkShadow: string;
  whiteShadow: string;
  zIndex: {
    top: number;
  };
}
export const theme: themeTypes = {
  mainText: 'black',
  subDarkText: '#646464',
  subLighDarkText: '#dddddd',
  highlight: 'white',
  darkBackground: '#3b3b3b',
  subDarkBackground: '#646464',
  subLightDarkBackground: '#dddddd',
  darkShadow: '#000000cc',
  whiteShadow: '#ffffffcc',
  zIndex: {
    top: 2000,
  },
};
