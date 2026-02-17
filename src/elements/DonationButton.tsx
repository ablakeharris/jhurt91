import { Button, ButtonProps } from '@chakra-ui/react';

interface DonationButtonProps extends ButtonProps {
  amount: number;
}

export const DonationButton = ({ amount, ...props }: DonationButtonProps) => {
  return (
    <Button
      bg="blue.600"
      color="white"
      _hover={{ bg: 'blue.700' }}
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
