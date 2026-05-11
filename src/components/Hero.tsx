import { Box, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';

export const Hero = () => {
  return (
    <Box as="section" pt={16} pb={20} px={4} bg="navy.700" color="white">
      <Container width="wide">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          <VStack align="start" gap={6}>
            <Heading as="h1" size="4xl" color="white">
              JARREN HURT
              <br />
              <Box as="span" color="gold.500">
                Fighting for Indiana&apos;s
              </Box>
              <br />
              <Box as="span" color="gold.500">
                House District 91.
              </Box>
            </Heading>
            <Text fontSize="xl" color="gray.200">
              Navy veteran. Hoosier. Fighting for working families in District
              91.
            </Text>
          </VStack>
          <Flex
            borderRadius="lg"
            aspectRatio="1"
            align="center"
            justify="center"
            overflow="hidden"
          >
            <Image
              src="/images/pic3.jpg"
              alt="Jarren Hurt"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};
