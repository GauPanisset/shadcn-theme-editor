import { ColorsTheme, Theme } from '../model/type';
import { setColorInCss } from './set-color-in-css';

const setThemeInCss = (theme: {
  colors: ColorsTheme;
  shape: { borderRadius: Theme['borderRadius'] };
}) => {
  if (typeof window === 'undefined') {
    return;
  }

  for (const colorKey in theme.colors) {
    setColorInCss(
      colorKey as keyof ColorsTheme,
      theme.colors[colorKey as keyof ColorsTheme]
    );
  }

  document
    ?.getElementById('demo-wrapper')
    ?.style.setProperty('--radius', `${String(theme.shape.borderRadius)}rem`);
};

export { setThemeInCss };
