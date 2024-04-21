import { Card, Title, Skeleton, Stack, Text } from "@mantine/core";
import { useAddress, useBalance, useContract } from "@thirdweb-dev/react";
import { readContract, getContract, createThirdwebClient } from "thirdweb";
import { FACTORY_ADDRESS } from "../constants/addresses";
import { FACTORY_ABI } from "../constants/abis";

export default function Splitters() {
    const address = useAddress();

    const client = createThirdwebClient({
       secretKey: "YOUR_SECRET_KEY_HERE" 
    });
    const contract = getContract({
        client,
        chain: "base-sepolia-testnet",
        address: FACTORY_ADDRESS,
        abi: FACTORY_ABI,
    });    

    const getOwnerSplitters = readContract({
        contract,
        method: "getOwnerSplitters",
    });


    return (
        <Card p={5}>
            <Stack>
                <Title order={1}>Splitters</Title>
                <Text order={3}>Factory contract: {factoryLoading ? <Skeleton /> : factory}</Text>
            </Stack>
        </Card>
    );
}
