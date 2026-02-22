import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { TopNav, BottomNav } from "@/components/dashboard/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Factor Lens — Indian Equity Dashboard",
  description: "Factor scores for all listed Indian stocks",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <TopNav />
        <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 pb-24 md:pb-6">
          {children}
        </main>
        <BottomNav />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
