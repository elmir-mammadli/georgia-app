export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T & { id: number; documentId: string };
}

export interface StrapiCollectionResponse<T> {
  data: Array<T & { id: number; documentId: string }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface SeoData {
  metaTitle: string;
  metaDescription: string;
  ogImage?: StrapiImage;
  canonicalUrl?: string;
}

export type SectionTheme = "white" | "light" | "mint" | "primary";

export interface SectionConfig {
  sectionId?: string;
  theme: SectionTheme;
}

export interface PageData {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  seo?: SeoData;
  sections: StrapiSection[];
}

export type StrapiSection =
  | HeroSectionData
  | StatsBannerData
  | FeaturesSectionData
  | StepsSectionData
  | VideoSectionData
  | CaseStudiesSectionData
  | FAQSectionData
  | CTASectionData;

export interface HeroSectionData {
  __component: "sections.hero";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: StrapiImage;
}

export interface StatsBannerData {
  __component: "sections.stats-banner";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  stats: Array<{
    id: number;
    label: string;
    value: string;
    description?: string;
  }>;
}

export interface FeaturesSectionData {
  __component: "sections.features";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  columns?: "2" | "3" | "4";
  features: Array<{
    id: number;
    icon?: StrapiImage;
    title: string;
    description: string;
  }>;
}

export interface StepsSectionData {
  __component: "sections.steps";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  steps: Array<{
    id: number;
    stepNumber: number;
    title: string;
    description: string;
  }>;
  image?: StrapiImage;
}

export interface VideoSectionData {
  __component: "sections.video";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  videoUrl: string;
  posterImage?: StrapiImage;
}

export interface CaseStudiesSectionData {
  __component: "sections.case-studies";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  columns?: "2" | "3" | "4";
  cases: Array<{
    id: number;
    title: string;
    description: string;
    image?: StrapiImage;
    tag?: string;
    points?: string[];
  }>;
}

export interface FAQSectionData {
  __component: "sections.faq";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  items: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
}

export interface CTASectionData {
  __component: "sections.cta";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  showForm: boolean;
  formFields?: Array<{
    id: number;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
  }>;
}
