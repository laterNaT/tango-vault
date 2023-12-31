"use client";

import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import NextLink from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Box h="100%" mt="28">
      <Center>
        <Heading>Welcome back, {session?.user?.name}.</Heading>
      </Center>
      <VStack spacing={5} mt="20">
        <Button
          as={NextLink}
          href="/collections"
          size="lg"
          bg="brand.500"
          minW="15rem"
        >
          My collections
        </Button>
        <Button
          as={NextLink}
          href="/review"
          size="lg"
          bg="brand.500"
          minW="15rem"
        >
          Review
        </Button>
        <Button size="lg" bg="brand.500" minW="15rem">
          Quick add
        </Button>
      </VStack>
    </Box>
  );
}
