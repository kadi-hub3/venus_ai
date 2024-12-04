import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Venus AI",
  description: "Your personal assistant at your disposal anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className='antialiased'
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
