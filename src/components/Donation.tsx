import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { DonationButton } from '@/src/elements/DonationButton';
import { TertiaryButton } from '@/src/elements/TertiaryButton';

export const Donation = () => {
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <Box as="section" py={20} px={4}>
      <Container centered>
        <VStack gap={8} align="center">
          <Heading as="h2" size="2xl">
            DONATE TO JARREN HURT FOR STATE LEGISLATURE
          </Heading>
          <Text fontSize="lg">
            Every contribution helps us reach more voters and build a grassroots
            movement.
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={4}
            maxW="2xl"
            w="full"
            mb={6}
          >
            {amounts.map((amount) => (
              <DonationButton key={amount} amount={amount} />
            ))}
          </Grid>
          <TertiaryButton>OTHER AMOUNT</TertiaryButton>
        </VStack>
      </Container>
    </Box>
  );
};
