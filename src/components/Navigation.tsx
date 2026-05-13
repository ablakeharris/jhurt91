'use client';

import { Box, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { NavContainer } from '@/src/elements/NavContainer';
import { NavLink } from '@/src/elements/NavLink';

export const Navigation = () => {
  const showMobileNav = useBreakpointValue({ base: false, md: true });

  return (
    <Box as="nav" top={0} w="full" zIndex="banner" color="white" boxShadow="md">
      <NavContainer>
        <Flex justify="space-between" align="center" h={32}>
          <Link
            href="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label="Jarren Hurt for Indiana House District 91 — Home"
          >
            <Image
              src="/images/logo.png"
              alt="Jarren Hurt for Indiana House District 91"
              width={256}
              height={128}
              priority
              style={{ height: '8rem', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          {showMobileNav && (
            <HStack gap={8}>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#issues">Issues</NavLink>
              <NavLink href="/volunteer">Get Involved</NavLink>
            </HStack>
          )}
        </Flex>
      </NavContainer>
    </Box>
  );
};
