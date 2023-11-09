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
import type { Collection } from "@/app/_models/user-data";
import { useEffect, useState } from "react";

async function fetchCollections(): Promise<Collection[] | undefined> {
  try {
    const res = await fetch("/api/collections");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default function Page() {
  const [collections, setCollections] = useState<Collection[] | undefined>(
    undefined,
  );

  useEffect(() => {
    fetchCollections().then((data) => setCollections(data));
  }, []);

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
              {collections?.map((collection, index) => (
                <Tr
                  _hover={{
                    cursor: "pointer",
                  }}
                  key={index}
                  onClick={() => alert("hello")}
                >
                  <Td>{collection.name}</Td>
                  <Td>{collection.cards.length}</Td>
                  <Td>{collection.category}</Td>
                  <Td>{collection.created?.toDateString()}</Td>
                  <Td>
                    {collection.lastReviewSession?.toDateString() ?? "None"}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CustomContainer>
    </>
  );
}
