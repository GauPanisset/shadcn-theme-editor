import { Accordions } from './accordions';
import { Alerts } from './alerts';
import { Badges } from './badges';
import { Buttons } from './buttons';
import { Calendars } from './calendars';
import { Cards } from './cards';
import { Commands } from './commands';
import { ContextMenus } from './context-menus';

const DesignSystem = () => {
  return (
    <div className="space-y-8">
      <Accordions />
      <Alerts />
      <Buttons />
      <Badges />
      <Calendars />
      <Cards />
      <Commands />
      <ContextMenus />
    </div>
  );
};

export { DesignSystem };
