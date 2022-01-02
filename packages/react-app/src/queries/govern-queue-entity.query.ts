import gql from 'graphql-tag';

export const GovernQueueEntityQuery = gql`
  query governQueue($ID: String) {
    governQueue(id: $ID) {
      nonce
      config {
        resolver
        rules
        executionDelay
        scheduleDeposit {
          amount
          token
          decimals
          name
          symbol
        }
        challengeDeposit {
          amount
          token
          decimals
          name
          symbol
        }
        maxCalldataSize
      }
    }
  }
`;

export const GovernQueueEntityContainersQuery = gql`
  query governQueue($ID: String) {
    governQueue(id: $ID) {
      id
      containers {
        id
        state
        payload {
          id
          nonce
          proof
          submitter
          executionTime
          executor {
            id
          }
          actions {
            to
            value
            data
          }
          allowFailuresMap
        }
        config {
          id
          executionDelay
          scheduleDeposit {
            id
            token
            amount
            decimals
            name
            symbol
          }
          challengeDeposit {
            id
            token
            amount
            decimals
            name
            symbol
          }
          resolver
          rules
          maxCalldataSize
        }
      }
    }
  }
`;

export const fakeContainerResult = [
  {
    id: '0x7bdc0233fe34aa837a9867d307193bc89e7a97306069f9499d720fd49f74200c',
    payload: {
      id: '0x7bdc0233fe34aa837a9867d307193bc89e7a97306069f9499d720fd49f74200c',
      executionTime: '1640582745',
      actions: [
        {
          to: '0xF8ceF6F14CEa9CD809fDBa3a40A5e7c88796f309',
          value: 0,
          data: '0x99b44ba000000000000000000000000000000000000000000000000000000000000000600000000000000000000000005d9cceb57914ce35daba1eb065d81857a7a393c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
        },
      ],
      proof:
        '0x99b44ba0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000091b0d67d3f47a30fbeeb159e67209ad6cb2ce22e0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
      submitter: '0x5d9cceb57914ce35daba1eb065d81857a7a393c0',
    },
    config: {
      challengeDeposit: {
        amount: '10000000000000000000',
        token: '0x40c714d6c4b326ed1758893f5740b45d339d9be5',
      },
    },
    state: 'Scheduled',
  },
  {
    id: '0xd68da90e6267a181562ba69336499ccbe4e25bb474c868b6c53e603ce2e40cdb',
    payload: {
      id: '0xd68da90e6267a181562ba69336499ccbe4e25bb474c868b6c53e603ce2e40cdb',
      executionTime: '1641188844',
      actions: [
        {
          to: '0xF8ceF6F14CEa9CD809fDBa3a40A5e7c88796f309',
          value: 0,
          data: '0x99b44ba0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000091b0d67d3f47a30fbeeb159e67209ad6cb2ce22e0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
        },
      ],
      proof:
        '0x99b44ba0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000091b0d67d3f47a30fbeeb159e67209ad6cb2ce22e0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
      submitter: '0x91B0d67D3F47A30FBEeB159E67209Ad6cb2cE22E',
    },
    config: {
      challengeDeposit: {
        amount: '10000000000000000000',
        token: '0x40c714d6c4b326ed1758893f5740b45d339d9be5',
      },
    },
    state: 'Scheduled',
  },
  {
    id: '0xd9fdbef5c07529f3cf904ae44b47ec11d5e58d333630d2256c0f488d9408e0f3',
    payload: {
      id: '0xd9fdbef5c07529f3cf904ae44b47ec11d5e58d333630d2256c0f488d9408e0f3',
      executionTime: '1640578411',
      actions: [
        {
          to: '0xF8ceF6F14CEa9CD809fDBa3a40A5e7c88796f309',
          value: 0,
          data: '0x99b44ba00000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f684885742956cb744cec7190ba888b9a9e19e5b0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
        },
      ],
      proof:
        '0x99b44ba0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000091b0d67d3f47a30fbeeb159e67209ad6cb2ce22e0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000002e516d517766434a63436d51626b3236346b376f527a3755627932524b706b34454834746e797941564e664b464642000000000000000000000000000000000000',
      submitter: '0xf684885742956cb744cec7190ba888b9a9e19e5b',
    },
    config: {
      challengeDeposit: {
        amount: '10000000000000000000',
        token: '0x40c714d6c4b326ed1758893f5740b45d339d9be5',
      },
    },
    state: 'Challenged',
  },
];
