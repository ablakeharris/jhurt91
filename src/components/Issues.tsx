import { Box, VStack, Flex } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { SectionHeading } from '@/src/elements/SectionHeading';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { IssueCard } from './IssueCard';

const issues = [
  {
    title: 'Public Education',
    description:
      'Every child in Indiana deserves a quality public education. Jarren will fight to fully fund our public schools, support teachers, and ensure students have the resources they need to succeed — regardless of their zip code.',
  },
  {
    title: 'No Data Centers in Our Communities',
    description:
      'Massive data centers consume enormous amounts of water and energy while creating few local jobs. Jarren opposes subsidizing Big Tech at the expense of Indiana families and will push back against data center development that harms our communities.',
  },
  {
    title: 'Cut the Gas Tax',
    description:
      'Hoosiers are paying too much at the pump. Jarren supports cutting Indiana\u2019s gas tax to put money back in the pockets of working families and small businesses who depend on affordable transportation.',
  },
  {
    title: 'Remove Toll Roads',
    description:
      'Toll roads are a tax on working Hoosiers who simply need to get to work. Jarren will fight to eliminate toll roads and restore free, open access to Indiana\u2019s highways for the people who built them.',
  },
  {
    title: 'Raise the Minimum Wage',
    description:
      'Indiana\u2019s minimum wage has not kept pace with the cost of living. Jarren supports raising the minimum wage so that every Hoosier who works full time can afford to pay rent, buy groceries, and support their family.',
  },
  {
    title: 'Housing for Hoosiers',
    description:
      'The housing shortage is squeezing Indiana families out of the communities they grew up in. Jarren will advocate for policies that increase the supply of affordable housing and keep homeownership within reach for working Hoosiers.',
  },
];

export const Issues = () => {
  return (
    <Box as="section" id="issues" py={20} px={4} bg="white">
      <Container>
        <SectionHeading centered>WHERE I STAND</SectionHeading>
        <VStack gap={8} align="stretch">
          {issues.map((issue) => (
            <IssueCard
              key={issue.title}
              title={issue.title}
              description={issue.description}
            />
          ))}
        </VStack>
        <Flex justify="center" mt={12}>
          <PrimaryButton>Learn More About My Platform</PrimaryButton>
        </Flex>
      </Container>
    </Box>
  );
};
