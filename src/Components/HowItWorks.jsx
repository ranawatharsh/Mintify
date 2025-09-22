import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent"> 
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-gray-700">How it Works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Mint Your Digital Asset
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Create custom tokens in three simple steps.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      
          <div className="bg-[#ffffff53] p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
           
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-6
                            bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-md">
              1
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Connect Wallet
            </h3>
            <p className="text-gray-600">
              Securely link your Solana wallet to get started. Mintify supports all popular wallets for a seamless experience.
            </p>
          </div>

     
          <div className="bg-[#ffffff53] p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
     
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-6
                            bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-md">
              2
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Customize Token
            </h3>
            <p className="text-gray-600">
              Enter your token's name, symbol, initial supply, and your image url. Define your token's unique identity with ease.
            </p>
          </div>

 
          <div className="bg-[#ffffff53] p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
        
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-6
                            bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-md">
              3
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Mint & Deploy
            </h3>
            <p className="text-gray-600">
              Review your token details, confirm the transaction, and deploy your new custom token directly to the blockchain. It's yours, instantly!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;