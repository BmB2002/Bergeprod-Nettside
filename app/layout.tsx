import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BERGE — Bjørn Magnus Berge | Filmskaper & Videograf",
  description:
    "BERGE er arbeidet til filmskaper Bjørn Magnus Berge. Dokumentarer, kortfilmer, kommersielle filmer og bedriftsvideoer — laget med skaperisk blikk.",
  keywords: [
    "Bjørn Magnus Berge",
    "BERGE",
    "videograf",
    "filmskaper",
    "dokumentar",
    "kortfilm",
    "kommersiell",
    "bedriftsvideo",
  ],
  openGraph: {
    title: "BERGE — Bjørn Magnus Berge",
    description:
      "Dokumentarer, kortfilmer, kommersielle filmer og bedriftsvideoer — laget med skaperisk blikk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
