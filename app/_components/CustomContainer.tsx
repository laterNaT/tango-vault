import { Container } from "@chakra-ui/react";

export default function CustomContainer({
  maxW,
  children,
}: {
  maxW: "md" | "lg" | "xl";
  children: React.ReactNode;
}) {
  return (
    <Container
      flex={1}
      maxW={"container." + maxW}
      my={16}
      borderRadius={7}
      p={8}
      bg="white"
    >
      {children}
    </Container>
  );
}
