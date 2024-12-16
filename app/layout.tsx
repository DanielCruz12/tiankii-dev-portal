import { Banner } from 'fumadocs-ui/components/banner';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="icon" href="/assets/tiankii-logo.png" type="image/png" />
      <body className="flex flex-col min-h-screen">
      <Banner variant="rainbow">
      <p>
          Feel free to join the{' '}
          <Link
            href="https://github.com/DanielCruz12/tiankii-dev-portal/discussions"
            target='_blank'
            className="text-blue-400 hover:underline"
          >
            discussions on GitHub
          </Link>
          !
        </p>
      </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
