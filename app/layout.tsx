import "./globals.css";
import Navbar from "@/components/sections/Navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
