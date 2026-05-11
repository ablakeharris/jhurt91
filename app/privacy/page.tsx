import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';

export default function PrivacyPolicyPage() {
  return (
    <Box minH="screen">
      <Navigation />
      <Box pt={28} pb={20} px={4}>
        <Container width="narrow">
          <Heading as="h1" size="xl" mb={4} lineHeight="shorter">
            PRIVACY POLICY
          </Heading>
          {/* Undo this when ToS created */}
          {/* <Text fontSize="sm" color="gray.500" mb={8}>
            Last updated: [DATE]
          </Text>

          <VStack gap={6} align="stretch">
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Introduction
              </Heading>
              <Text>[Replace with introduction content.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Information We Collect
              </Heading>
              <Text>[Replace with description of information collected.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                How We Use Your Information
              </Heading>
              <Text>[Replace with description of how information is used.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                How We Share Your Information
              </Heading>
              <Text>[Replace with description of sharing practices.]</Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2}>
                Your Choices
              </Heading>
              <Text>[Replace with description of user choices and rights.]</Text>
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
