import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';
import { PrivacyPolicy } from '@/src/components/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <Box minH="screen">
      <Navigation />
      <Box pt={28} pb={20} px={4}>
        <Container width="narrow">
          <PrivacyPolicy />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
