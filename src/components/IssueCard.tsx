import { CardHeading } from '@/src/elements/CardHeading';

interface IssueCardProps {
  title: string;
  description: string;
}

export const IssueCard = ({ title, description }: IssueCardProps) => {
  return (
    <div className="border-l-4 border-blue-700 pl-6">
      <CardHeading>{title}</CardHeading>
      <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};
