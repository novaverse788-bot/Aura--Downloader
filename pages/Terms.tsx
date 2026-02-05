import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using AuraDownloader, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            AuraDownloader is a tool designed to help users fetch and download media from publicly available URLs. We do not host, store, or distribute any copyrighted material on our servers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">
            You agree to use this service only for lawful purposes. You are solely responsible for ensuring that you have the necessary rights to download and use the content you fetch using our tool. You must not use this service to infringe upon copyrights or download illegal content.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Disclaimer of Warranties</h2>
          <p className="mb-4">
            The service is provided on an "as is" and "as available" basis. AuraDownloader makes no representations or warranties of any kind, express or implied, as to the operation of the service or the information, content, or materials included.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
