import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';

const ACTBLUE_URL =
  'https://secure.actblue.com/my-express/engagement-hub/216656?origin=share';

export const Donation = () => {
  return (
    <Box as="section" py={12} px={4} bg="gold.500">
      <Container centered>
        <VStack gap={8} align="center">
          <Heading as="h2" size="2xl" color="navy.700">
            DONATE TO JARREN HURT FOR INDIANA HOUSE DISTRICT 91
          </Heading>
          <Text fontSize="lg" color="navy.800">
            Grassroots donations from Hoosiers like you power this campaign.
            Every dollar helps us knock more doors, reach more voters, and win
            District 91 for working families.
          </Text>
          <a href={ACTBLUE_URL} target="_blank" rel="noopener noreferrer">
            <PrimaryButton>DONATE NOW</PrimaryButton>
          </a>
        </VStack>
      </Container>
    </Box>
  );
};
