import { Navbar } from "@/components";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Hem Bahadur Pun",
  description: "Front-end engineer based in Nepal",
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
