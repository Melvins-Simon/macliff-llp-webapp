export const BASE_URL = "https://macliffllp.co.ke";
export const SITE_NAME = "Macliff LLP";
export const DEFAULT_DESCRIPTION =
  "Macliff LLP is a Certified Public Accounting firm in Kenya offering Audit & Assurance, Tax, Advisory, Payroll and Business Consulting services. Trusted partners with over 30 years of combined experience.";

export const DEFAULT_OG_IMAGE = `${BASE_URL}/imgs/logo.webp`;
export const LOGO = `${BASE_URL}/logo.png`;

export const KEYWORDS = [
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
  "corporate finance Kenya",
  "HR consulting Kenya",
];

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  keywords = KEYWORDS,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "en_KE",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [image],
      creator: "@macliffllp",
      site: "@macliffllp",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large" as const,
        "max-video-preview": -1,
      },
    },
  };
}
