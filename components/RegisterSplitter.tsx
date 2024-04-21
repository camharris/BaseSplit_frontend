import React, { useState } from 'react';
import { useContractWrite, useAddress, useContract } from '@thirdweb-dev/react';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { FACTORY_ADDRESS } from 'constants/addresses';



const RegisterSplitter = () => {
  const address = useAddress();
  const { contract } = useContract(FACTORY_ADDRESS);
  const [owner, setOwner] = useState('');
  const [parties, setParties] = useState([{ address: '', share: '' }]);
  const { mutate: registerSplitter, isLoading } = useContractWrite(contract, "registerSplitter");

  const handlePartyChange = (index, field, value) => {
    const newParties = [...parties];
    newParties[index][field] = value;
    setParties(newParties);
  };

  const handleAddParty = () => {
    setParties([...parties, { address: '', share: '' }]);
  };

  const handleRegister = () => {
    if (!isLoading) {
      const totalShares = parties.reduce((total, party) => total + parseFloat(party.share || 0), 0);
      if (totalShares === 100) {
        const addresses = parties.map(p => p.address);
        const shares = parties.map(p => parseFloat(p.share));
        registerSplitter({ args: [owner, addresses, shares] });
      } else {
        alert('Total shares must add up to 100%.');
      }
    }
  };

  return (
    <div>
      <TextInput
        label="Owner Address"
        placeholder="Enter the owner's address"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />

      {parties.map((party, index) => (
        <Group key={index} align="end">
          <TextInput
            label="Party Address"
            placeholder="Enter party's address"
            value={party.address}
            onChange={(e) => handlePartyChange(index, 'address', e.target.value)}
          />
          <TextInput
            label="Party Share"
            placeholder="Enter party's share (%)"
            value={party.share}
            onChange={(e) => handlePartyChange(index, 'share', e.target.value)}
          />
          {index === parties.length - 1 && (
            <Button onClick={handleAddParty}>+</Button>
          )}
        </Group>
      ))}

      <Box mt="md">
        <Button onClick={handleRegister} disabled={isLoading}>
          Register Splitter
        </Button>
      </Box>
    </div>
  );
};

export default RegisterSplitter;
