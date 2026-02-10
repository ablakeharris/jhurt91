import { Navigation } from '@/src/components/Navigation';
import { Hero } from '@/src/components/Hero';
import { EmailSignup } from '@/src/components/EmailSignup';
import { About } from '@/src/components/About';
import { Donation } from '@/src/components/Donation';
import { Issues } from '@/src/components/Issues';
import { GetInvolved } from '@/src/components/GetInvolved';
import { Footer } from '@/src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <EmailSignup />
      <About />
      <Donation />
      <Issues />
      <GetInvolved />
      <Footer />
    </div>
  );
}
