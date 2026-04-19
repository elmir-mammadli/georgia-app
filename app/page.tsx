import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/api";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { getStrapiMedia } from "@/lib/utils";
import HomeStaticPage from "@/app/home-static/page";

const FALLBACK_SEO = {
  metaTitle: "Georgia | Soft-Skills Training",
  metaDescription:
    "Affordable soft-skills training for high-pressure work environments.",
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");
  const seo = page?.seo ?? FALLBACK_SEO;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      ...(page?.seo?.ogImage && {
        images: [{ url: getStrapiMedia(page.seo.ogImage.url) }],
      }),
    },
    ...(page?.seo?.canonicalUrl && {
      alternates: { canonical: page.seo.canonicalUrl },
    }),
  };
}

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    return <HomeStaticPage />;
  }

  return <DynamicRenderer sections={page.sections} />;
}
