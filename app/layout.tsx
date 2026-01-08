import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Aydın Soğutma | Yenilikçi Soğutma Çözümleri",
  description: "Aydın Soğutma - Modern, verimli ve teknolojik soğutma sistemleri. Çok yakında hizmetinizdeyiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased overflow-x-hidden`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
