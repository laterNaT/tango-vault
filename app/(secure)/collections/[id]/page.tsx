import Card from "@/app/_components/Card";
import CustomContainer from "@/app/_components/CustomContainer";
import {
  Box,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function Page({ params: { id } }: any) {
  return (
    <CustomContainer maxW="xl">
      <Flex gap={8} mx={8}>
        <Box resize="horizontal" overflow="auto" w="100%">
          <TableContainer>
            <Table variant="striped" colorScheme="facebook">
              <Thead>
                <Tr>
                  <Th>Card name</Th>
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
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 2</Td>
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 3</Td>
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 4</Td>
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 5</Td>
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Td>Collection 6</Td>
                  <Td>Books</Td>
                  <Td>2023-02-01</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box w="100%">
          <Card id={1} />
        </Box>
      </Flex>
    </CustomContainer>
  );
}
