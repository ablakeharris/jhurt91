import { Button, ButtonProps } from '@chakra-ui/react';

interface DonationButtonProps extends ButtonProps {
  amount: number;
  href: string;
}

export const DonationButton = ({
  amount,
  href,
  ...props
}: DonationButtonProps) => {
  return (
    <a href={href}>
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
    </a>
  );
};
