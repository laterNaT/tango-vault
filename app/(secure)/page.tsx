import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box h="100%" mt="28">
      <Center>
        <Heading>Welcome back, X.</Heading>
      </Center>
      <VStack spacing={5} mt="20">
        <Button size="lg" bg="brand.500" minW="15rem">
          My collections
        </Button>
        <Button size="lg" bg="brand.500" minW="15rem">
          Review
        </Button>
        <Button size="lg" bg="brand.500" minW="15rem">
          Quick add
        </Button>
      </VStack>
    </Box>
  );
}
