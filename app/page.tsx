import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Hero } from '@/src/components/Hero';
import { EmailSignup } from '@/src/components/EmailSignup';
import { About } from '@/src/components/About';
import { Donation } from '@/src/components/Donation';
import { Issues } from '@/src/components/Issues';
import { GetInvolved } from '@/src/components/GetInvolved';
import { Footer } from '@/src/components/Footer';

const SITE_URL = 'https://jhurt91.com';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jarren Hurt',
  jobTitle: 'Candidate for Indiana House District 91',
  description:
    'Navy submarine veteran, small business owner, and Democratic candidate for Indiana House District 91.',
  url: SITE_URL,
  image: `${SITE_URL}/images/jarren-signing-document.jpg`,
  affiliation: {
    '@type': 'Organization',
    name: 'Democratic Party',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Indiana University',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Friends of Jarren Hurt',
  },
  homeLocation: {
    '@type': 'AdministrativeArea',
    name: 'Indiana House District 91',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'IN',
      addressCountry: 'US',
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Friends of Jarren Hurt',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Official campaign committee for Jarren Hurt for Indiana House District 91.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jarren Hurt for Indiana House District 91',
  url: SITE_URL,
};

export default function Home() {
  return (
    <Box minH="screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
