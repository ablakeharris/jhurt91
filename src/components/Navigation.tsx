'use client';

import {
  Box,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavContainer } from '@/src/elements/NavContainer';
import { NavLink } from '@/src/elements/NavLink';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Navigation = () => {
  const showMobileNav = useBreakpointValue({ base: false, md: true });

  return (
    <Box as="nav" position="fixed" top={0} w="full">
      <NavContainer>
        <Flex justify="space-between" align="center" h={16}>
          <Heading as="div" size="lg">
            JARREN HURT
          </Heading>
          {showMobileNav && (
            <HStack gap={8}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#issues">Issues</NavLink>
              <NavLink href="#volunteer">Get Involved</NavLink>
            </HStack>
          )}
          <SecondaryButton size="sm">DONATE</SecondaryButton>
        </Flex>
      </NavContainer>
    </Box>
  );
};
