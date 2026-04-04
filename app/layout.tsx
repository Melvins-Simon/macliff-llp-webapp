import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme_provider from "@/providers/theme_provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Macliff LLP | Audit, Tax & Advisory Services in Kenya",
    template: "%s | Macliff LLP",
  },
  description:
    "Macliff LLP is a Certified Public Accounting firm in Kenya offering Audit & Assurance, Tax Services, Advisory, Payroll, and Business Consulting. Trusted partners with over 30 years of experience.",
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
  ],
  authors: [{ name: "Macliff LLP", url: "https://macliffllp.co.ke" }],
  creator: "Macliff LLP",
  metadataBase: new URL("https://macliffllp.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://macliffllp.co.ke",
    siteName: "Macliff LLP",
    title: "Macliff LLP | Audit, Tax & Advisory Services in Kenya",
    description:
      "A Certified Public Accounting firm and leading provider of Audit & Assurance, Tax, Advisory and Consulting services in Kenya. Global mindset, local touch — 30+ years of experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macliff LLP | Audit, Tax & Advisory Services in Kenya",
    description:
      "A Certified Public Accounting firm and leading provider of Audit & Assurance, Tax, Advisory and Consulting services in Kenya.",
    creator: "@macliffllp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

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
