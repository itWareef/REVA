import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivacontractingsa.com"),
  title: "مسكن ريفا للمقاولات | Maskan Riva Contracting",
  description:
    "شركة مسكن ريفا للمقاولات — نبني أكثر من مجرد مشاريع، نبني المستقبل. خدمات إنشائية متكاملة في الرياض.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
