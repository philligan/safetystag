import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safety Stag | Amsterdam 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
