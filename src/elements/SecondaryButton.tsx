import { Button, ButtonProps } from '@chakra-ui/react';

interface SecondaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const SecondaryButton = ({
  children,
  size = 'md',
  ...props
}: SecondaryButtonProps) => {
  return (
    <Button
      size={size}
      bg="navy.700"
      color="white"
      fontWeight="bold"
      _hover={{ bg: 'navy.800' }}
      {...props}
    >
      {children}
    </Button>
  );
};
