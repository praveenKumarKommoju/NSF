export const themes = {
  light: {
    headerText:'red',
    background:'white',
    primary:'#dc2626',
    textPrimary:'#dc2626'
  },
  dark: {
    headerText:'red',
    background:'black',
    primary:'#dc2626',
    textPrimary:'#dc2626'
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
