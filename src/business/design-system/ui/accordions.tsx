import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/technical/ui/accordion';

import { SectionWrapper } from './section-wrapper';

const Accordions = () => {
  return (
    <SectionWrapper title="Accordions">
      <div className="grid grid-cols-5 grid-rows-1 items-center justify-items-center gap-4 pt-2 text-center">
        <p className="font-mono">default</p>
        <Accordion
          type="single"
          collapsible
          className="col-span-3 w-full text-start"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export { Accordions };
