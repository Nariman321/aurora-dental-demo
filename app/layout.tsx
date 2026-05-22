import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://aurora-dental.kz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aurora Dental — Стоматология премиум-класса в Алматы",
    template: "%s · Aurora Dental",
  },
  description:
    "Aurora Dental — современная стоматология в Алматы. Имплантация, виниры, эстетика, ортодонтия Invisalign, детская стоматология. Цифровая диагностика 3D, безболезненное лечение, рассрочка 0%.",
  keywords: [
    "стоматология Алматы",
    "имплантация зубов Алматы",
    "виниры Алматы",
    "Invisalign Алматы",
    "детская стоматология",
    "отбеливание зубов",
    "ортодонт Алматы",
    "стоматолог Алматы",
    "Aurora Dental",
  ],
  authors: [{ name: "Aurora Dental Almaty" }],
  creator: "Aurora Dental",
  publisher: "Aurora Dental",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: SITE_URL,
    siteName: "Aurora Dental",
    title: "Aurora Dental — Стоматология премиум-класса в Алматы",
    description:
      "Цифровая стоматология в Алматы: имплантация, виниры, Invisalign, детская стоматология. Гарантия 5 лет, рассрочка 0%.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Dental — Стоматология в Алматы",
    description:
      "Цифровая стоматология в Алматы. Имплантация, виниры, Invisalign. Рассрочка 0%.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
  robots: { index: true, follow: true },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1726" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={manrope.variable}
    >
      <body className="bg-bg text-ink min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
