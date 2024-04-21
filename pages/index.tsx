import { NextPage } from "next";
import { Container, Title, Flex } from "@mantine/core";
import { useAddress } from "@thirdweb-dev/react";
import FactoryComponent from "../components/Factory";
import RegisterSplitter from "../components/RegisterSplitter";

const Home: NextPage = () => {
 const address = useAddress();

  if (!address) {
    return (
      <Container maw={1200} py={4}>
        <Flex h={"50vh"} justify={"center"} align={"center"}>
          <Title>Please connect your wallet</Title>
        </Flex>
      </Container>
    );
  }

 return (
   <Container>
    <FactoryComponent />
    <RegisterSplitter />

   </Container>
  )
  
};

export default Home;
