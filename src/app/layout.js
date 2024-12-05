import './globals.css';
import { config } from '@/lib/config';
import { Inter } from 'next/font/google';

import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const font = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: {
    default: config.nama,
    template: `${config.nama} | %s`
  },
  author: 'FTI UNISKA',
  description:
    'Aplikasi Pemilihan Ketua Umum HMP dan Pemilihan Gubernur BEM FTI UNISKA',
  icons: {
    icon: '/logo-kpu-fti.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
