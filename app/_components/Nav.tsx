"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

export function Nav({ showAvatar = true }) {
  return (
    <Flex p={4} bg="white" alignItems="center">
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Image src="logo.png" alt="Company Logo" boxSize="60px" mr={4} />
        <Heading size="lg">TangoVault</Heading>
      </Flex>
      <Spacer />
      {showAvatar ? (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
          >
            <Avatar size="sm" />
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href={"/api/auth/signout"}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      ) : null}
    </Flex>
  );
}
