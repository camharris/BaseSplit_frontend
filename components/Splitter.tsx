import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { Button, Text, Card, Group, Box, Space } from '@mantine/core';
import { ERC20_ADDRESSES } from '../constants/addresses';
import { SPLITTER_ABI } from '../constants/abis';

const SplitterDetailComponent = ({ splitterAddress }) => {
  const [ethBalance, setEthBalance] = useState('');
  const [erc20Balances, setErc20Balances] = useState({});
  const contract = useContract(splitterAddress, SPLITTER_ABI);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!contract) return;

      // Fetch Ethereum balance
      const balance = await contract.provider.getBalance(splitterAddress);
      setEthBalance(ethers.utils.formatEther(balance));

      // Fetch ERC20 token balances
      const balances = {};
      for (const address of ERC20_ADDRESSES) {
        const tokenContract = new ethers.Contract(
          address,
          ['function balanceOf(address owner) view returns (uint256)', 'function symbol() view returns (string)'],
          contract.provider
        );
        const balance = await tokenContract.balanceOf(splitterAddress);
        const symbol = await tokenContract.symbol();
        balances[symbol] = ethers.utils.formatEther(balance);
      }
      setErc20Balances(balances);
    };

    fetchBalances();
  }, [contract, splitterAddress]);

  // This is a placeholder, replace with actual contract method call
  const handleSplitEth = async () => {
    // Perform the split by sending transaction
  };

  // This is a placeholder, replace with actual contract method call
  const handleSplitToken = async (tokenAddress) => {
    // Perform the token split by sending transaction
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text size="lg" weight={500}>Splitter Address: {splitterAddress}</Text>
        <Text size="lg" weight={500}>Ethereum Balance: {ethBalance} ETH</Text>
        <Space h="md" />
        {Object.entries(erc20Balances).map(([token, balance]) => (
          <Text key={token}>{token} Balance: {balance}</Text>
        ))}
        <Space h="md" />
        <Group position="center">
          <Button onClick={handleSplitEth}>Split ETH</Button>
          {ERC20_ADDRESSES.map((tokenAddress) => (
            <Button key={tokenAddress} onClick={() => handleSplitToken(tokenAddress)}>
              Split ERC20
            </Button>
          ))}
        </Group>
      </Card>
    </Box>
  );
};

export default SplitterDetailComponent;
