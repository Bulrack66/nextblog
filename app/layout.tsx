import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DarkModeProvider from "@/providers/DarkModeProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import NextAuthProvider from "../providers/NextAuth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrigoBlog",
  description: "Le site du Frigoriste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextAuthProvider>
          <DarkModeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <div className="flex min-h-screen flex-col justify-between">
              <Header />
              <div className="grow">{children}</div>
              <Footer />
            </div>
          </DarkModeProvider>
        </NextAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
