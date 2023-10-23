import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to smartGPT',
  description: 'This app can read pdf and answer questions about it',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          'grainy min-h-screen font-sans antialiased',
          inter.className,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
