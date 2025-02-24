import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97] // Supported networks (Mainnet, Ropsten, Rinkeby, etc.)
});

export const getErrorMessage = (error) => {
  if (error?.code === 4001) {
    return 'Please authorize this website to access your Ethereum account.';
  } else if (error?.code === -32002) {
    return 'Please unlock your wallet.';
  } else if (!window.ethereum) {
    return 'No crypto wallet found. Please install MetaMask.';
  }
  return 'An unknown error occurred.';
}; 