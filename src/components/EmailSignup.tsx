import { Box, VStack, Text, Stack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { SecondaryButton } from '@/src/elements/SecondaryButton';
import { EmailInput } from '@/src/elements/EmailInput';

export const EmailSignup = () => {
  return (
    <Box as="section" py={12} px={4} bg="navy.800" color="white">
      <Container width="narrow" centered>
        <VStack gap={6} align="center">
          <Box as="h2" fontSize="3xl" fontWeight="bold" color="gold.500">
            STAY INFORMED ABOUT THE CAMPAIGN
          </Box>
          <Stack
            as="form"
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            justify="center"
            w="full"
          >
            <EmailInput placeholder="Enter your email" />
            <SecondaryButton type="submit">SIGN UP</SecondaryButton>
          </Stack>
          <Text fontSize="sm" color="gray.300">
            By signing up, you agree to receive campaign updates, event
            invitations, and news from Jarren Hurt for Indiana House District
            91. You may unsubscribe at any time.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
