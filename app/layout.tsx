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
  description:
    "Aydın Soğutma - Modern, verimli ve teknolojik soğutma sistemleri. Çok yakında hizmetinizdeyiz.",
  openGraph: {
    title: "Aydın Soğutma | Yenilikçi Soğutma Çözümleri",
    description:
      "Aydın Soğutma - Modern, verimli ve teknolojik soğutma sistemleri. Çok yakında hizmetinizdeyiz.",
    url: "https://aydinsogutma.com",
    siteName: "Aydın Soğutma",
    images: [
      {
        url: "https://aydinsogutma.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Aydın Soğutma Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydın Soğutma | Yenilikçi Soğutma Çözümleri",
    description:
      "Aydın Soğutma - Modern, verimli ve teknolojik soğutma sistemleri. Çok yakında hizmetinizdeyiz.",
    creator: "@AydinSogutma",
    images: ["https://aydinsogutma.com/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased overflow-x-hidden`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
