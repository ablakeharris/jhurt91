'use client';

import {
  Box,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { NavContainer } from '@/src/elements/NavContainer';
import { NavLink } from '@/src/elements/NavLink';

export const Navigation = () => {
  const showMobileNav = useBreakpointValue({ base: false, md: true });

  return (
    <Box as="nav" top={0} w="full" zIndex="banner" color="white" boxShadow="md">
      <NavContainer>
        <Flex justify="space-between" align="center" h={32}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image
              src="/images/logo.png"
              alt="Jarren Hurt for Indiana House District 91"
              h={32}
              objectFit="contain"
            />
          </Link>
          {showMobileNav && (
            <HStack gap={8}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#issues">Issues</NavLink>
              <NavLink href="#volunteer">Get Involved</NavLink>
            </HStack>
          )}
        </Flex>
      </NavContainer>
    </Box>
  );
};
