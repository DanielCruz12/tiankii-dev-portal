import Link from 'next/link';
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-200 text-4xl mb-6 max-w-xl">
          Welcome to the Tiankii Developer Portal
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-6 justify-center items-center">
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-xl font-semibold mb-2 text-white">🔗 Bitcoin & LN Integration</h2>
          <p>
            Leverage the power of the Bitcoin Lightning Network for instant, low-cost transactions globally.
          </p>
        </div>
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-xl font-semibold mb-2 text-white">🛠️ Tiankii Products</h2>
          <p>
            Use tools like the <strong>Merchant Dashboard</strong>, <strong>Broadcast Sats</strong>, and <strong>Command Center</strong> to streamline Bitcoin payments.
          </p>
        </div>
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-xl font-semibold mb-2 text-white">🚀 For Developers</h2>
          <p>
            Simple APIs, SDKs, and guides to help you implement Bitcoin payments on platforms like <strong>Shopify</strong> and custom applications.
          </p>
        </div>
      </div>

      <Link
        href="/docs"
        className="text-blue-500 text-lg font-semibold underline pb-3 hover:text-blue-400"
      >
        Get Started with the Docs
      </Link>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Community</h2>{' '}
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-gray-700 px-2 py-1 rounded">
            stars <span className="text-blue-400">1.5K</span>
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded">
            merchants <span className="text-green-400">10K+</span>
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded">
            license <span className="text-blue-400">MIT</span>
          </span>
        </div>
      </div>
      <div className="flex">
      <p className="">
       Follow{' '}
          <Link target='_blank' href="https://x.com/tiankii_Tech" className="text-blue-400 hover:underline">
            @TiankiiApp
          </Link>{' '}
          on Twitter for the latest updates and news.
        </p>
      </div>
    </main>
  );
}
