import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Calendar } from '@/technical/ui/calendar';

import { SectionWrapper } from './section-wrapper';

const Calendars = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <SectionWrapper title="Calendars">
      <div className="grid grid-cols-5 grid-rows-2 items-center justify-items-center gap-4 pt-2 text-center">
        <p className="font-mono">single</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="col-span-2 justify-self-start rounded-md border text-start"
        />
        <p className="col-span-2"></p>
        <p className="font-mono">range</p>
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="col-span-3 justify-self-start rounded-md border text-start"
        />
      </div>
    </SectionWrapper>
  );
};

export { Calendars };
