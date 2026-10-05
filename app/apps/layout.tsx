import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apper — BERGE",
  description: "Apper designet og utviklet av Berge Media ENK.",
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
