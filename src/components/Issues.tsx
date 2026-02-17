import { Box, VStack, Flex } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { SectionHeading } from '@/src/elements/SectionHeading';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { IssueCard } from './IssueCard';

const issues = [
  {
    title: 'Education First',
    description: `Our children deserve fully funded schools with smaller class sizes, competitive teacher 
salaries, and modern resources. I'll fight to increase education funding and ensure every 
student has the opportunity to succeed, regardless of their zip code.`,
  },
  {
    title: 'Affordable Healthcare',
    description: `Healthcare is a right, not a privilege. I support expanding Medicaid, lowering prescription 
drug costs, and protecting coverage for pre-existing conditions. No family should go bankrupt 
because of medical bills.`,
  },
  {
    title: 'Economic Opportunity',
    description: `Working families are struggling with rising costs while wages stagnate. I'll advocate for 
raising the minimum wage, supporting small businesses, and investing in job training programs 
that prepare workers for the economy of tomorrow.`,
  },
];

export const Issues = () => {
  return (
    <Box as="section" id="issues" py={20} px={4}>
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
