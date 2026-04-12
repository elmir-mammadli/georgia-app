import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import type { FAQSectionData } from "@/types/strapi";

type FAQSectionProps = Omit<FAQSectionData, "__component">;

export function FAQSection({
  sectionConfig,
  heading,
  subtitle,
  items,
}: FAQSectionProps) {
  const isLight = useThemeText(sectionConfig, "light");

  return (
    <SectionWrapper
      config={sectionConfig}
      defaultTheme="light"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-blue/12 blur-3xl"
        aria-hidden="true"
      />
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        light={isLight}
        className="mx-auto max-w-3xl"
      />

      {items && items.length > 0 && (
        <div className="mx-auto max-w-3xl">
          <Accordion items={items} />
        </div>
      )}
    </SectionWrapper>
  );
}
