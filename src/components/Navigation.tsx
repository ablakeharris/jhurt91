'use client';

import {
  Box,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { NavContainer } from '@/src/elements/NavContainer';
import { NavLink } from '@/src/elements/NavLink';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Navigation = () => {
  const showMobileNav = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="full"
      zIndex="banner"
      bg="navy.700"
      color="white"
      boxShadow="md"
    >
      <NavContainer>
        <Flex justify="space-between" align="center" h={16}>
          <Heading as="div" size="lg" color="gold.500">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              JARREN HURT
            </Link>
          </Heading>
          {showMobileNav && (
            <HStack gap={8}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#issues">Issues</NavLink>
              <NavLink href="#volunteer">Get Involved</NavLink>
            </HStack>
          )}
          <a
            href="https://secure.actblue.com/my-express/engagement-hub/216656?origin=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SecondaryButton size="sm">DONATE</SecondaryButton>
          </a>
        </Flex>
      </NavContainer>
    </Box>
  );
};
