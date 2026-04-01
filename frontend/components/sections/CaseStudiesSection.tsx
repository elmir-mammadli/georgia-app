import Image from "next/image";
import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getStrapiMedia } from "@/lib/utils";
import type { CaseStudiesSectionData } from "@/types/strapi";

type CaseStudiesSectionProps = Omit<CaseStudiesSectionData, "__component">;

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#21EBA7" fillOpacity="0.18" />
      <circle cx="10" cy="10" r="10" stroke="#004D43" strokeOpacity="0.12" strokeWidth="1" />
      <path
        d="M6.5 10.5l2 2 5-5"
        stroke="#004D43"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudiesSection({
  sectionConfig,
  heading,
  subtitle,
  cases,
}: CaseStudiesSectionProps) {
  const isLight = useThemeText(sectionConfig);

  return (
    <SectionWrapper
      config={sectionConfig}
      className="py-20 sm:py-28"
      containerClassName="max-w-7xl"
    >
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        light={isLight}
        className="mx-auto mb-16 max-w-3xl sm:mb-20"
      />

      {cases && cases.length > 0 && (
        <div className="space-y-20 sm:space-y-28">
          {cases.map((item, i) => {
            const reversed = i % 2 === 1;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
                style={{
                  animation: `fade-slide-up 0.6s ease-out ${i * 200}ms both`,
                }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="group relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(16,24,40,0.1)]">
                    {item.image ? (
                      <Image
                        src={getStrapiMedia(item.image.url)}
                        alt={item.image.alternativeText || item.title}
                        width={item.image.width}
                        height={item.image.height}
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="aspect-video bg-[linear-gradient(135deg,#004D43_0%,#193133_35%,#21EBA7_65%,#96BAFD_100%)]" />
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                  {item.tag && (
                    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.tag}
                    </span>
                  )}
                  <h3
                    className={`text-2xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-3xl ${
                      isLight ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${
                      isLight ? "text-white/75" : "text-text-secondary"
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.points && item.points.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {item.points.map((point, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-3 text-sm leading-6 sm:text-base sm:leading-7 ${
                            isLight ? "text-white/80" : "text-text-secondary"
                          }`}
                        >
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
}
