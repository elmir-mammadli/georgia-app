import type {
  CTASectionData,
  CaseStudiesSectionData,
  FAQSectionData,
  FeaturesSectionData,
  HeroSectionData,
  StatsBannerData,
  StepsSectionData,
  VideoSectionData,
} from "@/types/strapi";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const hero: Omit<HeroSectionData, "__component"> = {
  id: 1,
  sectionConfig: { sectionId: "hero", theme: "light" },
  heading: "Affordable Soft-Skills Training for High-Pressure Work Environments",
  subtitle:
    "Georgia is an AI role-play platform that makes soft-skills training affordable, safe, and easy to deploy with self-paced, 100% personalized practice for each user.",
  ctaText: "BOOK DEMO",
  ctaLink: "#contact",
  image: {
    id: 999,
    url: "https://framerusercontent.com/images/lbjwTG7JEMveAdUuyqcn0PbTas.png?width=764&height=931",
    alternativeText: "Georgia hero illustration",
    width: 764,
    height: 931,
  },
};

const statsBanner: Omit<StatsBannerData, "__component"> = {
  id: 2,
  sectionConfig: { sectionId: "stats", theme: "primary" },
  heading: "Communication is killing more than compliance can train.",
  subtitle:
    "Clearer conversations create safer teams, stronger managers, and better day-to-day decisions.",
  stats: [
    {
      id: 1,
      label: "workplace failures",
      value: "86%",
      description: "Linked to poor communication and collaboration habits.",
    },
    {
      id: 2,
      label: "productivity lost",
      value: "$1.2T",
      description: "Miscommunication costs businesses more than most teams expect.",
    },
    {
      id: 3,
      label: "better engagement",
      value: "70%",
      description: "Improved manager communication directly lifts team retention.",
    },
  ],
};

const features: Omit<FeaturesSectionData, "__component"> = {
  id: 3,
  sectionConfig: { sectionId: "features", theme: "white" },
  heading: "Modern Soft-Skills Training That Works Within Your Budget",
  subtitle:
    "Soft skills only improve through practice! Georgia enables that practice with user-defined scenarios, unlimited repetition, and adaptive role-play that mirrors real conversations.",
  columns: "4",
  features: [
    {
      id: 1,
      title: "Personalized, User-Defined Practice",
      description:
        "Employees build skills through scenarios they define themselves—real conversations from their daily work—enhanced by AI that adapts to each person's pace, style, and level. This creates relevant, practical, and truly personalized learning for every user.",
    },
    {
      id: 2,
      title: "Affordable Scaling",
      description:
        "Traditional coaching and workshops don't scale. Georgia delivers high-impact practice sessions across entire teams for a fraction of the cost, unlocking soft-skills training for every employee.",
    },
    {
      id: 3,
      title: "Safe Space for Intimidating Conversations",
      description:
        "Role-play happens in a secure environment supported by ethical safeguards, controlled dialogue rules, and full GDPR compliance. AI role play allows employees to rehearse sensitive or intimidating conversations without risk or judgment.",
    },
    {
      id: 4,
      title: "Realistic & Effective Skill Building",
      description:
        "Adaptive AI responses recreate the pressure, emotional cues, and unpredictability of real conversations. Simulations give employees the realistic practice needed to build lasting, usable skills that transfer directly to the workplace.",
    },
  ],
};

const steps: Omit<StepsSectionData, "__component"> = {
  id: 4,
  sectionConfig: { sectionId: "steps", theme: "mint" },
  heading: "Develop Soft Skills",
  subtitle: "in 3 Simple Steps",
  steps: [
    {
      id: 1,
      stepNumber: 1,
      title: "Step 1: Describe the Situation",
      description:
        "The user starts by sharing the communication challenge they're facing. Georgia identifies the most appropriate response methodology, explains how it works, and shows how to apply it directly to that specific situation.",
    },
    {
      id: 2,
      stepNumber: 2,
      title: "Step 2: Engage in Role-Play",
      description:
        "Users practice realistic conversations through adaptive AI role-play that mirrors real workplace interactions.",
    },
    {
      id: 3,
      stepNumber: 3,
      title: "Step 3: Receive Methodology-Based Feedback",
      description:
        "After each interaction, users receive structured feedback based on proven communication frameworks to improve performance.",
    },
  ],
  image: {
    id: 998,
    url: "https://framerusercontent.com/images/KtuIzDwmuCaiSa0uRMUgWEOeW1M.jpeg?width=960&height=1280",
    alternativeText: "Georgia app steps illustration",
    width: 960,
    height: 1280,
  },
};

const video: Omit<VideoSectionData, "__component"> = {
  id: 5,
  sectionConfig: { sectionId: "video", theme: "primary" },
  heading: "See Georgia in action.",
  subtitle:
    "A quick look at how the platform introduces communication habits teams can use immediately.",
  videoUrl: "https://www.youtube.com/embed/YgNuzy4f_wQ?si=r4Dwjedr_6e9HArc",
};

