import Image from "next/image";
import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { getStrapiMedia } from "@/lib/utils";
import type { HeroSectionData } from "@/types/strapi";

type HeroSectionProps = Omit<HeroSectionData, "__component">;

export function HeroSection({
  sectionConfig,
  heading,
  subtitle,
  ctaText,
  ctaLink,
  image,
}: HeroSectionProps) {
  const isLight = useThemeText(sectionConfig, "light");

  return (
    <SectionWrapper
      config={sectionConfig}
      defaultTheme="light"
      className="overflow-hidden bg-[linear-gradient(165deg,#D0FF73_0%,#EBFFF6_32%,rgba(150,186,253,0.22)_52%,#EBFFF6_72%,#e8fff2_88%,#D0FF73_100%)] py-20 sm:py-24 lg:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 xl:gap-14">
        <div className="max-w-xl self-center">
          <h1
            className={`text-balance text-[2.65rem] font-extrabold leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] ${
              isLight ? "text-[#004D43]" : "text-text-primary"
            }`}
          >
            {heading}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 max-w-md text-[0.98rem] leading-7 sm:text-base sm:leading-7 ${
                isLight ? "text-[#193133]/75" : "text-text-secondary"
              }`}
            >
              {subtitle}
            </p>
          )}
          {ctaText && (
            <div className="mt-8">
              <Button
                href={ctaLink || "#"}
                size="md"
                className="bg-[#004D43] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_30px_rgba(0,77,67,0.25)] hover:-translate-y-px hover:bg-[#193133] hover:shadow-[0_18px_36px_rgba(25,49,51,0.35)] hover:ring-2 hover:ring-[#D0FF73]/30"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -left-8 top-16 h-32 w-32 rounded-full bg-[#21EBA7]/35 blur-3xl" />
          <div className="absolute right-6 top-0 h-28 w-28 rounded-full bg-[#96BAFD]/25 blur-3xl" />
          <div className="absolute right-14 top-24 h-20 w-20 rounded-full bg-[#004D43]/10 blur-2xl" />
          <div className="relative aspect-[1.04/0.9] lg:-mr-18 xl:-mr-24">
            {image ? (
              <Image
                src={getStrapiMedia(image.url)}
                alt={image.alternativeText || heading}
                fill
                className="object-contain object-bottom-right"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            ) : (
              <svg
                viewBox="0 0 640 560"
                className="h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="cape" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#96BAFD" />
                    <stop offset="100%" stopColor="#21EBA7" />
                  </linearGradient>
                  <linearGradient id="dress" x1="0" y1="0" x2="0.9" y2="1">
                    <stop offset="0%" stopColor="#00664a" />
                    <stop offset="100%" stopColor="#004D43" />
                  </linearGradient>
                </defs>
                <g transform="translate(42 8)">
                  <path d="M468 40c44 110 67 215 71 317" fill="none" stroke="#193133" strokeWidth="7" strokeLinecap="round" />
                  <path d="M522 65c-42 77-106 155-191 233" fill="none" stroke="#193133" strokeWidth="7" strokeLinecap="round" />
                  <ellipse cx="308" cy="118" rx="42" ry="46" fill="#7f4a3b" />
                  <path d="M264 118c16-32 56-44 84-19 12 11 18 28 17 46-31-3-70-1-100 14-6-17-6-28-1-41z" fill="#201914" />
                  <path d="M261 150c12 17 27 25 46 27 17 2 35-2 51-11-15 34-33 70-55 105-25-31-39-68-42-121z" fill="#f2b18a" />
                  <path d="M315 190c-49 12-78 47-89 103-5 26-7 50-6 73 41 9 85 9 131 0 7-57 4-116-36-176z" fill="url(#dress)" />
                  <path d="M337 199c49 7 104 17 164 39-17 34-39 66-67 96-37-12-76-23-116-30 17-38 22-73 19-105z" fill="url(#cape)" />
                  <path d="M202 280c-20 26-28 57-23 94 3 23 10 48 23 75 17-9 32-23 45-42-11-43-17-83-13-127-12-3-22-2-32 0z" fill="#003d35" />
                  <path d="M325 293c7 46 26 95 57 143 19-9 39-25 58-48-24-44-45-89-59-137-18 16-37 30-56 42z" fill="#00574d" />
                  <path d="M226 420c-11 32-20 62-26 92" fill="none" stroke="#193133" strokeWidth="8" strokeLinecap="round" />
                  <path d="M392 436c18 28 39 51 64 69" fill="none" stroke="#193133" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="549" cy="362" r="10" fill="#004D43" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
