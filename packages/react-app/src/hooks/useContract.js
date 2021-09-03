import { Contract } from 'ethers';
import log from 'loglevel';
import { useMemo } from 'react';
import { ADDRESS_ZERO } from '../constants';
import questFactoryAbi from '../contracts/QuestFactory.abi';
import questFactoryAddress from '../contracts/QuestFactory.address';
import { useWallet } from '../providers/Wallet';

// account is not optional
export function getSigner(ethersProvider, account) {
  ethersProvider.getSigner(account);
  return ethersProvider.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(ethersProvider, account) {
  return account ? getSigner(ethersProvider, account) : ethersProvider;
}

// account is optional
export function getContract(address, ABI, ethersProvider, account) {
  if (!address || address === ADDRESS_ZERO) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(ethersProvider, account));
}

// account is optional
// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { account, ethers } = useWallet();

  return useMemo(() => {
    if (!address || !ABI || !ethers) return null;
    try {
      return getContract(
        address,
        ABI,
        ethers,
        withSignerIfPossible && account ? account : undefined,
      );
    } catch (error) {
      log.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, ethers, withSignerIfPossible, account]);
}

export function useFactoryContract() {
  return useContract(questFactoryAddress, questFactoryAbi);
}
