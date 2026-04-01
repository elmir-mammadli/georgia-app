import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/api";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { getStrapiMedia } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");

  if (!page?.seo) {
    return {};
  }

  return {
    title: page.seo.metaTitle,
    description: page.seo.metaDescription,
    openGraph: {
      title: page.seo.metaTitle,
      description: page.seo.metaDescription,
      ...(page.seo.ogImage && {
        images: [{ url: getStrapiMedia(page.seo.ogImage.url) }],
      }),
    },
    ...(page.seo.canonicalUrl && {
      alternates: { canonical: page.seo.canonicalUrl },
    }),
  };
}

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">
            Page Not Found
          </h1>
          <p className="mt-2 text-text-secondary">
            Connect Strapi CMS and create a page with slug &quot;home&quot; to
            see your content here.
          </p>
        </div>
      </div>
    );
  }

  return <DynamicRenderer sections={page.sections} />;
}
