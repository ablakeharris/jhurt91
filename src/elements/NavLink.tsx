import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
}

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <ChakraLink _hover={{ color: 'blue.200' }} transition="colors" {...props}>
      {children}
    </ChakraLink>
  );
};
