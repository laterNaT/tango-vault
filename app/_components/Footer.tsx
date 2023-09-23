"use client";

import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const url = pathname === "/" ? "/about" : "/";
  const urlText = url === "/" ? "Home" : "About us";

  return (
    <Flex w="100" h="50" bg="black" justifyContent="center" alignItems="center">
      <Text color="white">
        TangoVault -{" "}
        <Text as="a" href={url} color="purple.300">
          {urlText}
        </Text>
      </Text>
    </Flex>
  );
}
