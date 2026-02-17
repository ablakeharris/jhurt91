import { Button, ButtonProps } from '@chakra-ui/react';

interface DonationButtonProps extends ButtonProps {
  amount: number;
}

export const DonationButton = ({ amount, ...props }: DonationButtonProps) => {
  return (
    <Button
      borderRadius="lg"
      fontSize="xl"
      fontWeight="semibold"
      py={4}
      w="full"
      {...props}
    >
      ${amount}
    </Button>
  );
};
