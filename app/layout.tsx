import type { Metadata } from "next";
import { Outfit, Lexend, DM_Serif_Display, Titan_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const titanOne = Titan_One({
  weight: "400",
  variable: "--font-titan-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalLine Graphics",
  description: "Premium Printing and Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${lexend.variable} ${dmSerif.variable} ${titanOne.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
