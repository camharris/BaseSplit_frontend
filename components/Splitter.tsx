import React, { useState, useEffect } from 'react';
import { useContract, useSigner, useAddress } from '@thirdweb-dev/react';
import { Button, Text } from '@mantine/core';
import { ethers } from 'ethers';
import { ERC20_ADDRESSES } from '../constants/addresses';
import {SPLITTER_ABI} from '../constants/abis';

const SplitterDetailComponent = ({ splitterAddress }) => {
  const [splitterDetails, setSplitterDetails] = useState({});
  const [ethBalance, setEthBalance] = useState('0');
  const [erc20Balances, setErc20Balances] = useState({});
  const signer = useSigner();
  const contract = useContract(splitterAddress, SPLITTER_ABI, signer);

  const address = useAddress();

  useEffect(() => {
    // Fetch Splitter details, ETH balance, and ERC-20 balances
    // ... code to fetch and set the state
  }, [splitterAddress, signer]);

  // Handler to send ETH to splitter
  const handleSendEth = async () => {
    // ... logic to send ETH
  };

  // Handler to send ERC-20 tokens to splitter
  const handleSendErc20 = async (tokenAddress) => {
    // ... logic to send ERC-20 tokens
  };

  return (
    <div>
      <Text>Address: {splitterAddress}</Text>
      <Text>Owner: {splitterDetails.owner}</Text>
      {/* List parties and shares */}
      <Text>Ethereum Balance: {ethBalance}</Text>
      {/* List ERC20 token balances */}
      <Button onClick={handleSendEth}>Send ETH</Button>
      {ERC20_ADDRESSES.map((address) => (
        <Button key={address} onClick={() => handleSendErc20(address)}>
          Send {address}
        </Button>
      ))}
    </div>
  );
};

export default SplitterDetailComponent;
