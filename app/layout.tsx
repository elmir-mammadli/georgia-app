import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.georgia-app.com"),
  title: {
    default: "AI role-play platform | Georgia",
    template: "%s | Georgia",
  },
  description:
    "Georgia is an AI role-play platform that makes soft-skills training affordable, safe, and easy to deploy with self-paced, 100% personalized practice for each user.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
