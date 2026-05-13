import { Box, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
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
              Navy veteran. Hoosier. Fighting for working families in
              District&nbsp;91.
            </Text>
          </VStack>
          <Flex
            position="relative"
            borderRadius="lg"
            aspectRatio="1"
            align="center"
            justify="center"
            overflow="hidden"
          >
            <Image
              src="/images/jarren-signing-document.jpg"
              alt="Jarren Hurt signing a document"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};
