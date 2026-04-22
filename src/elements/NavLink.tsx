import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
}

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <ChakraLink
      fontWeight="semibold"
      color="gold.900"
      _hover={{ color: 'gold.500', textDecoration: 'none' }}
      {...props}
    >
      {children}
    </ChakraLink>
  );
};
