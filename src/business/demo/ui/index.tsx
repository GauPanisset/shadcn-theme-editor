import { CardsActivityGoal } from './cards-activity-goal';
import { CardsCalendar } from './cards-calendar';
import { CardsChat } from './cards-chat';
import { CardsCookieSettings } from './cards-cookie-settings';
import { CardsCreateAccount } from './cards-create-account';
import { CardsDataTable } from './cards-data-table';
import { CardsMetric } from './cards-metric';
import { CardsPaymentMethod } from './cards-payment-method';
import { CardsReportIssue } from './cards-report-issue';
import { CardsShare } from './cards-share';
import { CardsStats } from './cards-stats';
import { CardsTeamMembers } from './cards-team-members';

const CardsDemo = () => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <CardsCalendar />
        <CardsActivityGoal />
      </div>
      <CardsChat />
      <CardsCookieSettings />
      <CardsCreateAccount />
      <CardsDataTable />
      <CardsMetric />
      <CardsPaymentMethod />
      <CardsReportIssue />
      <CardsShare />
      <CardsStats />
      <CardsTeamMembers />
    </div>
  );
};

export { CardsDemo };
