import './App.css'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad } from './Components/TokenLaunchpad';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>

            <div className="relative top-0 left-0 right-0 flex justify-between items-center p-4">
              
              <WalletMultiButton />
              
              <div class="flex items-center ">
                <img src="/Mintify.png" alt="Mintify Logo" class="h-12 md:h-20 lg:h-16 w-auto"></img>
              </div>
              <WalletDisconnectButton />
            </div>

            <TokenLaunchpad ></TokenLaunchpad>
            <HowItWorks></HowItWorks>
            <div className="relative z-0"><Footer/></div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      

    </>
  )
}

export default App
