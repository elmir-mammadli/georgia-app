"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { FeaturesSectionData } from "@/types/strapi";

type FeaturesSectionProps = Omit<FeaturesSectionData, "__component">;

const featureIcons = [
  <svg key="icon-0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </svg>,
  <svg key="icon-1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>,
  <svg key="icon-2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7.5 4.5v5c0 5.25-3.19 8.69-7.5 10.5C7.69 20.19 4.5 16.75 4.5 11.5v-5L12 2z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="icon-3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
];

export function FeaturesSection({
  sectionConfig,
  heading,
  subtitle,
  features,
}: FeaturesSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <SectionWrapper
      config={sectionConfig}
      className="py-20 sm:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-18">
        <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        )}
      </div>

      {features && features.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const isHovered = hoveredId === feature.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative cursor-pointer overflow-hidden rounded-3xl border p-7 transition-all duration-300 ${
                  isHovered
                    ? "z-10 scale-[1.03] border-[#21EBA7]/25 bg-[linear-gradient(155deg,#004D43_0%,#193133_48%,#0a6b5c_100%)] shadow-[0_20px_50px_rgba(0,77,67,0.35),0_0_0_1px_rgba(33,235,167,0.12)]"
                    : "border-[#004D43]/10 bg-[linear-gradient(160deg,#EBFFF6_0%,#f0fff7_40%,rgba(150,186,253,0.12)_100%)] shadow-[0_4px_24px_rgba(0,77,67,0.06)]"
                } ${isDimmed ? "opacity-65" : "opacity-100"}`}
              >
                <div
                  className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isHovered
                      ? "bg-[#D0FF73]/20 text-[#D0FF73]"
                      : "bg-[#004D43]/10 text-[#004D43]"
                  }`}
                >
                  {featureIcons[i % featureIcons.length]}
                </div>

                <h3
                  className={`text-lg font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                    isHovered ? "text-white" : "text-text-primary"
                  }`}
                >
                  {feature.title}
                </h3>

                <div
                  className={`mt-3 text-sm leading-relaxed transition-all duration-300 ${
                    isHovered
                      ? "text-white/75 lg:translate-y-0 lg:opacity-100"
                      : "text-text-secondary lg:translate-y-2 lg:opacity-0"
                  }`}
                >
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
}
