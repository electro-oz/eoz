
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'EOz',
  description: 'Your Smart Home Solution',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
