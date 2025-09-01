import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeInitializer from '../components/theme/ThemeInitializer';
import NavBar from '../components/NavBar/navbar';
import Providers from '../store/Provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niranthar Seva Foundation",
  description: "We are with you, Why can't you join us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Providers >
        <ThemeInitializer/>
        <NavBar/>
        <div className="mt-52">
        {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
