import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Hero = () => {
  return (
    <Box as="section" pt={32} pb={20} px={4} bg="navy.700" color="white">
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
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          gap={4}
          justify="center"
          mt={12}
        >
          <a
            href="https://secure.actblue.com/my-express/engagement-hub/216656?origin=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SecondaryButton
              as="span"
              size="lg"
              bg="transparent"
              color="white"
              borderWidth="2px"
              borderColor="white"
              _hover={{ bg: 'white', color: 'navy.700' }}
            >
              DONATE
            </SecondaryButton>
          </a>
          <PrimaryButton size="lg">VOLUNTEER</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
