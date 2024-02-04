import { Theme } from '../model/type';

type Props = {
  theme: Theme;
};

const ThemeCodeJsonPreview: React.FunctionComponent<Props> = ({ theme }) => {
  return (
    <>
      {JSON.stringify(
        {
          light: Object.fromEntries(
            Object.entries(theme.light).map(([colorKey, hslColor]) => [
              colorKey,
              `hsl(${hslColor})`,
            ])
          ),
          dark: Object.fromEntries(
            Object.entries(theme.dark).map(([colorKey, hslColor]) => [
              colorKey,
              `hsl(${hslColor})`,
            ])
          ),
          borderRadius: `${theme.borderRadius}rem`,
        },
        undefined,
        2
      )}
    </>
  );
};

export { ThemeCodeJsonPreview };
