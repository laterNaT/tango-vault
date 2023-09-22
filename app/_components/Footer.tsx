"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex w="100" h="50" bg="black" justifyContent="center" alignItems="center">
      <Text color="white">
        TangoVault -{" "}
        <Text as="a" href="#" color="purple.300">
          About us
        </Text>
      </Text>
    </Flex>
  );
}
