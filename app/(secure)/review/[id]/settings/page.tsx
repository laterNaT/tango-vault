"use client";

import CustomContainer from "@/app/_components/CustomContainer";
import NextLink from "next/link";
import {
  Box,
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
import { useForm } from "react-hook-form";

type Inputs = {
  numberOfCards: number;
  reviewOrder: string;
};

export default function Page() {
  const { register, handleSubmit, formState, control } = useForm<Inputs>();
  const { errors } = formState;

  const fields = {
    numberOfCards: register("numberOfCards", {
      required: "Number of cards is required.",
    }),
    reviewOrder: register("reviewOrder", {
      required: "Review order is required.",
    }),
  };

  return (
    <CustomContainer maxW="md">
      <form>
        <Flex direction="column" gap={4}>
          <Text>Specify your settings for the review session below.</Text>
          <FormControl isInvalid={errors.numberOfCards != undefined}>
            <FormLabel>Number of cards</FormLabel>
            <Input type="number" {...fields.numberOfCards} defaultValue={20} />
            <FormErrorMessage>
              {errors.numberOfCards && errors.numberOfCards.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.reviewOrder != undefined}>
            <FormLabel>Review order</FormLabel>
            <Select placeholder="Select review order" {...fields.reviewOrder}>
              <option value="random">Random</option>
              <option value="oldest">Oldest</option>
              <option value="newest">Newest</option>
            </Select>
            <FormErrorMessage>
              {errors.reviewOrder && errors.reviewOrder.message}
            </FormErrorMessage>
          </FormControl>

          <HStack spacing={2} mt={4}>
            <Button bg="brand.700" opacity="0.8" as={NextLink} href="/review">
              Cancel
            </Button>
            <Button bg="brand.500" type="submit">
              Review
            </Button>
          </HStack>
        </Flex>
      </form>
    </CustomContainer>
  );
}
