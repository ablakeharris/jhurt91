import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Hero } from '@/src/components/Hero';
import { EmailSignup } from '@/src/components/EmailSignup';
import { About } from '@/src/components/About';
import { Donation } from '@/src/components/Donation';
import { Issues } from '@/src/components/Issues';
import { GetInvolved } from '@/src/components/GetInvolved';
import { Footer } from '@/src/components/Footer';
// import { ComingSoon } from '@/src/components/ComingSoon';

export default function Home() {
  // return <ComingSoon />;
  return (
    <Box minH="screen">
      <Navigation />
      <Hero />
      <About />
      <Donation />
      <EmailSignup />
      <Issues />
      <GetInvolved />
      <Footer />
    </Box>
  );
}
