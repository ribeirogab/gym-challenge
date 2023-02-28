import { ReactNode } from 'react';

import { poppins } from '@/assets/fonts/poppins';
// import { Header } from '@/components/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Gym Challenge',
  description: 'tmp',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {/* <Header className="absolute" /> */}
        {children}
      </body>
    </html>
  );
}
