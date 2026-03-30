import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface FooterLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
}

export const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <ChakraLink color="gray.400" _hover={{ color: 'white' }} {...props}>
      {children}
    </ChakraLink>
  );
};
