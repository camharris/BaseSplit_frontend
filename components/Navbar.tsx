import { Container, Flex, Title } from "@mantine/core";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <Container>
      <Flex justify={"space-between"} align={"right"}>
        <Title>BaseMint</Title>
        <ConnectWallet />
      </Flex>
    </Container>
  );
}