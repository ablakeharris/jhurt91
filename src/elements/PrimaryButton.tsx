import { Button, ButtonProps } from '@chakra-ui/react';

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const PrimaryButton = ({
  children,
  size = 'md',
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button size={size} {...props}>
      {children}
    </Button>
  );
};
