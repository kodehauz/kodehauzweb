import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KodeHauz',
  description: 'Experience the Future with KodeHauz solution Planet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-black'>
      <body className={'bg-white mx-auto border'}>
        <div className='relative w-full'>
          <Header />
          <main className='z-50'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
