import { Box, Heading, Text, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Container } from '@/src/elements/Container';
import { InverseButton } from '@/src/elements/InverseButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const GetInvolved = () => {
  return (
    <Box as="section" id="volunteer" py={20} px={4} bg="navy.700" color="white">
      <Container centered>
        <VStack gap={8} align="center">
          <Heading as="h2" size="2xl" color="white">
            GET INVOLVED
          </Heading>
          <Text fontSize="xl" color="gray.200">
            This campaign is powered by Hoosiers who believe District 91
            deserves a real voice in Indianapolis. Join us — knock doors, make
            calls, or chip in to help us win.
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            justify="center"
          >
            <Link href="/volunteer" style={{ textDecoration: 'none' }}>
              <InverseButton as="span">VOLUNTEER</InverseButton>
            </Link>
            <SecondaryButton size="lg">DONATE</SecondaryButton>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};
