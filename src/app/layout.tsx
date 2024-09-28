import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo of the Day | Abhin Rustagi",
  description: "A photobook by Abhin Rustagi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
