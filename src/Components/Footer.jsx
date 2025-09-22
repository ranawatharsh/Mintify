import React from 'react';

const Footer = () => {
  const blockchainName = "Solana"; 

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto glass-card p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">

        <div className="flex flex-col items-center mb-6">
          <img
            src="/Mintify.png"
            alt="Mintify Logo"
            className="h-10 md:h-12 w-auto mb-2"
          />
          <p className="text-lg text-gray-600">Simplify digital asset creation.</p>
        </div>

        <hr className="w-full max-w-md border-t border-gray-300 opacity-30 my-6" />

        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Mintify. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <p>Powered by</p>
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/01/solana_logo-freelogovectors.net_.png"
              alt={`${blockchainName} Logo`}
              className="h-5 w-auto"
            />
           
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;