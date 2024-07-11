import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeniusForge",
  description: "Discover the ultimate AI content generator tool that revolutionizes your content creation process. Our website offers a seamless and powerful platform to generate high-quality, SEO-friendly content in just minutes. Unlock the potential of AI technology to enhance your online presence and boost your search engine rankings effortlessly. Try our AI content generator today and elevate your content strategy to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
