import Color from 'color';

const increaseContrast = (color: Color, colorReference: Color) => {
  let updatedColor = Color(color.toString());

  return updatedColor.luminosity() < colorReference.luminosity()
    ? updatedColor.darken(0.1)
    : updatedColor.lighten(0.1);
};

const enhanceContrast = (
  backgroundColor: Color,
  foregroundColor: Color,
  colorToFix: 'background' | 'foreground' | 'both' = 'both'
) => {
  const contrastThreshold = 7;

  if (colorToFix === 'background') {
    let updatedBackgroundColor = Color(backgroundColor.toString());

    let circuitBreaker = 0;
    while (
      foregroundColor.contrast(updatedBackgroundColor) < contrastThreshold
    ) {
      updatedBackgroundColor = increaseContrast(
        updatedBackgroundColor,
        foregroundColor
      );

      if (circuitBreaker++ > 20) {
        break;
      }
    }

    return {
      backgroundColor: updatedBackgroundColor,
      foregroundColor,
    };
  } else if (colorToFix === 'foreground') {
    let updatedForegroundColor = Color(foregroundColor.toString());

    let circuitBreaker = 0;
    while (
      backgroundColor.contrast(updatedForegroundColor) < contrastThreshold
    ) {
      updatedForegroundColor = increaseContrast(
        updatedForegroundColor,
        backgroundColor
      );

      if (circuitBreaker++ > 20) {
        break;
      }
    }

    return {
      backgroundColor,
      foregroundColor: updatedForegroundColor,
    };
  } else {
    let updatedBackgroundColor = Color(backgroundColor.toString());
    let updatedForegroundColor = Color(foregroundColor.toString());

    let iteration = 0;
    while (
      updatedBackgroundColor.contrast(updatedForegroundColor) <
      contrastThreshold
    ) {
      if (iteration % 2 === 0) {
        updatedBackgroundColor = increaseContrast(
          updatedBackgroundColor,
          updatedForegroundColor
        );
      } else {
        updatedForegroundColor = increaseContrast(
          updatedForegroundColor,
          updatedBackgroundColor
        );
      }
      iteration++;
    }

    return {
      backgroundColor: updatedBackgroundColor,
      foregroundColor: updatedForegroundColor,
    };
  }
};

export { enhanceContrast };
