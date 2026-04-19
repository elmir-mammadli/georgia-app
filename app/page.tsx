import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/api";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import HomeStaticPage from "@/app/home-static/page";

const HOME_TITLE = "AI role-play platform | Georgia";
const HOME_DESCRIPTION =
  "Georgia is an AI role-play platform that makes soft-skills training affordable, safe, and easy to deploy with self-paced, 100% personalized practice for each user.";
const HOME_URL = "https://www.georgia-app.com/";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    url: HOME_URL,
    type: "website",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  other: {
    "twitter:domain": "georgia-app.com",
    "twitter:url": HOME_URL,
    "og:image": "",
    "twitter:image": "",
  },
};

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    return <HomeStaticPage />;
  }

  return <DynamicRenderer sections={page.sections} />;
}
