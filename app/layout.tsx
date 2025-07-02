import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EOz - Your Smart Home Solution",
  description: "Smart home automation products in Australia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
