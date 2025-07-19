// app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";

export const metadata = {
  title: "EOZ - Your Smart Home Solution",
  description: "Your smart home, your way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add more meta tags here if needed */}
      </head>
      <body>
        {/* Google Analytics Example */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MH52R9SSZ4`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
