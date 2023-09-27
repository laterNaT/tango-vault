import { Container } from "@chakra-ui/react";

export default function CustomContainer({
  maxW,
  children,
  ...props
}: {
  maxW: "md" | "lg" | "xl";
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Container
      flex={1}
      maxW={"container." + maxW}
      my={16}
      borderRadius={7}
      p={8}
      bg="white"
      {...props}
    >
      {children}
    </Container>
  );
}
