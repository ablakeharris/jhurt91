import { Button, ButtonProps } from '@chakra-ui/react';

interface InverseButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const InverseButton = ({ children, ...props }: InverseButtonProps) => {
  return (
    <Button
      bg="white"
      color="blue.600"
      _hover={{ bg: 'gray.100' }}
      borderRadius="full"
      fontWeight="semibold"
      fontSize="lg"
      px={8}
      py={4}
      {...props}
    >
      {children}
    </Button>
  );
};
