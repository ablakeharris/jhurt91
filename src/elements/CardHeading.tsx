import { Heading, HeadingProps } from '@chakra-ui/react';

interface CardHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

export const CardHeading = ({ children, ...props }: CardHeadingProps) => {
  return (
    <Heading as="h3" size="lg" mb={3} color="navy.700" {...props}>
      {children}
    </Heading>
  );
};
