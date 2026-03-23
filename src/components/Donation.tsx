import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { DonationButton } from '@/src/elements/DonationButton';
import { TertiaryButton } from '@/src/elements/TertiaryButton';

const ACTBLUE_URL =
  'https://secure.actblue.com/my-express/engagement-hub/216656?origin=share';

export const Donation = () => {
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <Box as="section" py={20} px={4}>
      <Container centered>
        <VStack gap={8} align="center">
          <Heading as="h2" size="2xl">
            DONATE TO JARREN HURT FOR INDIANA HOUSE DISTRICT 91
          </Heading>
          <Text fontSize="lg">
            Grassroots donations from Hoosiers like you power this campaign.
            Every dollar helps us knock more doors, reach more voters, and win
            District 91 for working families.
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={4}
            maxW="2xl"
            w="full"
            mb={6}
          >
            {amounts.map((amount) => (
              <DonationButton key={amount} amount={amount} href={ACTBLUE_URL} />
            ))}
          </Grid>
          <a href={ACTBLUE_URL}>
            <TertiaryButton>OTHER AMOUNT</TertiaryButton>
          </a>
        </VStack>
      </Container>
    </Box>
  );
};
