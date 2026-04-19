import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL(path = "") {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    process.env.STRAPI_URL ||
    "http://localhost:1337";

  return `${baseUrl}${path}`;
}

export function getStrapiMedia(url: string | null | undefined): string {
  if (!url) return "";
  // Relative path — already correct
  if (url.startsWith("/")) return url;

  const configuredStrapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL;

  try {
    const parsed = new URL(url);
    if (configuredStrapiUrl) {
      const configuredOrigin = new URL(configuredStrapiUrl).origin;

      if (parsed.origin === configuredOrigin) {
        return parsed.pathname + parsed.search;
      }
    }

    // Strip localhost origins so Next.js rewrites handle media consistently.
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return parsed.pathname + parsed.search;
    }
  } catch {
    // not a valid URL, fall through
  }
  return url;
}
