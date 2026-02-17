import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface FooterLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
}

export const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <ChakraLink _hover={{ color: 'white' }} transition="colors" {...props}>
      {children}
    </ChakraLink>
  );
};
