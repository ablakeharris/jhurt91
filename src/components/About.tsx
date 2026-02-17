import { Box, Grid, Heading, VStack, Text, Flex } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';

export const About = () => {
  return (
    <Box
      as="section"
      id="about"
      py={20}
      px={4}
      bg="white"
      _dark={{ bg: 'gray.900' }}
    >
      <Container width="wide">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          <VStack align="start" gap={4}>
            <Heading
              as="h2"
              size="2xl"
              color="gray.900"
              _dark={{ color: 'white' }}
            >
              MEET JARREN
            </Heading>
            <VStack
              align="start"
              gap={4}
              fontSize="lg"
              color="gray.700"
              _dark={{ color: 'gray.300' }}
            >
              <Text>
                Jarren Hurt is a public school teacher, community organizer, and
                Democratic candidate running for State Legislature, committed to
                ensuring every family has access to quality education,
                affordable healthcare, and economic opportunity.
              </Text>
              <Text>
                Born and raised in our community, Jarren has spent the last
                decade working with students and families, witnessing firsthand
                the challenges working families face. From underfunded schools
                to rising housing costs, Jarren knows we need leaders who will
                fight for real solutions.
              </Text>
              <Text>
                This campaign is about putting people over politics and building
                a future where everyone has a fair shot at success.
              </Text>
            </VStack>
            <PrimaryButton mt={8}>Learn More</PrimaryButton>
          </VStack>
          <Flex
            bg="gray.200"
            _dark={{ bg: 'gray.700' }}
            borderRadius="lg"
            aspectRatio="1"
            align="center"
            justify="center"
          >
            <Text color="gray.500" _dark={{ color: 'gray.400' }} fontSize="lg">
              Candidate Photo
            </Text>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};
