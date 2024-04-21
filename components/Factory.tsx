import React, { useEffect } from 'react';
import { useContract, useAddress, useContractRead } from '@thirdweb-dev/react';
import { Card, Text, SimpleGrid, Button, Group, Box, Skeleton } from '@mantine/core';
import { FACTORY_ADDRESS } from '../constants/addresses';

const FactoryComponent = () => {
  const address = useAddress();
  const { contract } = useContract(FACTORY_ADDRESS);
  
  // Using the useContractRead hook for owner splitters
  const { data: ownerSplitterData, isLoading: isOwnerLoading, error: ownerError } = useContractRead(
    contract,
    "getSplittersByOwner",
    [address]
  );

  // Using the useContractRead hook for party splitters
  const { data: partySplitterData, isLoading: isPartyLoading, error: partyError } = useContractRead(
    contract,
    "getSplittersByParty",
    [address]
  );

  useEffect(() => {
    console.log('Fetching splitters for address:', address);
    if (ownerSplitterData) {
      console.log('Owner Splitters Data:', ownerSplitterData);
    }
    if (partySplitterData) {
      console.log('Party Splitters Data:', partySplitterData);
    }
    if (ownerError) {
      console.error('Error fetching owner splitters:', ownerError);
    }
    if (partyError) {
      console.error('Error fetching party splitters:', partyError);
    }

    const intervalId = setInterval(() => {
      // Re-fetch data every 5 minutes
      console.log('Refreshing data for address:', address);
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(intervalId);
  }, [contract, address, ownerSplitterData, partySplitterData, ownerError, partyError]);


  const renderStatusBox = (isActive) => (
    <Box
      style={{
        backgroundColor: isActive ? 'green' : 'red',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '4px',
      }}
    >
      {isActive ? 'Active' : 'Inactive'}
    </Box>
  );

  return (
    <div>
      <Text size="lg" weight={500} style={{ marginBottom: 20 }}>Splitters Data</Text>
      <SimpleGrid cols={1}>
        <Card shadow="sm" padding="lg">
          <Text size="md" weight={500}>Owner Splitters</Text>
          {isOwnerLoading ? (
            <Skeleton height={32} radius="xl" />
          ) : ownerSplitterData && ownerSplitterData.length > 0 ? (
            ownerSplitterData.map((splitter, idx) => (
              <Group key={idx} position="apart" style={{ marginBottom: 10, alignItems: 'center' }}>
                <Button onClick={() => console.log(`Opening splitter ${splitter.splitterAddress}`)}>
                  {splitter.splitterAddress}
                </Button>
                <Text>Parties: {splitter.parties.length}</Text>
                {renderStatusBox(splitter.isActive)}
              </Group>
            ))
          ) : (
            <Text>No splitters found</Text>
          )}
        </Card>
        {/* ...repeat for partySplittersData */}
        <Card shadow="sm" padding="lg">
          <Text size="md" weight={500}>Party Splitters</Text>
          {isPartyLoading ? (
            <Skeleton height={32} radius="xl" />
          ) : partySplitterData && partySplitterData.length > 0 ? (
            partySplitterData.map((splitter, idx) => (
              <Group key={idx} position="apart" style={{ marginBottom: 10, alignItems: 'center' }}>
                <Button onClick={() => console.log(`Opening splitter ${splitter.splitterAddress}`)}>
                  {splitter.splitterAddress}
                </Button>
                <Text>Parties: {splitter.parties.length}</Text>
                {renderStatusBox(splitter.isActive)}
              </Group>
            ))
          ) : (
            <Text>No splitters found</Text>
          )}
        </Card>
      </SimpleGrid>
    </div>
  );
};


export default FactoryComponent;
