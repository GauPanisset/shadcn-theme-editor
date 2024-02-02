declare module 'color-blind' {
  type RGB = {
    R: number;
    G: number;
    B: number;
  };

  /**
   * Part of the "Anomalous Trichromat" family of color blindness.
   * The viewer sees low amounts of red.
   */
  function protanomaly(color: string): string;
  function protanomaly(color: string, returnRGB: true): RGB;
  function protanomaly(color: string, returnRGB: false): string;
  /**
   * Part of the "Dichromat" family of color blindness.
   * The viewer sees no red.
   */
  function protanopia(color: string): string;
  function protanopia(color: string, returnRGB: true): RGB;
  function protanopia(color: string, returnRGB: false): string;
  /**
   * Part of the "Anomalous Trichromat" family of color blindness.
   * The viewer sees low amounts of green.
   */
  function deuteranomaly(color: string): string;
  function deuteranomaly(color: string, returnRGB: true): RGB;
  function deuteranomaly(color: string, returnRGB: false): string;
  /**
   * Part of the "Dichromat" family of color blindness.
   * The viewer sees no green.
   */
  function deuteranopia(color: string): string;
  function deuteranopia(color: string, returnRGB: true): RGB;
  function deuteranopia(color: string, returnRGB: false): string;
  /**
   * Part of the "Anomalous Trichromat" family of color blindness.
   * The viewer sees low amounts of blue.
   */
  function tritanomaly(color: string): string;
  function tritanomaly(color: string, returnRGB: true): RGB;
  function tritanomaly(color: string, returnRGB: false): string;
  /**
   * Part of the "Dichromat" family of color blindness.
   * The viewer sees no blue.
   */
  function tritanopia(color: string): string;
  function tritanopia(color: string, returnRGB: true): RGB;
  function tritanopia(color: string, returnRGB: false): string;
  /**
   * Part of the "Monochromat" family of color blindness.
   * The viewer sees the absence of most color.
   */
  function achromatomaly(color: string): string;
  function achromatomaly(color: string, returnRGB: true): RGB;
  function achromatomaly(color: string, returnRGB: false): string;
  /**
   * Part of the "Monochromat" family of color blindness.
   * The viewer sees no color at all.
   */
  function achromatopsia(color: string): string;
  function achromatopsia(color: string, returnRGB: true): RGB;
  function achromatopsia(color: string, returnRGB: false): string;
}
