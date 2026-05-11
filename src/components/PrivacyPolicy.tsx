import {
  Box,
  Heading,
  Link,
  List,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react';

const DSAR_URL =
  'https://app.termly.io/dsar/56fe189b-8b46-4748-88a3-84d50df4ec2a';
const CONTACT_EMAIL = 'srhurt91@gmail.com';
const WEBSITE_URL = 'https://jhurt91.com';

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

const SubHeading = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <Heading
    as="h3"
    size="lg"
    color="navy.700"
    id={id}
    scrollMarginTop={28}
    mt={2}
  >
    {children}
  </Heading>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize="lg">{children}</Text>
);

const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} color="blue.600">
    {children}
  </Link>
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

const InShort = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize="lg">
    <Text as="strong">
      <Text as="em">In Short:</Text>
    </Text>{' '}
    <Text as="em" display="inline">
      {children}
    </Text>
  </Text>
);

export const PrivacyPolicy = () => {
  return (
    <VStack align="start" gap={6}>
      <Heading as="h1" size="3xl" color="navy.700">
        PRIVACY POLICY
      </Heading>
      <Text color="gray.500" fontWeight="bold">
        Last updated May 11, 2026
      </Text>

      <Body>
        This Privacy Notice for Friends of Jarren Hurt (
        <Text as="strong">we</Text>, <Text as="strong">us</Text>, or{' '}
        <Text as="strong">our</Text>), describes how and why we might access,
        collect, store, use, and/or share (<Text as="strong">process</Text>)
        your personal information when you use our services (
        <Text as="strong">Services</Text>), including when you:
      </Body>
      <Bullets
        items={[
          <>
            Visit our website at{' '}
            <ExternalLink href={WEBSITE_URL}>{WEBSITE_URL}</ExternalLink> or any
            website of ours that links to this Privacy Notice
          </>,
          <>
            Engage with us in other related ways, including any marketing or
            events
          </>,
        ]}
      />
      <Body>
        <Text as="strong">Questions or concerns? </Text>Reading this Privacy
        Notice will help you understand your privacy rights and choices. We are
        responsible for making decisions about how your personal information is
        processed. If you do not agree with our policies and practices, please
        do not use our Services. If you still have any questions or concerns,
        please contact us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        .
      </Body>

      <Heading as="h2" size="xl" color="navy.700">
        SUMMARY OF KEY POINTS
      </Heading>
      <Body>
        <Text as="strong">
          <Text as="em">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{' '}
            <InternalLink href="#toc">table of contents</InternalLink> below to
            find the section you are looking for.
          </Text>
        </Text>
      </Body>
      <Body>
        <Text as="strong">What personal information do we process?</Text> When
        you visit, use, or navigate our Services, we may process personal
        information depending on how you interact with us and the Services, the
        choices you make, and the products and features you use. Learn more
        about{' '}
        <InternalLink href="#personalinfo">
          personal information you disclose to us
        </InternalLink>
        .
      </Body>
      <Body>
        <Text as="strong">
          Do we process any sensitive personal information?{' '}
        </Text>
        Some of the information may be considered &ldquo;special&rdquo; or
        &ldquo;sensitive&rdquo; in certain jurisdictions, for example your
        racial or ethnic origins, sexual orientation, and religious beliefs. We
        do not process sensitive personal information.
      </Body>
      <Body>
        <Text as="strong">
          Do we collect any information from third parties?
        </Text>{' '}
        We do not collect any information from third parties.
      </Body>
      <Body>
        <Text as="strong">How do we process your information?</Text> We process
        your information to provide, improve, and administer our Services,
        communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with
        your consent. We process your information only when we have a valid
        legal reason to do so. Learn more about{' '}
        <InternalLink href="#infouse">
          how we process your information
        </InternalLink>
        .
      </Body>
      <Body>
        <Text as="strong">
          In what situations and with which parties do we share personal
          information?
        </Text>{' '}
        We may share information in specific situations and with specific third
        parties. Learn more about{' '}
        <InternalLink href="#whoshare">
          when and with whom we share your personal information
        </InternalLink>
        .
      </Body>
      <Body>
        <Text as="strong">How do we keep your information safe?</Text> We have
        adequate organizational and technical processes and procedures in place
        to protect your personal information. However, no electronic
        transmission over the internet or information storage technology can be
        guaranteed to be 100% secure, so we cannot promise or guarantee that
        hackers, cybercriminals, or other unauthorized third parties will not be
        able to defeat our security and improperly collect, access, steal, or
        modify your information. Learn more about{' '}
        <InternalLink href="#infosafe">
          how we keep your information safe
        </InternalLink>
        .
      </Body>
      <Body>
        <Text as="strong">What are your rights?</Text> Depending on where you
        are located geographically, the applicable privacy law may mean you have
        certain rights regarding your personal information. Learn more about{' '}
        <InternalLink href="#privacyrights">your privacy rights</InternalLink>.
      </Body>
      <Body>
        <Text as="strong">How do you exercise your rights?</Text> The easiest
        way to exercise your rights is by submitting a{' '}
        <ExternalLink href={DSAR_URL}>data subject access request</ExternalLink>
        , or by contacting us. We will consider and act upon any request in
        accordance with applicable data protection laws.
      </Body>
      <Body>
        Want to learn more about what we do with any information we collect?{' '}
        <InternalLink href="#toc">
          Review the Privacy Notice in full
        </InternalLink>
        .
      </Body>

      <Box id="toc" scrollMarginTop={28}>
        <Heading as="h2" size="xl" color="navy.700">
          TABLE OF CONTENTS
        </Heading>
      </Box>
      <List.Root pl={6} fontSize="lg" gap={1}>
        <List.Item>
          <InternalLink href="#infocollect">
            1. WHAT INFORMATION DO WE COLLECT?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#infouse">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#whoshare">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#inforetain">
            4. HOW LONG DO WE KEEP YOUR INFORMATION?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#infosafe">
            5. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#infominors">
            6. DO WE COLLECT INFORMATION FROM MINORS?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#privacyrights">
            7. WHAT ARE YOUR PRIVACY RIGHTS?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#DNT">
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#uslaws">
            9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#policyupdates">
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#contact">
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </InternalLink>
        </List.Item>
        <List.Item>
          <InternalLink href="#request">
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </InternalLink>
        </List.Item>
      </List.Root>

      <SectionHeading id="infocollect">
        1. WHAT INFORMATION DO WE COLLECT?
      </SectionHeading>
      <SubHeading id="personalinfo">
        Personal information you disclose to us
      </SubHeading>
      <InShort>We collect personal information that you provide to us.</InShort>
      <Body>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </Body>
      <Body>
        <Text as="strong">Personal Information Provided by You.</Text> The
        personal information that we collect depends on the context of your
        interactions with us and the Services, the choices you make, and the
        products and features you use. The personal information we collect may
        include the following:
      </Body>
      <Bullets items={['names', 'email addresses', 'phone numbers']} />
      <Box id="sensitiveinfo" scrollMarginTop={28}>
        <Body>
          <Text as="strong">Sensitive Information.</Text> We do not process
          sensitive information.
        </Body>
      </Box>
      <Body>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </Body>

      <SectionHeading id="infouse">
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </SectionHeading>
      <InShort>
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent.
      </InShort>
      <Body>
        <Text as="strong">
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </Text>
      </Body>
      <Bullets
        items={[
          <>
            <Text as="strong">
              To facilitate account creation and authentication and otherwise
              manage user accounts.{' '}
            </Text>
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </>,
          <>
            <Text as="strong">
              To respond to user inquiries/offer support to users.{' '}
            </Text>
            We may process your information to respond to your inquiries and
            solve any potential issues you might have with the requested
            service.
          </>,
          <>
            <Text as="strong">
              To send you marketing and promotional communications.{' '}
            </Text>
            We may process the personal information you send to us for our
            marketing purposes, if this is in accordance with your marketing
            preferences. You can opt out of our marketing emails at any time.
            For more information, see &ldquo;
            <InternalLink href="#privacyrights">
              WHAT ARE YOUR PRIVACY RIGHTS?
            </InternalLink>
            &rdquo; below.
          </>,
          <>
            <Text as="strong">To comply with our legal obligations.</Text> We
            may process your information to comply with our legal obligations,
            respond to legal requests, and exercise, establish, or defend our
            legal rights.
          </>,
        ]}
      />

      <SectionHeading id="whoshare">
        3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </SectionHeading>
      <InShort>
        We may share information in specific situations described in this
        section and/or with the following third parties.
      </InShort>
      <Body>
        We may need to share your personal information in the following
        situations:
      </Body>
      <Bullets
        items={[
          <>
            <Text as="strong">Business Transfers.</Text> We may share or
            transfer your information in connection with, or during negotiations
            of, any merger, sale of company assets, financing, or acquisition of
            all or a portion of our business to another company.
          </>,
        ]}
      />

      <SectionHeading id="inforetain">
        4. HOW LONG DO WE KEEP YOUR INFORMATION?
      </SectionHeading>
      <InShort>
        We keep your information for as long as necessary to fulfill the
        purposes outlined in this Privacy Notice unless otherwise required by
        law.
      </InShort>
      <Body>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this Privacy Notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than the period
        of time in which users have an account with us.
      </Body>
      <Body>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </Body>

      <SectionHeading id="infosafe">
        5. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </SectionHeading>
      <InShort>
        We aim to protect your personal information through a system of
        organizational and technical security measures.
      </InShort>
      <Body>
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cybercriminals,
        or other unauthorized third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </Body>

      <SectionHeading id="infominors">
        6. DO WE COLLECT INFORMATION FROM MINORS?
      </SectionHeading>
      <InShort>
        We do not knowingly collect data from or market to children under 18
        years of age.
      </InShort>
      <Body>
        We do not knowingly collect, solicit data from, or market to children
        under 18 years of age, nor do we knowingly sell such personal
        information. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent&rsquo;s use of the Services. If we learn that
        personal information from users less than 18 years of age has been
        collected, we will deactivate the account and take reasonable measures
        to promptly delete such data from our records. If you become aware of
        any data we may have collected from children under age 18, please
        contact us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        .
      </Body>

      <SectionHeading id="privacyrights">
        7. WHAT ARE YOUR PRIVACY RIGHTS?
      </SectionHeading>
      <InShort>
        You may review, change, or terminate your account at any time, depending
        on your country, province, or state of residence.
      </InShort>
      <Box id="withdrawconsent" scrollMarginTop={28}>
        <Body>
          <Text as="strong" textDecoration="underline">
            Withdrawing your consent:
          </Text>{' '}
          If we are relying on your consent to process your personal
          information, which may be express and/or implied consent depending on
          the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by
          using the contact details provided in the section &ldquo;
          <InternalLink href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </InternalLink>
          &rdquo; below.
        </Body>
      </Box>
      <Body>
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, when applicable law allows, will
        it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
      </Body>
      <Body>
        <Text as="strong" textDecoration="underline">
          Opting out of marketing and promotional communications:
        </Text>{' '}
        You can unsubscribe from our marketing and promotional communications at
        any time by clicking on the unsubscribe link in the emails that we send,
        or by contacting us using the details provided in the section &ldquo;
        <InternalLink href="#contact">
          HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </InternalLink>
        &rdquo; below. You will then be removed from the marketing lists.
        However, we may still communicate with you &mdash; for example, to send
        you service-related messages that are necessary for the administration
        and use of your account, to respond to service requests, or for other
        non-marketing purposes.
      </Body>
      <SubHeading>Account Information</SubHeading>
      <Body>
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </Body>
      <Bullets items={['Contact us using the contact information provided.']} />
      <Body>
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our legal
        terms and/or comply with applicable legal requirements.
      </Body>
      <Body>
        If you have questions or comments about your privacy rights, you may
        email us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        .
      </Body>

      <SectionHeading id="DNT">
        8. CONTROLS FOR DO-NOT-TRACK FEATURES
      </SectionHeading>
      <Body>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature or
        setting you can activate to signal your privacy preference not to have
        data about your online browsing activities monitored and collected. At
        this stage, no uniform technology standard for recognizing and
        implementing DNT signals has been finalized. As such, we do not
        currently respond to DNT browser signals or any other mechanism that
        automatically communicates your choice not to be tracked online. If a
        standard for online tracking is adopted that we must follow in the
        future, we will inform you about that practice in a revised version of
        this Privacy Notice.
      </Body>
      <Body>
        California law requires us to let you know how we respond to web browser
        DNT signals. Because there currently is not an industry or legal
        standard for recognizing or honoring DNT signals, we do not respond to
        them at this time.
      </Body>

      <SectionHeading id="uslaws">
        9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </SectionHeading>
      <InShort>
        If you are a resident of Indiana, you may have the right to request
        access to and receive details about the personal information we maintain
        about you and how we have processed it, correct inaccuracies, get a copy
        of, or delete your personal information. You may also have the right to
        withdraw your consent to our processing of your personal information.
        These rights may be limited in some circumstances by applicable law.
        More information is provided below.
      </InShort>
      <SubHeading>Categories of Personal Information We Collect</SubHeading>
      <Body>
        The table below shows the categories of personal information we have
        collected in the past twelve (12) months. The table includes
        illustrative examples of each category and does not reflect the personal
        information we collect from you. For a comprehensive inventory of all
        personal information we process, please refer to the section &ldquo;
        <InternalLink href="#infocollect">
          WHAT INFORMATION DO WE COLLECT?
        </InternalLink>
        &rdquo;
      </Body>
      <Box overflowX="auto" width="100%">
        <Table.Root size="sm" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>
                <Text as="strong">Category</Text>
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <Text as="strong">Examples</Text>
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <Text as="strong">Collected</Text>
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>A. Identifiers</Table.Cell>
              <Table.Cell>
                Contact details, such as real name, alias, postal address,
                telephone or mobile contact number, unique personal identifier,
                online identifier, Internet Protocol address, email address, and
                account name
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                B. Protected classification characteristics under state or
                federal law
              </Table.Cell>
              <Table.Cell>
                Gender, age, date of birth, race and ethnicity, national origin,
                marital status, and other demographic data
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>C. Commercial information</Table.Cell>
              <Table.Cell>
                Transaction information, purchase history, financial details,
                and payment information
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>D. Biometric information</Table.Cell>
              <Table.Cell>Fingerprints and voiceprints</Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                E. Internet or other similar network activity
              </Table.Cell>
              <Table.Cell>
                Browsing history, search history, online behavior, interest
                data, and interactions with our and other websites,
                applications, systems, and advertisements
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>F. Geolocation data</Table.Cell>
              <Table.Cell>Device location</Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                G. Audio, electronic, sensory, or similar information
              </Table.Cell>
              <Table.Cell>
                Images and audio, video or call recordings created in connection
                with our business activities
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                H. Professional or employment-related information
              </Table.Cell>
              <Table.Cell>
                Business contact details in order to provide you our Services at
                a business level or job title, work history, and professional
                qualifications if you apply for a job with us
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I. Education Information</Table.Cell>
              <Table.Cell>Student records and directory information</Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                J. Inferences drawn from collected personal information
              </Table.Cell>
              <Table.Cell>
                Inferences drawn from any of the collected personal information
                listed above to create a profile or summary about, for example,
                an individual&rsquo;s preferences and characteristics
              </Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>K. Sensitive personal Information</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>NO</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
      <Body>
        We may also collect other personal information outside of these
        categories through instances where you interact with us in person,
        online, or by phone or mail in the context of:
      </Body>
      <Bullets
        items={[
          'Receiving help through our customer support channels;',
          'Participation in customer surveys or contests; and',
          'Facilitation in the delivery of our Services and to respond to your inquiries.',
        ]}
      />
      <SubHeading>Sources of Personal Information</SubHeading>
      <Body>
        Learn more about the sources of personal information we collect in
        &ldquo;
        <InternalLink href="#infocollect">
          WHAT INFORMATION DO WE COLLECT?
        </InternalLink>
        &rdquo;
      </Body>
      <SubHeading>How We Use and Share Personal Information</SubHeading>
      <Body>
        Learn more about how we use your personal information in the section,
        &ldquo;
        <InternalLink href="#infouse">
          HOW DO WE PROCESS YOUR INFORMATION?
        </InternalLink>
        &rdquo;
      </Body>
      <Body>
        <Text as="strong">
          Will your information be shared with anyone else?
        </Text>
      </Body>
      <Body>
        We may disclose your personal information with our service providers
        pursuant to a written contract between us and each service provider.
        Learn more about how we disclose personal information to in the section,
        &ldquo;
        <InternalLink href="#whoshare">
          WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </InternalLink>
        &rdquo;
      </Body>
      <Body>
        We may use your personal information for our own business purposes, such
        as for undertaking internal research for technological development and
        demonstration. This is not considered to be &ldquo;selling&rdquo; of
        your personal information.
      </Body>
      <Body>
        We have not disclosed, sold, or shared any personal information to third
        parties for a business or commercial purpose in the preceding twelve
        (12) months. We will not sell or share personal information in the
        future belonging to website visitors, users, and other consumers.
      </Body>
      <SubHeading>Your Rights</SubHeading>
      <Body>
        You have rights under certain US state data protection laws. However,
        these rights are not absolute, and in certain cases, we may decline your
        request as permitted by law. These rights include:
      </Body>
      <Bullets
        items={[
          <>
            <Text as="strong">Right to know</Text> whether or not we are
            processing your personal data
          </>,
          <>
            <Text as="strong">Right to access </Text>your personal data
          </>,
          <>
            <Text as="strong">Right to correct </Text>inaccuracies in your
            personal data
          </>,
          <>
            <Text as="strong">Right to request</Text> the deletion of your
            personal data
          </>,
          <>
            <Text as="strong">Right to obtain a copy </Text>of the personal data
            you previously shared with us
          </>,
          <>
            <Text as="strong">Right to non-discrimination</Text> for exercising
            your rights
          </>,
          <>
            <Text as="strong">Right to opt out</Text> of the processing of your
            personal data if it is used for targeted advertising, the sale of
            personal data, or profiling in furtherance of decisions that produce
            legal or similarly significant effects (&ldquo;profiling&rdquo;)
          </>,
        ]}
      />
      <SubHeading>How to Exercise Your Rights</SubHeading>
      <Body>
        To exercise these rights, you can contact us by submitting a{' '}
        <ExternalLink href={DSAR_URL}>data subject access request</ExternalLink>
        , by emailing us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        , or by referring to the contact details at the bottom of this document.
      </Body>
      <Body>
        Under certain US state data protection laws, you can designate an
        authorized agent to make a request on your behalf. We may deny a request
        from an authorized agent that does not submit proof that they have been
        validly authorized to act on your behalf in accordance with applicable
        laws.
      </Body>
      <SubHeading>Request Verification</SubHeading>
      <Body>
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. We will only use personal information provided in your
        request to verify your identity or authority to make the request.
        However, if we cannot verify your identity from the information already
        maintained by us, we may request that you provide additional information
        for the purposes of verifying your identity and for security or
        fraud-prevention purposes.
      </Body>
      <Body>
        If you submit the request through an authorized agent, we may need to
        collect additional information to verify your identity before processing
        your request and the agent will need to provide a written and signed
        permission from you to submit such request on your behalf.
      </Body>
      <SubHeading>Appeals</SubHeading>
      <Body>
        Under certain US state data protection laws, if we decline to take
        action regarding your request, you may appeal our decision by emailing
        us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>
        . We will inform you in writing of any action taken or not taken in
        response to the appeal, including a written explanation of the reasons
        for the decisions. If your appeal is denied, you may submit a complaint
        to your state attorney general.
      </Body>

      <SectionHeading id="policyupdates">
        10. DO WE MAKE UPDATES TO THIS NOTICE?
      </SectionHeading>
      <Body>
        <Text as="em" display="inline">
          <Text as="strong">In Short: </Text>
          Yes, we will update this notice as necessary to stay compliant with
          relevant laws.
        </Text>
      </Body>
      <Body>
        We may update this Privacy Notice from time to time. The updated version
        will be indicated by an updated &ldquo;Revised&rdquo; date at the top of
        this Privacy Notice. If we make material changes to this Privacy Notice,
        we may notify you either by prominently posting a notice of such changes
        or by directly sending you a notification. We encourage you to review
        this Privacy Notice frequently to be informed of how we are protecting
        your information.
      </Body>

      <SectionHeading id="contact">
        11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </SectionHeading>
      <Body>
        If you have questions or comments about this notice, you may email us at{' '}
        <ExternalLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </ExternalLink>{' '}
        or contact us by post at:
      </Body>
      <Body>Friends of Jarren Hurt</Body>

      <SectionHeading id="request">
        12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </SectionHeading>
      <Body>
        Based on the applicable laws of your country or state of residence in
        the US, you may have the right to request access to the personal
        information we collect from you, details about how we have processed it,
        correct inaccuracies, or delete your personal information. You may also
        have the right to withdraw your consent to our processing of your
        personal information. These rights may be limited in some circumstances
        by applicable law. To request to review, update, or delete your personal
        information, please fill out and submit a{' '}
        <ExternalLink href={DSAR_URL}>data subject access request</ExternalLink>
        .
      </Body>
    </VStack>
  );
};
