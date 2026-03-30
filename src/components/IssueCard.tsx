import { VStack, Text, Flex } from '@chakra-ui/react';
import { CardHeading } from '@/src/elements/CardHeading';

interface IssueCardProps {
  title: string;
  description: string;
}

export const IssueCard = ({ title, description }: IssueCardProps) => {
  return (
    <Flex borderLeftWidth={4} borderLeftColor="gold.500" pl={6}>
      <VStack align="start" gap={0}>
        <CardHeading>{title}</CardHeading>
        <Text fontSize="lg">{description}</Text>
      </VStack>
    </Flex>
  );
};
