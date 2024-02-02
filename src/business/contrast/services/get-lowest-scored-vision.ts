import { ScoredVision } from '../model/types';

const getLowestScoredVision = (scoredVisions: ScoredVision[]) => {
  const pairLowestScoredVision = scoredVisions.reduce(
    (minimumScoredVision, scoredVision) => {
      if (scoredVision.contrastScore < minimumScoredVision.contrastScore)
        return scoredVision;
      return minimumScoredVision;
    },
    scoredVisions[0]
  );

  return scoredVisions.filter(
    (scoredVision) =>
      scoredVision.largeFontWcagLevel ===
        pairLowestScoredVision.largeFontWcagLevel &&
      scoredVision.regularFontWcagLevel ===
        pairLowestScoredVision.regularFontWcagLevel
  );
};

export { getLowestScoredVision };
