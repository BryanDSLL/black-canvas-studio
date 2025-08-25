import './globals.css';
import type { Metadata } from 'next';
// Remova a importação do Google Fonts
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Black Canvas Studio',
  description: 'Estúdio de tatuagem especializado em fine line, realismo e criações autorais',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-system-ui">{children}</body>
    </html>
  );
}
