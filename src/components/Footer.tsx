import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { Container } from '@/src/elements/Container';
import { FooterLink } from '@/src/elements/FooterLink';

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" py={12} px={4}>
      <Container width="wide" centered>
        <VStack gap={4} align="center">
          <Text fontSize="lg" fontWeight="semibold" color="white">
            JARREN HURT FOR STATE LEGISLATURE
          </Text>
          <Text>Paid for by Jarren Hurt for State Legislature</Text>
          <HStack gap={6} fontSize="sm" justify="center">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
