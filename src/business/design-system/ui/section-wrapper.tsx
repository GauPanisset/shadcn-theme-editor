import { Separator } from '@/technical/ui/separator';

type Props = {
  title: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FunctionComponent<Props> = ({
  title,
  children,
}) => {
  return (
    <section>
      <h2 className="font-mono text-2xl font-bold">{title}</h2>
      <Separator className="my-2" />
      {children}
    </section>
  );
};

export { SectionWrapper };
