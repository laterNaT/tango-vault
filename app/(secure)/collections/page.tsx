"use client";

import CustomContainer from "@/app/_components/CustomContainer";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Page() {
  return (
    <>
      <Flex justifyContent="center" mt="6">
        <InputGroup maxW="300px" background="white">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search for a collection" />
        </InputGroup>
        <HStack ml="2" spacing={2}>
          <Button bg="brand.500" as={NextLink} href="/collections/new">
            New Collection
          </Button>
          <Button bg="brand.700">Export Data</Button>
        </HStack>
      </Flex>
      <CustomContainer maxW="xl">
        <TableContainer>
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
                onClick={() => alert("hello")}
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
                onClick={() => alert("hello")}
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
                onClick={() => alert("hello")}
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
                onClick={() => alert("hello")}
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
                onClick={() => alert("hello")}
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
                onClick={() => alert("hello")}
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
      </CustomContainer>
    </>
  );
}
