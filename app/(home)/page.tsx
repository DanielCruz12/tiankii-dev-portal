import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 ">
      {/* Tiankii Banner */}
   

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Welcome to the Tiankii Developer Portal
        </h1>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl">
          Explore our documentation and tools to integrate Bitcoin payments with Lightning Network seamlessly.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="flex flex-col md:flex-row  mb-8 justify-center items-center">
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-2xl font-semibold mb-2 text-white">🔗 Bitcoin & LN Integration</h2>
          <p>
            Leverage the power of the Bitcoin Lightning Network for instant, low-cost transactions globally.
          </p>
        </div>
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-2xl font-semibold mb-2 text-white">🛠️ Tiankii Products</h2>
          <p>
            Use tools like the <strong>Merchant Dashboard</strong>, <strong>Broadcast Sats</strong>, and <strong>Command Center</strong> to streamline Bitcoin payments.
          </p>
        </div>
        <div className="text-center max-w-sm text-gray-300">
          <h2 className="text-2xl font-semibold mb-2 text-white">🚀 For Developers</h2>
          <p>
            Simple APIs, SDKs, and guides to help you implement Bitcoin payments on platforms like <strong>Shopify</strong> and custom applications.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <Link
        href="/docs"
        className="text-blue-500 text-lg font-semibold underline pb-3 hover:text-blue-400"
      >
        Get Started with the Docs
      </Link>

      <div className="w-full max-w-4xl mb-6 flex justify-center">
       {/*  <Image 
          src={Banner}
          alt="Tiankii Developer Portal" 
          width={1200} 
          height={600}
          layout="responsive"
          priority
        /> */}
      </div>
    </main>
  );
}
