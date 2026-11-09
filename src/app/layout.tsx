import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINIS | Independent Music Producer",
  description:
    "Explore the music, original productions, and collaborations of FINIS. Sound without limits. Originality without boundaries.",
  openGraph: {
    title: "FINIS | Independent Music Producer",
    description: "Explore the music, original productions, and collaborations of FINIS.",
    images: ["/finis-hero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINIS | Independent Music Producer",
    description: "Sound without limits. Originality without boundaries.",
    images: ["/finis-hero.png"],
  },};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
