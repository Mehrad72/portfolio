import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import NavigationBar from './components/navigation-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Mehrad Heidari',
    template: '%s | Mehrad Heidari'
  },
  description: 'My portfolio, blog, and personal website.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-6xl mx-auto w-full space-y-6">
            <header className="mx-auto flex w-full max-w-[60ch] items-center justify-between border-b border-gray-200 pb-4 dark:border-zinc-800">
              <nav
                aria-label="Main navigation"
                className="flex items-center gap-1 rounded-full border border-gray-200 p-1 dark:border-zinc-800"
              >
                <Link
                  href="/"
                  className="rounded-full px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  Projects
                </Link>
              </nav>
            </header>
            {children}
          </main>
          <NavigationBar />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

