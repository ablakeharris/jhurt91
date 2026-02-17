import { Input, InputProps } from '@chakra-ui/react';

interface EmailInputProps extends InputProps {
  placeholder: string;
}

export const EmailInput = ({ placeholder, ...props }: EmailInputProps) => {
  return (
    <Input
      type="email"
      placeholder={placeholder}
      px={6}
      py={3}
      borderRadius="full"
      color="gray.900"
      flex={1}
      maxW="28rem"
      {...props}
    />
  );
};
