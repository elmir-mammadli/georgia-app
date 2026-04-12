import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${path}`;
}

export function getStrapiMedia(url: string | null | undefined): string {
  if (!url) return "";
  // Relative path — already correct
  if (url.startsWith("/")) return url;
  // Absolute Strapi URL on localhost — strip origin so Next.js rewrite proxies it
  // (avoids SSRF block in Next.js image optimizer for private IPs)
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return parsed.pathname + parsed.search;
    }
  } catch {
    // not a valid URL, fall through
  }
  return url;
}
