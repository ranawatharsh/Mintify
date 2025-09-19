import './App.css'


// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad } from './Components/TokenLaunchpad';

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>

            <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4">
              
              <WalletMultiButton />
              <h1>Mintify</h1>
              <WalletDisconnectButton />
            </div>

            <TokenLaunchpad ></TokenLaunchpad>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      

    </>
  )
}

export default App
