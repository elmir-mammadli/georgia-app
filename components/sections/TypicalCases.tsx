import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SectionWrapper,
  resolveSectionTheme,
  useThemeText,
} from "@/components/ui/SectionWrapper";
import { cn, getStrapiMedia } from "@/lib/utils";
import type { TypicalCasesSectionData } from "@/types/strapi";

type TypicalCasesProps = Omit<TypicalCasesSectionData, "__component">;

function ImagePanel({
  src,
  alt,
  width,
  height,
  isLightTheme,
  className,
}: {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  isLightTheme: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] ring-1",
        isLightTheme
          ? "bg-white/10 ring-white/10 shadow-[0_18px_48px_rgba(6,32,29,0.18)]"
          : "bg-white/70 ring-[#004D43]/10 shadow-[0_18px_44px_rgba(0,77,67,0.08)]",
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
        <div
          className={cn(
            "absolute inset-0",
            isLightTheme
              ? "bg-[linear-gradient(135deg,rgba(208,255,115,0.16)_0%,rgba(33,235,167,0.12)_50%,rgba(255,255,255,0.08)_100%)]"
              : "bg-[linear-gradient(135deg,rgba(0,77,67,0.05)_0%,rgba(33,235,167,0.12)_52%,rgba(150,186,253,0.12)_100%)]"
          )}
        />
      )}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isLightTheme
            ? "bg-[linear-gradient(180deg,rgba(6,32,29,0.02)_0%,rgba(6,32,29,0.28)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(25,49,51,0.08)_100%)]"
        )}
      />
    </div>
  );
}

export function TypicalCases({
  sectionConfig,
  heading,
  subtitle,
  cases,
}: TypicalCasesProps) {
  const theme = resolveSectionTheme(sectionConfig, "primary");
  const isLight = useThemeText(sectionConfig, "primary");
  const dividerClass = isLight ? "border-white/20" : "border-[#004D43]/10";
  const titleClass = isLight ? "text-secondary" : "text-primary";
  const metaClass = isLight
    ? "text-secondary-light"
    : theme === "white"
      ? "text-primary/70"
      : "text-primary/80";
  const bodyClass = isLight ? "text-white/88" : "text-text-secondary";

  return (
    <SectionWrapper
      config={sectionConfig}
      defaultTheme="primary"
      className="overflow-hidden py-20 sm:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="absolute inset-x-0 top-0 h-48" />
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        align="left"
        light={isLight}
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
                dividerClass,
                index === 0 && "border-t-0 pt-0"
              )}
            >
              <div className="max-w-md">
                <h3
                  className={cn(
                    "text-4xl font-bold tracking-[-0.04em] sm:text-5xl",
                    titleClass
                  )}
                >
                  {item.title}
                </h3>

                <div className="mt-8 space-y-8">
                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold uppercase tracking-[0.18em]",
                        metaClass
                      )}
                    >
                      {item.userTypesTitle}
                    </p>
                    <p
                      className={cn(
                        "mt-3 whitespace-pre-line text-lg leading-8",
                        bodyClass
                      )}
                    >
                      {item.userTypes}
                    </p>
                  </div>

                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold uppercase tracking-[0.18em]",
                        metaClass
                      )}
                    >
                      {item.situationsTitle}
                    </p>
                    <p
                      className={cn(
                        "mt-3 whitespace-pre-line text-lg leading-8",
                        bodyClass
                      )}
                    >
                      {item.situations}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "grid gap-4 sm:grid-cols-[1.3fr_1fr]",
                  index % 2 === 1 && "sm:grid-cols-[0.9fr_1.4fr]"
                )}
              >
                <ImagePanel
                  src={primarySrc}
                  alt={item.primaryImage?.alternativeText || `${item.title} scene one`}
                  width={item.primaryImage?.width}
                  height={item.primaryImage?.height}
                  isLightTheme={isLight}
                  className={cn(
                    "min-h-[240px] sm:min-h-[320px]",
                    index % 2 === 0 ? "sm:aspect-[1.5/0.9]" : "sm:aspect-[0.9/1.2]"
                  )}
                />
                <ImagePanel
                  src={secondarySrc}
                  alt={item.secondaryImage?.alternativeText || `${item.title} scene two`}
                  width={item.secondaryImage?.width}
                  height={item.secondaryImage?.height}
                  isLightTheme={isLight}
                  className={cn(
                    "min-h-[240px] sm:min-h-[320px]",
                    index % 2 === 0 ? "sm:aspect-[0.95/1]" : "sm:aspect-[1.55/0.9]"
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
