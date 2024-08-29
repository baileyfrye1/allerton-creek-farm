import type { Metadata } from 'next';
import { Source_Code_Pro, Abel } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abel',
});
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourceCodePro',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.allertoncreekfarm.com'),
  title: {
    default: 'Home | Allerton Creek Farm',
    template: '%s | Allerton Creek Farm',
  },
  description:
    'Allerton Creek Farm is a family owned, small craft farm located in Hunterdon County, New Jersey.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${abel.variable} ${sourceCodePro.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <ToastContainer position='top-right' />
        <Footer />
      </body>
    </html>
  );
}
