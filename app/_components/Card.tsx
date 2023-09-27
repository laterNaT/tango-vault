"use client";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  HStack,
  Button,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import NextLink from "next/link";

type Inputs = {
  sentence: string;
  word: string;
  wordReading: string;
  wordMeaning: string;
};

export default function Card({ id }: { id: number }) {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;

  const fields = {
    sentence: register("sentence", {
      required: "Sentence name is required.",
    }),
    word: register("word", { required: "Word is required" }),
    wordReading: register("wordReading", {
      required: "Word reading is required.",
    }),
    wordMeading: register("wordMeaning", {
      required: "Word meaning is required.",
    }),
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap={4}>
        <FormControl isInvalid={errors.word != undefined}>
          <FormLabel>Word</FormLabel>
          <Input type="text" {...fields.word} />
          <FormErrorMessage>
            {errors.word && errors.word.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.wordReading != undefined}>
          <FormLabel>Word reading</FormLabel>
          <Input type="text" {...fields.wordReading} />
          <FormErrorMessage>
            {errors.wordReading && errors.wordReading.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.wordMeaning != undefined}>
          <FormLabel>Word meaning</FormLabel>
          <Input type="text" {...fields.wordMeading} />
          <FormErrorMessage>
            {errors.wordMeaning && errors.wordMeaning.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.sentence != undefined}>
          <FormLabel>Sentence</FormLabel>
          <Input type="text" {...fields.sentence} />
          <FormErrorMessage>
            {errors.sentence && errors.sentence.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <HStack ml="2" spacing={2} mt={4}>
        <Button bg="brand.500" type="submit">
          Save
        </Button>
      </HStack>
    </form>
  );
}
