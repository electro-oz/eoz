import '../styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'EOz',
  description: 'Your Smart Home Solution',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}