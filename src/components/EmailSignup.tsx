import { Box, VStack, Text, Stack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { SecondaryButton } from '@/src/elements/SecondaryButton';
import { EmailInput } from '@/src/elements/EmailInput';

export const EmailSignup = () => {
  return (
    <Box as="section" py={16} px={4}>
      <Container width="narrow" centered>
        <VStack gap={6} align="center">
          <Box as="h2" fontSize="3xl" fontWeight="bold">
            STAY UP TO DATE ON THE CAMPAIGN
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
          <Text fontSize="sm">
            By signing up, you agree to receive campaign updates and event
            invitations.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
