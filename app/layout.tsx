import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import leyePic from "../public/images/opengraph-image.png";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leye the Developer",
  description: "Leye the Developer Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
