interface SectionHeadingProps {
  children: React.ReactNode;
  centered?: boolean;
}

export const SectionHeading = ({
  children,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <h2
      className={`text-4xl font-bold text-gray-900 dark:text-white mb-6 ${centered ? 'text-center mb-12' : ''}`}
    >
      {children}
    </h2>
  );
};
