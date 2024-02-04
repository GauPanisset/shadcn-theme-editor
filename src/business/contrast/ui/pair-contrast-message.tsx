import Color from 'color';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/technical/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/technical/ui/dropdown-menu';

import { computeScoredVisionForPair } from '../services/compute-scored-vision-for-pair';
import { enhanceContrast } from '../services/enhance-contrast';
import { getLowestScoredVision } from '../services/get-lowest-scored-vision';

type Props = {
  backgroundColor: Color;
  foregroundColor: Color;
  onEnhanceContrast: (backgroundColor: Color, foregroundColor: Color) => void;
};

const PairContrastMessage: React.FunctionComponent<Props> = ({
  backgroundColor,
  foregroundColor,
  onEnhanceContrast,
}) => {
  const lowestScoredVisions = getLowestScoredVision(
    computeScoredVisionForPair(backgroundColor, foregroundColor)
  );

  const largeFontWcagLevel = lowestScoredVisions[0].largeFontWcagLevel;
  const regularFontWcagLevel = lowestScoredVisions[0].regularFontWcagLevel;

  const percentImpacted =
    Math.round(
      Math.min(
        100,
        lowestScoredVisions.reduce((sum, scoredVision) => {
          return sum + scoredVision.percent;
        }, 0)
      ) * 10
    ) / 10;

  let content = '';
  if (regularFontWcagLevel === 'FAIL') {
    content = `Small texts might be hard to read for ${percentImpacted}% of the population.`;
  }
  if (largeFontWcagLevel === 'FAIL' && regularFontWcagLevel === 'FAIL') {
    content = `All texts might be hard to read for ${percentImpacted}% of the population.`;
  }

  if (!content) return;

  const handleEnhanceContrast = (
    colorToFix: 'background' | 'foreground' | 'both'
  ) => {
    const enhancedColors = enhanceContrast(
      backgroundColor,
      foregroundColor,
      colorToFix
    );
    onEnhanceContrast(
      enhancedColors.backgroundColor,
      enhancedColors.foregroundColor
    );
  };

  return (
    <div className="flex items-center py-1 text-xs text-muted-foreground">
      <AlertTriangle className="mx-4" />
      <p>
        {content}{' '}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="link"
              className="h-fit p-0 text-xs font-bold text-primary"
            >
              Click to enhance
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit">
            <DropdownMenuItem
              disabled={
                backgroundColor.luminosity() === 0 ||
                backgroundColor.luminosity() === 1
              }
              onClick={() => handleEnhanceContrast('background')}
            >
              Adjust background color
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={
                foregroundColor.luminosity() === 0 ||
                foregroundColor.luminosity() === 1
              }
              onClick={() => handleEnhanceContrast('foreground')}
            >
              Adjust foreground color
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={
                backgroundColor.luminosity() === 0 ||
                backgroundColor.luminosity() === 1 ||
                foregroundColor.luminosity() === 0 ||
                foregroundColor.luminosity() === 1
              }
              onClick={() => handleEnhanceContrast('both')}
            >
              Adjust both colors
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </p>
    </div>
  );
};

export { PairContrastMessage };
