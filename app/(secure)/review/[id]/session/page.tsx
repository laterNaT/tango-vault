import CustomContainer from "@/app/_components/CustomContainer";
import {
  Text,
  CloseButton,
  Divider,
  Flex,
  Center,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";

type Card = {
  id: string;
  word: string;
  wordReading: string;
  wordMeaning: string;
  sentence: string;
  createdAt: string;
  updatedAt: string;
};

export default function Page({ params: { id } }: any) {
  const dummyCard: Card = {
    id: "1",
    word: "word",
    wordReading: "wordReading",
    wordMeaning: "wordMeaning",
    sentence: "sentence",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  };

  return (
    <CustomContainer maxW="md" display="flex" flexDirection="column">
      <CloseButton size="lg" alignSelf="flex-end" />
      <Flex direction="column" gap={4} h="100%" flex={1}>
        <Flex flex={1} direction="column" justifyContent="center">
          <Center>
            <Text>Sentence</Text>
          </Center>
          <Center>
            <Text>Word</Text>
          </Center>
        </Flex>
        <Divider />
        <Flex flex={1} direction="column" justifyContent="center">
          <Center>
            <Text>Hello</Text>
          </Center>
          <Center></Center>
        </Flex>
        <Center>
          <HStack spacing={2} mt={4}>
            <Button bg="red.300">Fail</Button>
            <Button bg="brand.700">Good</Button>
            <Button bg="brand.500">Easy</Button>
          </HStack>
        </Center>
      </Flex>
    </CustomContainer>
  );
}
