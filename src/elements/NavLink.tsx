import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      fontWeight="semibold"
      color="gold.900"
      _hover={{ color: 'gold.500', textDecoration: 'none' }}
      {...props}
    >
      {children}
    </ChakraLink>
  );
};
