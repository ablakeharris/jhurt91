import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';
import { TermsOfService } from '@/src/components/TermsOfService';

export default function TermsOfServicePage() {
  return (
    <Box minH="screen">
      <Navigation />
      <Box pt={28} pb={20} px={4}>
        <Container width="narrow">
          <TermsOfService />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
