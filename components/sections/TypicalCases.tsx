import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn, getStrapiMedia } from "@/lib/utils";
import type { TypicalCasesSectionData } from "@/types/strapi";

type TypicalCasesProps = Omit<TypicalCasesSectionData, "__component">;

function ImagePanel({
  src,
  alt,
  width,
  height,
  className,
}: {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-white/10 ring-1 ring-white/10 shadow-[0_20px_56px_rgba(6,32,29,0.22)]",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 900}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(208,255,115,0.16)_0%,rgba(33,235,167,0.12)_50%,rgba(255,255,255,0.08)_100%)]" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,32,29,0.02)_0%,rgba(6,32,29,0.28)_100%)]" />
    </div>
  );
}

export function TypicalCases({
  sectionConfig,
  heading,
  subtitle,
  cases,
}: TypicalCasesProps) {
  return (
    <SectionWrapper
      config={sectionConfig ? { ...sectionConfig, theme: "primary" } : { theme: "primary" }}
      defaultTheme="primary"
      className="overflow-hidden py-20 sm:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="absolute inset-x-0 top-0 h-48" />
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        align="left"
        light
        className="relative mb-14 max-w-3xl sm:mb-16"
      />

      <div className="relative">
        {cases?.map((item, index) => {
          const primarySrc = item.primaryImage
            ? getStrapiMedia(item.primaryImage.url)
            : item.primaryImageUrl;
          const secondarySrc = item.secondaryImage
            ? getStrapiMedia(item.secondaryImage.url)
            : item.secondaryImageUrl;

          return (
            <article
              key={item.id}
              className={cn(
                "grid gap-8 border-t py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12",
                "border-white/20",
                index === 0 && "border-t-0 pt-0"
              )}
            >
              <div className="max-w-md">
                <h3 className="text-4xl font-bold tracking-[-0.04em] text-secondary sm:text-5xl">
                  {item.title}
                </h3>

                <div className="mt-8 space-y-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-light">
                      {item.userTypesTitle}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-lg leading-8 text-white/88">
                      {item.userTypes}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-light">
                      {item.situationsTitle}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-lg leading-8 text-white/88">
                      {item.situations}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.92fr)]",
                  index % 2 === 1 &&
                    "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)]"
                )}
              >
                <ImagePanel
                  src={primarySrc}
                  alt={item.primaryImage?.alternativeText || `${item.title} scene one`}
                  width={item.primaryImage?.width}
                  height={item.primaryImage?.height}
                  className={cn(
                    "min-h-[240px] min-w-0 sm:min-h-[320px]",
                    index % 2 === 0
                      ? "lg:aspect-[1.5/0.92]"
                      : "lg:aspect-[0.92/1.18]"
                  )}
                />
                <ImagePanel
                  src={secondarySrc}
                  alt={item.secondaryImage?.alternativeText || `${item.title} scene two`}
                  width={item.secondaryImage?.width}
                  height={item.secondaryImage?.height}
                  className={cn(
                    "min-h-[240px] min-w-0 sm:min-h-[320px]",
                    index % 2 === 0
                      ? "lg:aspect-[0.92/1.02]"
                      : "lg:aspect-[1.58/0.92]"
                  )}
                />
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
