import { Heading, HeadingProps } from '@chakra-ui/react';

interface SectionHeadingProps extends HeadingProps {
  children: React.ReactNode;
  centered?: boolean;
}

export const SectionHeading = ({
  children,
  centered = false,
  ...props
}: SectionHeadingProps) => {
  return (
    <Heading
      as="h2"
      size="2xl"
      mb={centered ? 12 : 6}
      textAlign={centered ? 'center' : 'initial'}
      {...props}
    >
      {children}
    </Heading>
  );
};
