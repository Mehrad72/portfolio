import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'John Smith',
    template: '%s | John Smith'
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
            <nav className="flex max-w-[60ch] mx-auto w-full justify-end">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
              >
                home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
              >
                projects
              </Link>
            </nav>
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
function Header() {
  const links = [
    { name: 'youtube', url: 'https://www.youtube.com/@johnsmith' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/johnsmith' },
    { name: 'github', url: 'https://github.com/mehrad72' },
  ];
  return (
    <header className="max-w-[60ch] mx-auto w-full">
      <div className="flex flex-col space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
function Footer() {
  const links = [
    { name: 'youtube', url: 'https://www.youtube.com/@johnsmith' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/johnsmith' },
    { name: 'github', url: 'https://github.com/mehrad72' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
