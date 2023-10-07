"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
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
      <Box>
        <Heading size="lg">TangoVault</Heading>
      </Box>
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
