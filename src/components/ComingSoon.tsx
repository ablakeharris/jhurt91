import { Box, Heading, Text } from '@chakra-ui/react';

export const ComingSoon = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
      bg="white"
    >
      <Heading as="h1" size="4xl" mb={4} letterSpacing="tight">
        JARREN HURT
      </Heading>
      <Heading as="h2" size="xl" fontWeight="normal" mb={6} color="gray.600">
        Fighting for Indiana&apos;s House District 91
      </Heading>
      <Text fontSize="lg" color="gray.500" maxW="md">
        Our site is coming soon. Check back shortly.
      </Text>
    </Box>
  );
};
