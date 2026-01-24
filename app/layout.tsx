import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import { inter } from "@/components/lib/fonts";

export const metadata = {
  title: "Adrian Clavel",
  description: "QA, Automation, and DevOps-focused portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
