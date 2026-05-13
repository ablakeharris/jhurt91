import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';
import { TermsOfService } from '@/src/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for the Jarren Hurt for Indiana House District 91 campaign website.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

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
