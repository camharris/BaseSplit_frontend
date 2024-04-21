// pages/splitter/[splitterAddress].tsx
import { NextPage } from "next";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import SplitterDetailComponent from '../../components/Splitter';
import Navbar from "../../components/Navbar";

const SplitterPage: React.FC = () => {
  const router = useRouter();
  const { splitterAddress } = router.query;

  return (
    <div>
      {splitterAddress && typeof splitterAddress === 'string' ? (
        <SplitterDetailComponent splitterAddress={splitterAddress} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SplitterPage;
