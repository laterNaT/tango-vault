import { Flex, Spinner } from "@chakra-ui/react";

export default function Page() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Spinner color="red.500" size="xl" />
    </Flex>
  );
}
