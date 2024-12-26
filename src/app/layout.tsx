import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ApolloClientProvider } from '@/providers/ApolloProvider';
import { MainLayout } from './MainLayout';

const geistSans = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: '100',
});

const geistMono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Medical App',
  description: 'Medical Appointment page developed by GS Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log('render')
  return (
    <html lang='en'>
      <ApolloClientProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <MainLayout children={children} />
        </body>
      </ApolloClientProvider>
    </html>
  );
}
