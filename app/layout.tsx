import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme_provider from "@/providers/theme_provider";
import { buildMetadata, SITE_NAME } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description:
    "Macliff LLP is a Certified Public Accounting firm and leading provider of Audit & Assurance, Tax, Advisory and Consulting services in Kenya. Trusted partners with over 30 years of combined experience.",
  path: "/",
  image: "https://macliffllp.co.ke/imgs/og-default.webp",
  keywords: [
    "audit Kenya",
    "tax services Kenya",
    "advisory services Kenya",
    "CPA firm Kenya",
    "accounting firm Nairobi",
    "payroll outsourcing Kenya",
    "business consulting Kenya",
    "Macliff LLP",
    "financial solutions Kenya",
    "bookkeeping Kenya",
    "ICPAK certified accountants",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col p-px overflow-x-hidden spinning-border">
        <Theme_provider>
          <div className="flex-1 flex flex-col overflow-x-hidden">
            {children}
          </div>
        </Theme_provider>
      </body>
    </html>
  );
}
