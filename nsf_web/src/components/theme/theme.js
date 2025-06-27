export const themes = {
  light: {
    headerText:'red',
    background:'white',
    primary:'#dc2626',
    textPrimary:'#000000',
    primaryButtonHover:'#cc0000'
  },
  dark: {
    headerText:'red',
    background:'black',
    primary:'#dc2626',
    textPrimary:'#ffffff'
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
