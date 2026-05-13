import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { VolunteerForm } from './VolunteerForm';

const TITLE = 'Volunteer';
const DESCRIPTION =
  'Join the campaign to elect Jarren Hurt for Indiana House District 91. Sign up to knock doors, make calls, and help build a movement for working Hoosier families.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/volunteer' },
  openGraph: {
    title: `${TITLE} | Jarren Hurt for Indiana`,
    description: DESCRIPTION,
    url: '/volunteer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Jarren Hurt for Indiana`,
    description: DESCRIPTION,
  },
};

export default function VolunteerPage() {
  return (
    <Box minH="screen">
      <Navigation />
      <VolunteerForm />
      <Footer />
    </Box>
  );
}
