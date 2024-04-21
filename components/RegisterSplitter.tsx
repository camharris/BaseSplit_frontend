import React, { useState } from 'react';
import { useContractWrite, useAddress, useContract } from '@thirdweb-dev/react';
import { TextInput, Button, Group, Box, ActionIcon } from '@mantine/core';
import { FACTORY_ADDRESS } from 'constants/addresses';
import { Trash } from 'tabler-icons-react';

const RegisterSplitter = () => {
    const address = useAddress();
    const { contract } = useContract(FACTORY_ADDRESS);
    const [showForm, setShowForm] = useState(false);
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

  const handleRemoveParty = (index) => {
    const newParties = parties.filter((_, i) => i !== index);
    setParties(newParties);
  };

  const handleRegister = () => {
    if (!isLoading) {
      const totalShares = parties.reduce((total, party) => total + (party.share ? parseFloat(party.share) : 0), 0);
      if (totalShares === 100 && parties.every(party => party.address)) {
        const addresses = parties.map(p => p.address);
        const shares = parties.map(p => parseFloat(p.share));
        registerSplitter({ args: [owner, addresses, shares] });
      } else {
        alert('Please fill in all addresses and ensure total shares add up to 100%.');
      }
    }
  };

  const toggleForm = () => setShowForm(!showForm);

    return (
    <div>
      <Button onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Register New Splitter'}
      </Button>

      {showForm && (
        <>
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
              <ActionIcon color="red" onClick={() => handleRemoveParty(index)}>
                <Trash size={16} />
              </ActionIcon>
            </Group>
          ))}
          
          <Button onClick={handleAddParty}>Add Party</Button>
          <Box mt="md">
            <Button onClick={handleRegister} disabled={isLoading}>
              Send Transaction
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default RegisterSplitter;