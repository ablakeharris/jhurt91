import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Hero = () => {
  return (
    <Box as="section" pt={16} pb={20} px={4} bg="navy.700" color="white">
      <Container centered>
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
        <Text mt={6} fontSize="xl" color="gray.200">
          Navy veteran. Hoosier. Fighting for working families in District 91.
        </Text>
      </Container>
    </Box>
  );
};
