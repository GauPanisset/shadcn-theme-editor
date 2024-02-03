import { CardsActivityGoal } from '@/business/demo/ui/cards-activity-goal';
import { CardsTeamMembers } from '@/business/demo/ui/cards-team-members';

import { SectionWrapper } from './section-wrapper';

const Cards = () => {
  return (
    <SectionWrapper title="Cards">
      <div className="grid grid-cols-5 grid-rows-1 items-center justify-items-center gap-4 pt-2 text-center">
        <p className="font-mono">default</p>
        <div className="col-span-2 h-full text-start">
          <CardsTeamMembers />
        </div>
        <div className="col-span-2 text-start">
          <CardsActivityGoal />
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Cards };
