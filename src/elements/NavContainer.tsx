import { Box, BoxProps } from '@chakra-ui/react';

interface NavContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const NavContainer = ({ children, ...props }: NavContainerProps) => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} {...props}>
      {children}
    </Box>
  );
};
