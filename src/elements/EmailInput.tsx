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
      flex={1}
      maxW="28rem"
      color="white"
      borderColor="gray.500"
      _placeholder={{ color: 'gray.400' }}
      {...props}
    />
  );
};
