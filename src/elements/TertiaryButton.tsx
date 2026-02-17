import { Button, ButtonProps } from '@chakra-ui/react';

interface TertiaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const TertiaryButton = ({ children, ...props }: TertiaryButtonProps) => {
  return (
    <Button borderRadius="full" fontWeight="semibold" px={8} py={3} {...props}>
      {children}
    </Button>
  );
};
