import type { StrapiSection } from "@/types/strapi";
import { HeroSection } from "./sections/HeroSection";
import { StatsBanner } from "./sections/StatsBanner";
import { FeaturesSection } from "./sections/FeaturesSection";
import { StepsSection } from "./sections/StepsSection";
import { VideoSection } from "./sections/VideoSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { FAQSection } from "./sections/FAQSection";
import { CTASection } from "./sections/CTASection";

type SectionComponentName = StrapiSection["__component"];

type SectionDataFor<T extends SectionComponentName> = Extract<
  StrapiSection,
  { __component: T }
>;

type SectionPropsFor<T extends SectionComponentName> = Omit<
  SectionDataFor<T>,
  "__component"
>;

type SectionComponentMap = {
  [K in SectionComponentName]: React.ComponentType<SectionPropsFor<K>>;
};

const componentMap: SectionComponentMap = {
  "sections.hero": HeroSection,
  "sections.stats-banner": StatsBanner,
  "sections.features": FeaturesSection,
  "sections.steps": StepsSection,
  "sections.video": VideoSection,
  "sections.case-studies": CaseStudiesSection,
  "sections.faq": FAQSection,
  "sections.cta": CTASection,
};

function UnknownSection({ componentName }: { componentName: string }) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="mx-auto my-8 max-w-4xl rounded-lg border-2 border-dashed border-red-300 bg-red-50 p-6 text-center">
      <p className="text-sm font-medium text-red-600">
        Unknown section type: <code className="font-mono">{componentName}</code>
      </p>
      <p className="mt-1 text-xs text-red-400">
        Register this component in DynamicRenderer.tsx
      </p>
    </div>
  );
}

function renderSection(section: StrapiSection, index: number): React.ReactNode {
  const name = section.__component;

  if (!(name in componentMap)) {
    return <UnknownSection key={`unknown-${index}`} componentName={name} />;
  }

  switch (section.__component) {
    case "sections.hero": {
      const { __component, ...props } = section;
      return <HeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.stats-banner": {
      const { __component, ...props } = section;
      return <StatsBanner key={`${__component}-${index}`} {...props} />;
    }
    case "sections.features": {
      const { __component, ...props } = section;
      return <FeaturesSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.steps": {
      const { __component, ...props } = section;
      return <StepsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.video": {
      const { __component, ...props } = section;
      return <VideoSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.case-studies": {
      const { __component, ...props } = section;
      return <CaseStudiesSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.faq": {
      const { __component, ...props } = section;
      return <FAQSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cta": {
      const { __component, ...props } = section;
      return <CTASection key={`${__component}-${index}`} {...props} />;
    }
    default: {
      const _exhaustive: never = section;
      return null;
    }
  }
}

interface DynamicRendererProps {
  sections: StrapiSection[];
}

export function DynamicRenderer({ sections }: DynamicRendererProps) {
  if (!sections || sections.length === 0) return null;

  return <>{sections.map(renderSection)}</>;
}
