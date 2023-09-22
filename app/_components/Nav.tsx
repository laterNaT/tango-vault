"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Spacer } from "@chakra-ui/react";

export function Nav() {
  return (
    <Flex p={4} bg="white" alignItems="center">
      <Box>
        <Heading size="lg">Homepage</Heading>
      </Box>
      <Spacer />
      <Box>
        <Avatar size="sm" />
        <ChevronDownIcon />
      </Box>
    </Flex>
  );
}
