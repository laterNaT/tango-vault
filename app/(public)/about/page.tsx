import { Center, Container, Divider, Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <Container
      flex={1}
      maxW="container.md"
      my={16}
      borderRadius={7}
      p={8}
      bg="white"
    >
      <Center mb="20">
        <Heading>Hello</Heading>
      </Center>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          blanditiis debitis unde doloribus harum nostrum officiis omnis,
          sapiente eum. Ratione, et accusantium. Illo, dicta quidem! Voluptatem
          animi doloribus laudantium reprehenderit iusto sed sit molestias ipsam
          obcaecati at minus, tempora asperiores tenetur voluptatum
        </Text>
        <Divider my={10} />
        <Text>
          exercitationem quas. Assumenda eligendi eaque est accusantium porro
          quidem voluptate, minus facilis quia natus perspiciatis alias iste
          quis saepe error doloremque dolor omnis? Tenetur magni consequatur
          nihil quo sapiente quibusdam ipsa totam? Quasi animi odio amet porro
          nobis doloribus accusantium voluptate recusandae illum necessitatibus
          officiis nihil deleniti consequuntur ullam nesciunt iure, suscipit
          neque blanditiis. Reprehenderit quaerat eos perspiciatis?
        </Text>
      </Container>
    </Container>
  );
}
