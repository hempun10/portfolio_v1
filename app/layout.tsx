import { Navbar } from "@/components";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { META_KEYWORDS } from "@/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hem Bahadur Pun",
  description: "Front-end engineer based in Nepal",
  keywords: META_KEYWORDS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
