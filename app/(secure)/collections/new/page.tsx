"use client";

import CustomContainer from "@/app/_components/CustomContainer";
import NextLink from "next/link";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  collectionName: string;
  category: string;
};

export default function Page() {
  const { register, handleSubmit, formState, control } = useForm<Inputs>();
  const { errors } = formState;

  const fields = {
    collectionName: register("collectionName", {
      required: "Collection name is required.",
    }),
    category: register("category", { required: "Category is required." }),
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <CustomContainer maxW="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={4}>
          <FormControl isInvalid={errors.collectionName != undefined}>
            <FormLabel>Collection name</FormLabel>
            <Input type="text" {...fields.collectionName} />
            <FormErrorMessage>
              {errors.collectionName && errors.collectionName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.category != undefined}>
            <FormLabel>Category </FormLabel>
            <Select placeholder="Select category" {...fields.category}>
              <option value="books">Books</option>
              <option value="news">News</option>
              <option value="other">Other</option>
            </Select>
            <FormErrorMessage>
              {errors.category && errors.category.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <HStack ml="2" spacing={2} mt={4}>
          <Button bg="brand.500" type="submit">
            Submit
          </Button>
          <Button bg="brand.700" as={NextLink} href="/collections">
            Cancel
          </Button>
        </HStack>
      </form>
    </CustomContainer>
  );
}
