import { Box, Heading, Text, Stack, VStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { InverseButton } from '@/src/elements/InverseButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const GetInvolved = () => {
  return (
    <Box as="section" id="volunteer" py={20} px={4}>
      <Container centered>
        <VStack gap={8} align="center">
          <Heading as="h2" size="2xl">
            GET INVOLVED
          </Heading>
          <Text fontSize="xl">
            This campaign is powered by Hoosiers who believe District 91
            deserves a real voice in Indianapolis. Join us — knock doors, make
            calls, or chip in to help us win.
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            justify="center"
          >
            <InverseButton>VOLUNTEER</InverseButton>
            <SecondaryButton size="lg">DONATE</SecondaryButton>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};