const caseStudies: Omit<CaseStudiesSectionData, "__component"> = {
  id: 6,
  sectionConfig: { sectionId: "case-studies", theme: "white" },
  heading: "Real results from real teams.",
  subtitle:
    "From construction to healthcare, teams use Georgia to reduce friction and lead better conversations.",
  cases: [
    {
      id: 1,
      tag: "Case 1: Bridging Generation Gaps",
      title: "Improve Conversations Across Age, Experience, and Communication Styles",
      description:
        "Teams often struggle when junior and senior employees communicate differently. Georgia provides targeted communication techniques where users practice navigating tone, expectations, and communication norms without creating friction.",
      points: [
        "Reduce tension created by indirect vs. direct communication styles",
        "Practice confident conversations with senior leaders",
        "Support new managers in leading older, more experienced teams",
      ],
      image: {
        id: 901,
        url: "https://framerusercontent.com/images/LUsjUqzep5rCELpa7DjBEL3ilzo.jpeg?scale-down-to=1024&width=1280&height=698",
        alternativeText: "Bridging generation gaps in communication",
        width: 1280,
        height: 698,
      },
    },
    {
      id: 2,
      tag: "Case 2: Managing Tension & Conflict Before It Escalates",
      title: "Practice High-Tension Conversations Without Real-World Consequences",
      description:
        "Conflict avoidance creates bottlenecks. Georgia offers a safe space to rehearse tough moments—misalignment talks, emotional reactions, or disagreements—so employees approach the real thing with confidence and clarity.",
      points: [
        "De-escalate emotional conversations",
        "Improve assertiveness and clarity",
        "Reduce misunderstandings and workplace friction",
      ],
      image: {
        id: 902,
        url: "https://framerusercontent.com/images/Ip5tcIzxBEe1MjXjgwZMhRNOPyg.jpeg?scale-down-to=1024&width=1280&height=698",
        alternativeText: "Managing tension and conflict in the workplace",
        width: 1280,
        height: 698,
      },
    },
    {
      id: 3,
      tag: "Case 3: Preparing for Intimidating or Sensitive Discussions",
      title: "Build Confidence for the Conversations People Dread",
      description:
        "From delivering difficult feedback to addressing accountability issues, employees often feel intimidated or unsure how to approach delicate subjects. Georgia breaks the cycle of avoidance by offering structured, repeatable practice.",
      points: [
        "Practice delivering difficult messages with empathy",
        "Strengthen emotional composure and communication control",
        "Reduce anxiety through repetition and guided support",
      ],
      image: {
        id: 903,
        url: "https://framerusercontent.com/images/o4x30resy8nUspowZ1Vm9kH1fJI.png?scale-down-to=1024&width=2816&height=1536",
        alternativeText: "Preparing for sensitive discussions",
        width: 2816,
        height: 1536,
      },
    },
  ],
};

const faq: Omit<FAQSectionData, "__component"> = {
  id: 7,
  sectionConfig: { sectionId: "faq", theme: "light" },
  heading: "Frequently asked questions.",
  subtitle:
    "Everything you need to know before introducing Georgia to your team.",
  items: [
    {
      id: 1,
      question: "How much does Georgia cost?",
      answer:
        "Pricing depends on team size and rollout scope, but the goal is always affordable access to high-quality training.",
    },
    {
      id: 2,
      question: "How long are sessions?",
      answer:
        "Most learning moments are designed to fit into a 15 to 30 minute window so they work with operational schedules.",
    },
    {
      id: 3,
      question: "Can the training match our industry?",
      answer:
        "Yes. The content can be shaped around the types of conversations, team dynamics, and leadership challenges your people face.",
    },
    {
      id: 4,
      question: "Do you offer a demo?",
      answer:
        "Yes. We usually start with a practical walkthrough so you can see how the product fits into your existing workflow.",
    },
  ],
};

const cta: Omit<CTASectionData, "__component"> = {
  id: 8,
  sectionConfig: { sectionId: "contact", theme: "mint" },
  heading: "No more awkward talks. Now it's possible.",
  subtitle:
    "Get in touch and we will show you how Georgia can help your team build stronger communication habits.",
  ctaText: "Get Started",
  ctaLink: "#contact",
  showForm: true,
  formFields: [
    {
      id: 1,
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      placeholder: "you@company.com",
      required: true,
    },
    {
      id: 3,
      label: "Company",
      type: "text",
      placeholder: "Company name",
      required: false,
    },
    {
      id: 4,
      label: "Message",
      type: "textarea",
      placeholder: "How can we help?",
      required: false,
    },
  ],
};

export default function HomeStaticPage() {
  return (
    <>
      <HeroSection {...hero} />
      <StatsBanner {...statsBanner} />
      <FeaturesSection {...features} />
      <StepsSection {...steps} />
      <VideoSection {...video} />
      <CaseStudiesSection {...caseStudies} />
      <FAQSection {...faq} />
      <CTASection {...cta} />
    </>
  );
}
