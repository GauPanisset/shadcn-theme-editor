const themeCodeWrapperId = 'theme-wrapper';

const makeThemeCode = (type: string) => {
  const themeCode = document.getElementById(themeCodeWrapperId)?.textContent;

  if (!themeCode) {
    throw new Error(`Can't find any code for ${themeCodeWrapperId}`);
  }

  if (type === 'css')
    return themeCode
      .replaceAll('\u00a0', ' ')
      .replaceAll('{', '{\n')
      .replaceAll('}', '}\n')
      .replaceAll(';', ';\n');

  if (type === 'json') {
    return themeCode.replaceAll('\u00a0', ' ');
  }
};

export { makeThemeCode, themeCodeWrapperId };
