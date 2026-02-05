import React from 'react';

const DMCA: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">DMCA / Copyright</h1>

        <div className="prose prose-invert max-w-none text-gray-400">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Copyright Policy</h2>
          <p className="mb-4">
            AuraDownloader respects the intellectual property rights of others and expects its users to do the same. It is our policy to respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Content Hosting</h2>
          <p className="mb-4">
            AuraDownloader does not host, archive, or store any media files on its servers. We function strictly as a search engine and fetch tool that resolves publicly available URLs. If you see content downloaded via our tool, the original file is hosted on the source platform (e.g., YouTube, TikTok), not us.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Takedown Requests</h2>
          <p className="mb-4">
            Since we do not host content, we cannot remove media from the internet. To have content removed, you must contact the platform where the content is hosted (e.g., YouTube, Facebook).
          </p>
          <p className="mb-4">
            However, if you wish to block specific URLs from being processed by our tool, please contact us with the specific URLs at:
          </p>
          <p className="font-bold text-white">aryanraut53@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default DMCA;
