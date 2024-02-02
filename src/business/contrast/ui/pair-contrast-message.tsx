import Color from 'color';
import { AlertTriangle } from 'lucide-react';

import { computeScoredVisionForPair } from '../services/compute-scored-vision-for-pair';
import { getLowestScoredVision } from '../services/get-lowest-scored-vision';

type Props = {
  backgroundColor: Color;
  foregroundColor: Color;
};

const PairContrastMessage: React.FunctionComponent<Props> = ({
  backgroundColor,
  foregroundColor,
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

  return (
    <div className="flex items-center py-1 text-xs">
      <AlertTriangle className="mx-4" />
      <p>{content}</p>
    </div>
  );
};

export { PairContrastMessage };
