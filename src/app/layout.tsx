import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/shared/nav-bar";
import { Toaster } from "sonner";
import SessionProvider from "@/components/shared/session-provider";

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
    <html lang="en">
      <SessionProvider>
        <body className={cn("relative", inter.className)}>
          <NavBar />
          {children}
          <Toaster richColors />
        </body>
      </SessionProvider>
    </html>
  );
}
