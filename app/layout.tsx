import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.year} ${SITE.name} | SSDI & SSI`,
  description: SITE.description,
  keywords: [
    "SSDI calculator 2026",
    "SSI calculator 2026",
    "disability benefits calculator",
    "social security disability calculator",
    "back pay calculator",
    "SSDI back pay",
    "SSI benefits",
    "2026 COLA increase",
    "disability benefits 2026",
  ],
  verification: {
    google: "qlPMVO_Hb-be3_hFHNT9SBbsHO-b_wCOfWfLmTb4EQc",
  },
  openGraph: {
    title: `${SITE.year} Disability Benefits Calculator | SSDI & SSI`,
    description: "Calculate your 2026 SSDI and SSI benefits with 2.8% COLA. Free Back Pay estimation included.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
