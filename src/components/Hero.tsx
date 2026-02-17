import { Box, Heading, Stack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Hero = () => {
  return (
    <Box as="section" pt={32} pb={20} px={4}>
      <Container centered>
        <Heading as="h1" size="4xl">
          Jarren Hurt:
          <br />
          <Box as="span">Fighting for Our Future.</Box>
          <br />
          <Box as="span">Building Our Community.</Box>
        </Heading>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          gap={4}
          justify="center"
          mt={12}
        >
          <SecondaryButton size="lg">DONATE</SecondaryButton>
          <PrimaryButton size="lg">VOLUNTEER</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
