const computeWcagLevel = (
  contrast: number,
  fontSize: number,
  bold: boolean = false
) => {
  let wcagLevel: 'AAA' | 'AA' | 'FAIL' = 'FAIL';

  if (fontSize >= 24 || (fontSize >= 18.66 && bold)) {
    if (contrast >= 4.5) {
      wcagLevel = 'AAA';
    } else if (contrast >= 3) {
      wcagLevel = 'AA';
    } else {
      wcagLevel = 'FAIL';
    }
  } else {
    if (contrast >= 7) {
      wcagLevel = 'AAA';
    } else if (contrast >= 4.5) {
      wcagLevel = 'AA';
    } else {
      wcagLevel = 'FAIL';
    }
  }
  return wcagLevel;
};

export { computeWcagLevel };
