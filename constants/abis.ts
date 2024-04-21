

export const SPLITTER_ABI = [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_parties",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "_shares",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "_factory",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "calculateFee",
      "inputs": [
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBalance",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getFactory",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getFee",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOwner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getParties",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getShares",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTokenBalance",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerWithdraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "parties",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "shares",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "split",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "splitToken",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawToken",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ];

export const FACTORY_ABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "deactivateSplitter",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fee",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllSplitters",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct BaseSplitFactory.Splitter[]",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "parties",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "shares",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          {
            "name": "splitterAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "isActive",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFee",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSplitterByAddress",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct BaseSplitFactory.Splitter",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "parties",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "shares",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          {
            "name": "splitterAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "isActive",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSplitterCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSplittersByOwner",
    "inputs": [
      {
        "name": "splitterOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct BaseSplitFactory.Splitter[]",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "parties",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "shares",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          {
            "name": "splitterAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "isActive",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSplittersByParty",
    "inputs": [
      {
        "name": "party",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct BaseSplitFactory.Splitter[]",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "parties",
            "type": "address[]",
            "internalType": "address[]"
          },
          {
            "name": "shares",
            "type": "uint256[]",
            "internalType": "uint256[]"
          },
          {
            "name": "splitterAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "isActive",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isSplitterActive",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "reactivateSplitter",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerSplitter",
    "inputs": [
      {
        "name": "splitterOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "parties",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "shares",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setFee",
    "inputs": [
      {
        "name": "_feeInBasisPoints",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "splitters",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "splitterAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isActive",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "SplitterDeactivated",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SplitterReactivated",
    "inputs": [
      {
        "name": "splitterAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
]
  