import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';

export default function TermsOfServicePage() {
  return (
    <Box minH="screen">
      <Navigation />
      <Box pt={28} pb={20} px={4}>
        <Container width="narrow">
          <Heading as="h1" size="xl" mb={4} lineHeight="shorter">
            TERMS OF SERVICE
          </Heading>
          {/* Undo this when ToS created */}
          {/* <Text fontSize="sm" color="gray.500" mb={8}>
            Last updated: [DATE]
          </Text>

          <VStack gap={6} align="stretch">
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Acceptance of Terms
              </Heading>
              <Text>[Replace with acceptance of terms content.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Use of the Site
              </Heading>
              <Text>[Replace with description of acceptable use.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Intellectual Property
              </Heading>
              <Text>[Replace with intellectual property terms.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Disclaimers
              </Heading>
              <Text>[Replace with disclaimers.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Limitation of Liability
              </Heading>
              <Text>[Replace with limitation of liability terms.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Changes to These Terms
              </Heading>
              <Text>[Replace with changes policy.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Contact Us
              </Heading>
              <Text>[Replace with contact information.]</Text>
            </Box>
          </VStack> */}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
