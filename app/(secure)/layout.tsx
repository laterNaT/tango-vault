import { Flex } from "@chakra-ui/react";
import Footer from "../_components/Footer";
import { Nav } from "../_components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Nav />
      <Flex direction="column" flex="1">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
