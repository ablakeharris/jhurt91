import { Box, BoxProps } from '@chakra-ui/react';

interface ContainerProps extends BoxProps {
  children: React.ReactNode;
  width?: 'narrow' | 'normal' | 'wide';
  centered?: boolean;
}

export const Container = ({
  children,
  width = 'normal',
  centered = false,
  ...props
}: ContainerProps) => {
  const maxWidthMap = {
    narrow: '42rem',
    normal: '56rem',
    wide: '72rem',
  };

  return (
    <Box
      maxW={maxWidthMap[width]}
      mx="auto"
      textAlign={centered ? 'center' : 'initial'}
      {...props}
    >
      {children}
    </Box>
  );
};
