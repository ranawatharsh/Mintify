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

            <div className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
              
              <WalletMultiButton />
              
              <div className="flex items-center ">
                <img src="/Mintify.png" alt="Mintify Logo" className="h-12 md:h-20 lg:h-16 w-auto"></img>
              </div>
              <WalletDisconnectButton />
            </div>

            <main className="relative z-0 pt-40 sm:pt-36 md:pt-32 lg:pt-28">
              <TokenLaunchpad ></TokenLaunchpad>
              <HowItWorks></HowItWorks>
              <Footer/>
            </main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      

    </>
  )
}

export default App
