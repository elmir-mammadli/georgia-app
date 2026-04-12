"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getStrapiMedia } from "@/lib/utils";
import type { StepsSectionData } from "@/types/strapi";

type StepsSectionProps = Omit<StepsSectionData, "__component">;

export function StepsSection({
  sectionConfig,
  heading,
  subtitle,
  steps,
  image,
  imageUrl,
}: StepsSectionProps) {
  const [openId, setOpenId] = useState<number | null>(steps?.[0]?.id ?? null);

  return (
    <SectionWrapper
      config={sectionConfig}
      defaultTheme="mint"
      className="py-20 sm:py-28"
      containerClassName="max-w-7xl"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: image */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="absolute -inset-4 rounded-3xl bg-[linear-gradient(135deg,rgba(33,235,167,0.12)_0%,rgba(150,186,253,0.14)_100%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(16,24,40,0.1)]">
            {(image || imageUrl) ? (
              <Image
                src={image ? getStrapiMedia(image.url) : imageUrl!}
                alt={image?.alternativeText || heading}
                width={image?.width ?? 960}
                height={image?.height ?? 1280}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="aspect-3/4 bg-[linear-gradient(135deg,#004D43_0%,#00664a_48%,#D0FF73_100%)]" />
            )}
          </div>
        </div>

        {/* Right: title + accordion */}
        <div>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[2.75rem]">
            {heading}{" "}
            {subtitle && (
              <span className="text-primary">{subtitle}</span>
            )}
          </h2>

          <div className="mt-10 space-y-3">
            {steps?.map((step) => {
              const isOpen = openId === step.id;

              return (
                <div
                  key={step.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#004D43]/12 bg-white shadow-[0_8px_30px_rgba(0,77,67,0.08)] ring-1 ring-[#96BAFD]/15"
                      : "border-transparent bg-white/60 hover:border-[#21EBA7]/12 hover:bg-white/85"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : step.id)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#004D43] text-white shadow-[0_6px_20px_rgba(0,77,67,0.28)] ring-2 ring-[#21EBA7]/25"
                          : "bg-[#EBFFF6] text-[#004D43]"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <span className="flex-1 text-base font-semibold leading-7 text-text-primary sm:text-lg">
                      {step.title}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-primary/10 text-primary"
                          : "text-text-light"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        {isOpen ? (
                          <line x1="3" y1="8" x2="13" y2="8" />
                        ) : (
                          <>
                            <line x1="8" y1="3" x2="8" y2="13" />
                            <line x1="3" y1="8" x2="13" y2="8" />
                          </>
                        )}
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-19 text-sm leading-7 text-text-secondary sm:px-6 sm:pl-20 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
