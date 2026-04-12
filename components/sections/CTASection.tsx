import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "./ContactForm";
import type { CTASectionData } from "@/types/strapi";

type CTASectionProps = Omit<CTASectionData, "__component">;

export function CTASection({
  sectionConfig,
  heading,
  subtitle,
  ctaText,
  ctaLink,
  showForm,
  formFields,
}: CTASectionProps) {
  const isLight = useThemeText(sectionConfig, "mint");

  return (
    <SectionWrapper
      config={sectionConfig}
      defaultTheme="mint"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-accent-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#21EBA7]/12 blur-3xl"
        aria-hidden="true"
      />
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        light={isLight}
        className="mx-auto max-w-3xl"
      />

      {showForm && formFields && formFields.length > 0 ? (
        <div className="mx-auto max-w-2xl">
          <ContactForm fields={formFields} />
        </div>
      ) : (
        ctaText && (
          <div className="text-center">
            <Button href={ctaLink || "#"} size="lg">
              {ctaText}
            </Button>
          </div>
        )
      )}
    </SectionWrapper>
  );
}
