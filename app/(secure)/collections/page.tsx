"use client";

import CustomContainer from "@/app/_components/CustomContainer";
import { SearchIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
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

type SortOrder = "asc" | "desc";

type SortField =
  | "name"
  | "cards"
  | "category"
  | "created"
  | "lastReviewSession";

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

  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  const onSort = (field: SortField) => {
    if (!field) return;
    const order = field === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    setCollections((prevCollections) => {
      if (!prevCollections) return prevCollections;

      return [...prevCollections].sort((a, b) => {
        const aValue = a[field] ?? "";
        const bValue = b[field] ?? "";

        if (aValue < bValue) return order === "asc" ? -1 : 1;
        if (aValue > bValue) return order === "asc" ? 1 : -1;
        return 0;
      });
    });
  };

  useEffect(() => {
    // TODO: use useUserDataService
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
                {[
                  "name",
                  "cards",
                  "category",
                  "created",
                  "lastReviewSession",
                ].map((field) => (
                  <Th
                    key={field}
                    onClick={() => onSort(field as SortField)}
                    style={{ cursor: "pointer" }}
                    position="relative"
                  >
                    {field}{" "}
                    {sortField === field &&
                      (sortOrder === "asc" ? (
                        <TriangleUpIcon color={"black"} ml={2} />
                      ) : (
                        <TriangleDownIcon color={"black"} ml={2} />
                      ))}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {collections && collections.length > 0 ? (
                collections.map((collection, index) => (
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
                    <Td>
                      {formatDate(collection.created as unknown as string)}
                    </Td>
                    <Td>
                      {collection.lastReviewSession?.toDateString() ?? "None"}
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={5} textAlign="center">
                    No collections yet created
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </CustomContainer>
    </>
  );
}
