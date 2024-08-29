import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { GlobalStyleProviders } from "./providers/GlobalStyleProviders";
import ContextProvider from "./providers/ContextProvider";

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
      <body className={inter.className}>
        <ContextProvider>
        <GlobalStyleProviders>
          
        
          <Sidebar/>
          {children}
          </GlobalStyleProviders>
        </ContextProvider>
        
        </body>
    </html>
  );
}
