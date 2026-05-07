import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Braeside International School | ICSE School in Ooty",
    template: "%s | Braeside International School",
  },
  description:
    "Braeside International School — ICSE-affiliated school in Ooty offering world-class education with state-of-the-art facilities, sports academies, and holistic development since 2008. Motto: I CAN I WILL.",
  keywords: [
    "Braeside International School",
    "BSIS Ooty",
    "ICSE school Ooty",
    "best school Ooty",
    "international school Ooty",
    "CBSE ICSE Ooty",
    "Braeside School admissions",
  ],
  openGraph: {
    title: "Braeside International School",
    description: "Premier ICSE-affiliated school in Ooty — shaping tomorrow's leaders since 2008.",
    images: [{ url: "/images/campus-aerial.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
