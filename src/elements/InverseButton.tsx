import { Button, ButtonProps } from '@chakra-ui/react';

interface InverseButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const InverseButton = ({ children, ...props }: InverseButtonProps) => {
  return (
    <Button
      borderRadius="full"
      fontWeight="semibold"
      fontSize="lg"
      px={8}
      py={4}
      variant="outline"
      borderColor="white"
      color="white"
      _hover={{ bg: 'white', color: 'navy.700' }}
      {...props}
    >
      {children}
    </Button>
  );
};
