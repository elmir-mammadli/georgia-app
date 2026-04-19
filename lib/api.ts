import qs from "qs";
import type { PageData, StrapiCollectionResponse } from "@/types/strapi";

const STRAPI_URL =
  process.env.STRAPI_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchStrapi<T>(path: string, query?: string): Promise<T> {
  const url = new URL(`/api${path}`, STRAPI_URL);
  if (query) {
    url.search = query;
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(url.toString(), {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

function buildPagePopulate(): string {
  return qs.stringify(
    {
      populate: {
        seo: {
          populate: ["ogImage"],
        },
        sections: {
          on: {
            "sections.hero": {
              populate: ["sectionConfig", "image"],
            },
            "sections.features": {
              populate: {
                sectionConfig: true,
                features: {
                  populate: ["icon"],
                },
              },
            },
            "sections.stats-banner": {
              populate: ["sectionConfig", "stats"],
            },
            "sections.steps": {
              populate: ["sectionConfig", "steps", "image"],
            },
            "sections.video": {
              populate: ["sectionConfig", "posterImage"],
            },
            "sections.case-studies": {
              populate: {
                sectionConfig: true,
                cases: {
                  populate: ["image"],
                },
              },
            },
            "sections.typical-cases": {
              populate: {
                sectionConfig: true,
                cases: {
                  populate: ["primaryImage", "secondaryImage"],
                },
              },
            },
            "sections.faq": {
              populate: ["sectionConfig", "items"],
            },
            "sections.cta": {
              populate: ["sectionConfig", "formFields"],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
}

export async function getPageBySlug(
  slug: string
): Promise<PageData | null> {
  try {
    const response = await fetchStrapi<StrapiCollectionResponse<PageData>>(
      "/pages",
      qs.stringify(
        {
          filters: {
            slug: {
              $eq: slug,
            },
          },
        },
        { encodeValuesOnly: true }
      ) +
        `&${buildPagePopulate()}`
    );

    if (!response.data || response.data.length === 0) {
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error(
      `Error fetching page "${slug}" from ${STRAPI_URL} (token ${
        STRAPI_TOKEN ? "present" : "missing"
      }):`,
      error
    );
    return null;
  }
}

export async function submitForm(data: Record<string, string>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Form submission failed");
  }

  return res.json();
}
