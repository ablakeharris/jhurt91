import { ReactNode } from 'react';

interface CardHeadingProps {
  children: ReactNode;
}

export const CardHeading = ({ children }: CardHeadingProps) => {
  return (
    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
      {children}
    </h3>
  );
};
