// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Context } from "@/components/context";
import { auth } from "@/auth";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reown Store",
  description: "Get products from E-commerce",
};

export default async function RootLayout({children}) {
  const session = (await auth())
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen justify-between antialiased`}
      >
        <Context>
          {children}
        <Footer />
        </Context>
      </body>
    </html>
  );
}


