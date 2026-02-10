import { CardHeading } from '@/src/elements/CardHeading';

interface IssueCardProps {
  title: string;
  description: string;
}

export const IssueCard = ({ title, description }: IssueCardProps) => {
  return (
    <div className="border-l-4 border-primary-700 pl-6">
      <CardHeading>{title}</CardHeading>
      <p className="text-lg text-neutral-700 dark:text-neutral-300">{description}</p>
    </div>
  );
};
