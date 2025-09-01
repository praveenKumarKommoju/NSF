export const themes = {
  light: {
    headerText:'red',
    background:'white',
    primary:'#dc2626',// '#1C0D0D',

    primaryText:'#1C0D0D',//'#000000',
    secondaryText:'#994D52',

    //button
    primaryButtonHover:'#cc0000',

    //Background
    statsCard:'#F2E8E8' //stats card
  },
  dark: {
    headerText:'red',
    background:'black',
    primary:'#dc2626',
    primaryText:'#ffffff'
  },
};

function setCssVariable(property, color) {
  document.documentElement.style.setProperty(property, color);
}

export const toggleTheme = () => {
  const themeColorData = themes.light;
  Object.keys(themeColorData).forEach((element) => {
    setCssVariable(`--nsf-${element}`, themeColorData[element]);
  });
  return null;
};
