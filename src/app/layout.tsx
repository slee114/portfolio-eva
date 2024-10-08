import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const GeneralSans = localFont({
  src: "../../public/GeneralSans-Regular.woff2",
  weight: "300",
  style: "",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={GeneralSans.className}>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
