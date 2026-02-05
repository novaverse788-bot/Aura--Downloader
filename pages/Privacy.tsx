import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information Collection</h2>
          <p className="mb-4">
            We prioritize your privacy. AuraDownloader does not require user registration. We do not collect personal information such as names, email addresses, or phone numbers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Log Data</h2>
          <p className="mb-4">
            We do not store logs of the videos or media you download. We may collect anonymous usage statistics (such as browser type, time of visit) to improve the performance of our website, but this data is not linked to your IP address or download history.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cookies</h2>
          <p className="mb-4">
            We use essential cookies solely for the purpose of maintaining website functionality. We do not use tracking cookies for advertising purposes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h2>
          <p className="mb-4">
            Our service acts as an intermediary to fetch data from third-party platforms (like YouTube, TikTok, etc.). Please review the privacy policies of these respective platforms, as we do not control their data practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
