import { Box, Grid, Heading, VStack, Text, Flex } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';

export const About = () => {
  return (
    <Box as="section" id="about" py={20} px={4} bg="gray.50">
      <Container width="wide">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          <VStack align="start" gap={4}>
            <Heading as="h2" size="2xl" color="navy.700">
              MEET JARREN
            </Heading>
            <VStack align="start" gap={4} fontSize="lg">
              <Text>
                Jarren Hurt is a Navy submarine veteran, husband, and father of
                three, born and raised in Indiana. An Eagle Scout and Indiana
                University graduate, Jarren has deep roots in this community and
                a lifelong commitment to service.
              </Text>
              <Text>
                After his service, Jarren built a career as a real estate agent
                and small business owner, running a utility fiber optic
                installation company. He knows what it takes to create jobs,
                meet a payroll, and serve customers — and he brings that same
                work ethic to his campaign for Indiana House District 91.
              </Text>
              <Text>
                This campaign is about putting people over politics and building
                a future where every Hoosier family has a fair shot at success.
              </Text>
            </VStack>
            <PrimaryButton mt={8}>Learn More</PrimaryButton>
          </VStack>
          <Flex
            borderRadius="lg"
            aspectRatio="1"
            align="center"
            justify="center"
          >
            <Text fontSize="lg">Candidate Photo</Text>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};
