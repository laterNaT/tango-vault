import CustomContainer from "@/app/_components/CustomContainer";
import {
  Image,
  Center,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <CustomContainer maxW="md">
      <Center mb="20">
        <Image
          boxSize="200px"
          objectFit="cover"
          src="logo.png"
          alt="Company Logo"
        />
      </Center>
      <Container>
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
    </CustomContainer>
  );
}
