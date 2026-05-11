import { Box, Heading, Link, List, Text, VStack } from '@chakra-ui/react';

const CONTACT_EMAIL = 'srhurt91@gmail.com';
const WEBSITE_URL = 'https://jhurt91.com';
const ACTBLUE_URL =
  'https://secure.actblue.com/my-express/engagement-hub/216656?origin=share';

const SectionHeading = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <Heading as="h2" size="xl" color="navy.700" id={id} scrollMarginTop={28}>
    {children}
  </Heading>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize="lg">{children}</Text>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} color="blue.600" target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <List.Root pl={6} fontSize="lg">
    {items.map((item, i) => (
      <List.Item key={i}>{item}</List.Item>
    ))}
  </List.Root>
);

export const TermsOfService = () => {
  return (
    <VStack align="start" gap={6}>
      <Heading as="h1" size="3xl" color="navy.700">
        TERMS OF SERVICE
      </Heading>
      <Text color="gray.500" fontWeight="bold">
        Last updated May 11, 2026
      </Text>

      <Body>
        Welcome to the website of Friends of Jarren Hurt (
        <Text as="strong">we</Text>, <Text as="strong">us</Text>, or{' '}
        <Text as="strong">our</Text>). These Terms of Service (
        <Text as="strong">Terms</Text>) govern your access to and use of{' '}
        <ExternalLink href={WEBSITE_URL}>{WEBSITE_URL}</ExternalLink> and any
        related services we provide (collectively, the{' '}
        <Text as="strong">Services</Text>). By accessing or using the Services,
        you agree to be bound by these Terms. If you do not agree, please do
        not use the Services.
      </Body>

      <SectionHeading id="eligibility">1. ELIGIBILITY</SectionHeading>
      <Body>
        You must be at least 18 years old to use the Services. By using the
        Services, you represent and warrant that you meet this requirement and
        that you have the legal capacity to agree to these Terms.
      </Body>

      <SectionHeading id="use">2. USE OF THE SERVICES</SectionHeading>
      <Body>
        You agree to use the Services only for lawful purposes and in a manner
        consistent with these Terms. You agree not to:
      </Body>
      <Bullets
        items={[
          'Use the Services in any way that violates any applicable federal, state, local, or international law or regulation;',
          'Attempt to gain unauthorized access to, interfere with, damage, or disrupt any part of the Services or the servers or networks connected to the Services;',
          'Use any robot, spider, scraper, or other automated means to access the Services for any purpose without our express written permission;',
          'Impersonate any person or entity or misrepresent your affiliation with any person or entity; or',
          'Use the Services to transmit any unlawful, harassing, defamatory, abusive, threatening, harmful, or otherwise objectionable material.',
        ]}
      />

      <SectionHeading id="submissions">
        3. USER SUBMISSIONS
      </SectionHeading>
      <Body>
        If you submit information to us through the Services (for example,
        through a volunteer signup, contact form, or other communication), you
        represent that the information is accurate and that you have the right
        to share it. You grant us a non-exclusive, royalty-free, worldwide
        license to use, store, and process the information you submit for the
        purposes of operating the Services and supporting the campaign,
        consistent with our{' '}
        <Link href="/privacy" color="blue.600">
          Privacy Policy
        </Link>
        .
      </Body>

      <SectionHeading id="donations">4. DONATIONS</SectionHeading>
      <Body>
        Donations to the campaign are processed through third-party providers,
        including{' '}
        <ExternalLink href={ACTBLUE_URL}>ActBlue</ExternalLink>. When you make
        a donation, you are also subject to the terms and privacy practices of
        the applicable third-party provider. We are not responsible for the
        acts or omissions of any third-party donation processor.
      </Body>
      <Body>
        Contributions to political campaigns are subject to federal and state
        law, including limits on the amount and source of contributions. By
        making a contribution, you certify that you are eligible to do so
        under applicable law.
      </Body>

      <SectionHeading id="ip">5. INTELLECTUAL PROPERTY</SectionHeading>
      <Body>
        The Services, including all content, text, graphics, logos, images,
        and software, are owned by or licensed to us and are protected by
        copyright, trademark, and other intellectual property laws. You may
        not copy, reproduce, distribute, publish, modify, or create derivative
        works of any part of the Services without our prior written consent,
        except that you may share links to public pages of the Services for
        non-commercial purposes.
      </Body>

      <SectionHeading id="thirdparty">
        6. THIRD-PARTY LINKS AND SERVICES
      </SectionHeading>
      <Body>
        The Services may contain links to third-party websites or services
        that are not owned or controlled by us. We are not responsible for the
        content, policies, or practices of any third-party websites or
        services. Your use of any third-party website or service is at your
        own risk and subject to the terms and policies of that third party.
      </Body>

      <SectionHeading id="disclaimers">7. DISCLAIMERS</SectionHeading>
      <Body>
        The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis, without warranties of any kind, either express
        or implied. To the fullest extent permitted by law, we disclaim all
        warranties, including the implied warranties of merchantability,
        fitness for a particular purpose, and non-infringement. We do not
        warrant that the Services will be uninterrupted, error-free, secure,
        or free of viruses or other harmful components.
      </Body>

      <SectionHeading id="liability">
        8. LIMITATION OF LIABILITY
      </SectionHeading>
      <Body>
        To the fullest extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits, revenue, data, or goodwill, arising out of or in
        connection with your access to or use of the Services, even if we
        have been advised of the possibility of such damages. Our total
        liability for any claim arising out of these Terms or the Services
        will not exceed one hundred U.S. dollars ($100).
      </Body>

      <SectionHeading id="indemnification">
        9. INDEMNIFICATION
      </SectionHeading>
      <Body>
        You agree to indemnify, defend, and hold harmless Friends of Jarren
        Hurt and its officers, volunteers, agents, and affiliates from and
        against any claims, liabilities, damages, losses, and expenses
        (including reasonable attorneys&rsquo; fees) arising out of or in any
        way connected with your use of the Services or your violation of
        these Terms.
      </Body>

      <SectionHeading id="termination">10. TERMINATION</SectionHeading>
      <Body>
        We may suspend or terminate your access to the Services at any time,
        for any reason, without notice. Upon termination, your right to use
        the Services will immediately cease. The provisions of these Terms
        that by their nature should survive termination will survive,
        including ownership provisions, warranty disclaimers, indemnity, and
        limitations of liability.
      </Body>

      <SectionHeading id="law">
        11. GOVERNING LAW AND DISPUTE RESOLUTION
      </SectionHeading>
      <Body>
        These Terms are governed by the laws of the State of Indiana, without
        regard to its conflict of laws principles. Any dispute arising out of
        or relating to these Terms or the Services will be brought
        exclusively in the state or federal courts located in Indiana, and
        you consent to the personal jurisdiction of those courts.
      </Body>

      <SectionHeading id="changes">
        12. CHANGES TO THESE TERMS
      </SectionHeading>
      <Body>
        We may update these Terms from time to time. The updated version will
        be indicated by an updated &ldquo;Last updated&rdquo; date at the top
        of these Terms. Your continued use of the Services after the changes
        take effect constitutes your acceptance of the revised Terms.
      </Body>

      <SectionHeading id="contact">13. CONTACT US</SectionHeading>
      <Body>
        If you have questions about these Terms, you may contact us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        .
      </Body>
      <Box>
        <Body>Friends of Jarren Hurt</Body>
      </Box>
    </VStack>
  );
};
