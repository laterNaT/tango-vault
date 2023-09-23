"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, Spacer } from "@chakra-ui/react";

export function Nav({ showAvatar = true }) {
  return (
    <Flex p={4} bg="white" alignItems="center">
      <Box>
        <Heading size="lg">{document.title}</Heading>
      </Box>
      <Spacer />
      {showAvatar ? (
        <Box>
          <Avatar size="sm" />
          <ChevronDownIcon />
        </Box>
      ) : null}
    </Flex>
  );
}
