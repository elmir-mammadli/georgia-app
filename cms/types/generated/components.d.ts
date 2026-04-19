import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_studies';
  info: {
    description: 'Case studies grid section';
    displayName: 'Case Studies';
    icon: 'file';
  };
  attributes: {
    cases: Schema.Attribute.Component<'sections.case-study-item', true>;
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_study_items';
  info: {
    description: 'Individual case study entry';
    displayName: 'Case Study Item';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    points: Schema.Attribute.JSON;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Call to action section with optional form';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    formFields: Schema.Attribute.Component<'sections.form-field', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    showForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: 'Frequently asked questions section';
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    description: 'Individual FAQ entry';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    description: 'Individual feature entry';
    displayName: 'Feature Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: 'Feature cards section';
    displayName: 'Features';
    icon: 'apps';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'4'>;
    features: Schema.Attribute.Component<'sections.feature-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsFormField extends Struct.ComponentSchema {
  collectionName: 'components_sections_form_fields';
  info: {
    description: 'Dynamic form field configuration';
    displayName: 'Form Field';
    icon: 'pencil';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'tel', 'textarea', 'select']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero banner section';
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    description: 'Individual stat entry';
    displayName: 'Stat Item';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStatsBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_banners';
  info: {
    description: 'Stats banner with key metrics';
    displayName: 'Stats Banner';
    icon: 'chartBubble';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    stats: Schema.Attribute.Component<'sections.stat-item', true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsStepItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_step_items';
  info: {
    description: 'Individual step entry';
    displayName: 'Step Item';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_steps';
  info: {
    description: 'Step-by-step guide section';
    displayName: 'Steps';
    icon: 'arrowRight';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    steps: Schema.Attribute.Component<'sections.step-item', true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsTypicalCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_typical_case_items';
  info: {
    description: 'Individual typical case entry';
    displayName: 'Typical Case Item';
    icon: 'file';
  };
  attributes: {
    primaryImage: Schema.Attribute.Media<'images'>;
    primaryImageUrl: Schema.Attribute.String;
    secondaryImage: Schema.Attribute.Media<'images'>;
    secondaryImageUrl: Schema.Attribute.String;
    situations: Schema.Attribute.Text & Schema.Attribute.Required;
    situationsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Situations'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    userTypes: Schema.Attribute.Text & Schema.Attribute.Required;
    userTypesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'User types'>;
  };
}

export interface SectionsTypicalCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_typical_cases';
  info: {
    description: 'Typical cases showcase section';
    displayName: 'Typical Cases';
    icon: 'grid';
  };
  attributes: {
    cases: Schema.Attribute.Component<'sections.typical-case-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SectionsVideo extends Struct.ComponentSchema {
  collectionName: 'components_sections_videos';
  info: {
    description: 'Video showcase section';
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    posterImage: Schema.Attribute.Media<'images'>;
    sectionConfig: Schema.Attribute.Component<'shared.section-config', false>;
    subtitle: Schema.Attribute.Text;
    videoUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionConfig extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_configs';
  info: {
    description: 'Per-section appearance and behavior settings';
    displayName: 'Section Config';
    icon: 'cog';
  };
  attributes: {
    sectionId: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['white', 'light', 'mint', 'primary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.case-studies': SectionsCaseStudies;
      'sections.case-study-item': SectionsCaseStudyItem;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.faq-item': SectionsFaqItem;
      'sections.feature-item': SectionsFeatureItem;
      'sections.features': SectionsFeatures;
      'sections.form-field': SectionsFormField;
      'sections.hero': SectionsHero;
      'sections.stat-item': SectionsStatItem;
      'sections.stats-banner': SectionsStatsBanner;
      'sections.step-item': SectionsStepItem;
      'sections.steps': SectionsSteps;
      'sections.typical-case-item': SectionsTypicalCaseItem;
      'sections.typical-cases': SectionsTypicalCases;
      'sections.video': SectionsVideo;
      'shared.section-config': SharedSectionConfig;
      'shared.seo': SharedSeo;
    }
  }
}
