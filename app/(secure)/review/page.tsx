import CustomContainer from "@/app/_components/CustomContainer";
import NextLink from "next/link";
import {
  Button,
  Center,
  Flex,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <CustomContainer maxW="xl">
        <Flex direction="column" h="100%">
          <TableContainer flexGrow={1} h="full">
            <Table variant="striped" colorScheme="facebook">
              <Thead>
                <Tr>
                  <Th>Collection name</Th>
                  <Th>Card Count</Th>
                  <Th>Category</Th>
                  <Th>Created</Th>
                  <Th>Last Review Session</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 1</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 2</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 3</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 4</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 5</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 6</Td>
                  <Td>200</Td>
                  <Td>Books</Td>
                  <Td>2023-01-01</Td>
                  <Td>2023-02-01</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Center>
            <HStack spacing={2} mt={4}>
              <Button bg="brand.700" opacity="0.8" as={NextLink} href="/">
                Cancel
              </Button>
              <Button bg="brand.500" type="submit">
                Review
              </Button>
            </HStack>
          </Center>
        </Flex>
      </CustomContainer>
    </>
  );
}
