import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "PPLG Gen 48",
  description: "PPLG Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
