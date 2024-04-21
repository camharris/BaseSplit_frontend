import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { Button, Text, Card, Group, SimpleGrid, Skeleton, Container, Space } from '@mantine/core';
import { ethers } from 'ethers';
import { ERC20_ADDRESSES } from '../constants/addresses';
import { ERC20_ABI, SPLITTER_ABI } from '../constants/abis';

const SplitterDetailComponent = ({ splitterAddress }) => {
  const { contract } = useContract(splitterAddress, SPLITTER_ABI);
  
  // Fetch Ethereum balance
  const { data: ethBalanceData, isLoading: isEthBalanceLoading } = useContractRead(contract, 'getBalance');
  const { data: partyData, isLoading: isPartyLoading } = useContractRead(contract, 'getParties');
  const { data: sharesData, isLoading: isSharesLoading } = useContractRead(contract, 'getShares');

  // Format the Ethereum balance for display
  const ethBalance = ethBalanceData ? ethers.utils.formatEther(ethBalanceData) : '0';

  // Prepare state for ERC20 balances
  const [erc20Balances, setErc20Balances] = useState({});
  const [erc20Symbols, setErc20Symbols] = useState({});

  // Fetch balances for each ERC20 address
  ERC20_ADDRESSES.forEach((address) => {
    const { erc20Contract } = useContract(address, ERC20_ABI);
    const { data: tokenBalanceData } = useContractRead(erc20Contract, 'balanceOf', [splitterAddress]);
    console.log('Token balance data: %s: %s', address, tokenBalanceData);

    const { data: tokenSymbolData } = useContractRead(erc20Contract, 'symbol');

    if (tokenBalanceData && tokenSymbolData && !erc20Balances[address]) {
      setErc20Balances((prevBalances) => ({
        ...prevBalances,
        [address]: ethers.utils.formatUnits(tokenBalanceData, 18), // Assuming 18 decimals
      }));
      setErc20Symbols((prevSymbols) => ({
        ...prevSymbols,
        [address]: tokenSymbolData,
      }));
    }
  });

  const { mutate: splitEth, isLoading } = useContractWrite(contract, 'split');
  // Function to execute contract's `split` function
  const handleSplitEth = async () => {
    if (!isLoading){
        const tx = await splitEth({});
        console.log('Transaction to split ETH:', tx);
    } 
  };

  // Function to execute contract's `splitToken` function
  const handleSplitToken = async (tokenAddress) => {

    const { writeAsync: splitToken } = useContractWrite(contract, 'splitToken');
    const tx = await splitToken(tokenAddress);
    console.log(`Transaction to split token at address ${tokenAddress}:`, tx);
  };

  return (
    <Container size="md">
    <SimpleGrid cols={1}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" weight={500}>Splitter Address: {splitterAddress}</Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" weight={500}>Parties</Text>
            {isPartyLoading ? (
              <Skeleton height={8} width="50%" />
            ) : (
              partyData.map((party, idx) => (
                <Group key={idx} position="apart" style={{ marginBottom: 10, alignItems: 'center' }}>
                  <Text>{party}</Text>
                  <Text>Share: {sharesData[idx].toString()}</Text>
                </Group>
              ))
            )}
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
            {isEthBalanceLoading ? (
              <Skeleton height={8} width="50%" />
            ) : (
             <Text>Ethereum Balance: {ethBalance} ETH</Text>
            )}
          <Button onClick={handleSplitEth}>Split ETH</Button>
        </Card>

        <Space h="md" />
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="lg" weight={500}>ERC20 Balances</Text>
        {Object.entries(erc20Balances).map(([address, balance]) => (
          <Text key={address}>{erc20Symbols[address]} Balance: {balance}</Text>
        ))}
        <Space h="md" />
        <Group position="center">

          {Object.keys(erc20Balances).map((address) => (
            <Button key={address} onClick={() => handleSplitToken(address)}>
              Split {erc20Symbols[address]}
            </Button>
          ))}
        </Group>
      </Card>
    </SimpleGrid>
    </Container>
  );
};

export default SplitterDetailComponent;
