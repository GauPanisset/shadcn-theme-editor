const themeCodeWrapperId = 'theme-wrapper';

const makeThemeCode = () => {
  const themeCode = document.getElementById(themeCodeWrapperId)?.textContent;

  if (!themeCode) {
    throw new Error(`Can't find any code for ${themeCodeWrapperId}`);
  }

  return themeCode
    .replaceAll('\u00a0', ' ')
    .replaceAll('{', '{\n')
    .replaceAll('}', '}\n')
    .replaceAll(';', ';\n');
};

export { makeThemeCode, themeCodeWrapperId };
