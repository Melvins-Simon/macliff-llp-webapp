import { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import LangingPageLayout from "@/components/landing/layout";
import { Footer } from "@/components/landing";
import { getService, services } from "@/lib/services-data";
import ServiceDetail from "@/components/services/detail";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${slug}`,
    image: `https://macliffllp.co.ke${service.img}`,
    keywords: [
      service.title,
      `${service.title} Kenya`,
      `${service.title} Nairobi`,
      "Macliff LLP",
      "CPA firm Kenya",
      "accounting services Kenya",
    ],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <LangingPageLayout>
      <main className="w-full bg-background">
        <ServiceDetail slug={slug} />
      </main>
      <Footer />
    </LangingPageLayout>
  );
}
