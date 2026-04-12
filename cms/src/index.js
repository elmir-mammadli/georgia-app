"use strict";

const HOME_PAGE_DATA = {
  title: "Home",
  slug: "home",
  sections: [
    // Section 0 — Hero
    {
      __component: "sections.hero",
      sectionConfig: { sectionId: "hero", theme: "light" },
      heading:
        "Affordable Soft-Skills Training for High-Pressure Work Environments",
      subtitle:
        "Georgia is an AI role-play platform that makes soft-skills training affordable, safe, and easy to deploy with self-paced, 100% personalized practice for each user.",
      ctaText: "BOOK DEMO",
      ctaLink: "#contact",
      imageUrl:
        "https://framerusercontent.com/images/lbjwTG7JEMveAdUuyqcn0PbTas.png?width=764&height=931",
    },

    // Section 1 — Stats Banner
    {
      __component: "sections.stats-banner",
      sectionConfig: { sectionId: "stats", theme: "primary" },
      heading: "Communication is killing more than compliance can train.",
      subtitle:
        "Clearer conversations create safer teams, stronger managers, and better day-to-day decisions.",
      stats: [
        {
          label: "workplace failures",
          value: "86%",
          description: "Linked to poor communication and collaboration habits.",
        },
        {
          label: "productivity lost",
          value: "$1.2T",
          description:
            "Miscommunication costs businesses more than most teams expect.",
        },
        {
          label: "better engagement",
          value: "70%",
          description:
            "Improved manager communication directly lifts team retention.",
        },
      ],
    },

    // Section 2 — Features
    {
      __component: "sections.features",
      sectionConfig: { sectionId: "features", theme: "white" },
      heading: "Modern Soft-Skills Training That Works Within Your Budget",
      subtitle:
        "Soft skills only improve through practice! Georgia enables that practice with user-defined scenarios, unlimited repetition, and adaptive role-play that mirrors real conversations.",
      columns: "4",
      features: [
        {
          title: "Personalized, User-Defined Practice",
          description:
            "Employees build skills through scenarios they define themselves—real conversations from their daily work—enhanced by AI that adapts to each person's pace, style, and level. This creates relevant, practical, and truly personalized learning for every user.",
        },
        {
          title: "Affordable Scaling",
          description:
            "Traditional coaching and workshops don't scale. Georgia delivers high-impact practice sessions across entire teams for a fraction of the cost, unlocking soft-skills training for every employee.",
        },
        {
          title: "Safe Space for Intimidating Conversations",
          description:
            "Role-play happens in a secure environment supported by ethical safeguards, controlled dialogue rules, and full GDPR compliance. AI role play allows employees to rehearse sensitive or intimidating conversations without risk or judgment.",
        },
        {
          title: "Realistic & Effective Skill Building",
          description:
            "Adaptive AI responses recreate the pressure, emotional cues, and unpredictability of real conversations. Simulations give employees the realistic practice needed to build lasting, usable skills that transfer directly to the workplace.",
        },
      ],
    },

    // Section 3 — Steps
    {
      __component: "sections.steps",
      sectionConfig: { sectionId: "steps", theme: "mint" },
      heading: "Develop Soft Skills",
      subtitle: "in 3 Simple Steps",
      steps: [
        {
          stepNumber: 1,
          title: "Step 1: Describe the Situation",
          description:
            "The user starts by sharing the communication challenge they're facing. Georgia identifies the most appropriate response methodology, explains how it works, and shows how to apply it directly to that specific situation.",
        },
        {
          stepNumber: 2,
          title: "Step 2: Engage in Role-Play",
          description:
            "Users practice realistic conversations through adaptive AI role-play that mirrors real workplace interactions.",
        },
        {
          stepNumber: 3,
          title: "Step 3: Receive Methodology-Based Feedback",
          description:
            "After each interaction, users receive structured feedback based on proven communication frameworks to improve performance.",
        },
      ],
      imageUrl:
        "https://framerusercontent.com/images/KtuIzDwmuCaiSa0uRMUgWEOeW1M.jpeg?width=960&height=1280",
    },

    // Section 4 — Video
    {
      __component: "sections.video",
      sectionConfig: { sectionId: "video", theme: "primary" },
      heading: "See Georgia in action.",
      subtitle:
        "A quick look at how the platform introduces communication habits teams can use immediately.",
      videoUrl:
        "https://www.youtube.com/embed/YgNuzy4f_wQ?si=r4Dwjedr_6e9HArc",
    },

    // Section 5 — Case Studies
    {
      __component: "sections.case-studies",
      sectionConfig: { sectionId: "case-studies", theme: "white" },
      heading: "Real results from real teams.",
      subtitle:
        "From construction to healthcare, teams use Georgia to reduce friction and lead better conversations.",
      cases: [
        {
          tag: "Case 1: Bridging Generation Gaps",
          title:
            "Improve Conversations Across Age, Experience, and Communication Styles",
          description:
            "Teams often struggle when junior and senior employees communicate differently. Georgia provides targeted communication techniques where users practice navigating tone, expectations, and communication norms without creating friction.",
          points: [
            "Reduce tension created by indirect vs. direct communication styles",
            "Practice confident conversations with senior leaders",
            "Support new managers in leading older, more experienced teams",
          ],
          imageUrl:
            "https://framerusercontent.com/images/LUsjUqzep5rCELpa7DjBEL3ilzo.jpeg?scale-down-to=1024&width=1280&height=698",
        },
        {
          tag: "Case 2: Managing Tension & Conflict Before It Escalates",
          title:
            "Practice High-Tension Conversations Without Real-World Consequences",
          description:
            "Conflict avoidance creates bottlenecks. Georgia offers a safe space to rehearse tough moments—misalignment talks, emotional reactions, or disagreements—so employees approach the real thing with confidence and clarity.",
          points: [
            "De-escalate emotional conversations",
            "Improve assertiveness and clarity",
            "Reduce misunderstandings and workplace friction",
          ],
          imageUrl:
            "https://framerusercontent.com/images/Ip5tcIzxBEe1MjXjgwZMhRNOPyg.jpeg?scale-down-to=1024&width=1280&height=698",
        },
        {
          tag: "Case 3: Preparing for Intimidating or Sensitive Discussions",
          title: "Build Confidence for the Conversations People Dread",
          description:
            "From delivering difficult feedback to addressing accountability issues, employees often feel intimidated or unsure how to approach delicate subjects. Georgia breaks the cycle of avoidance by offering structured, repeatable practice.",
          points: [
            "Practice delivering difficult messages with empathy",
            "Strengthen emotional composure and communication control",
            "Reduce anxiety through repetition and guided support",
          ],
          imageUrl:
            "https://framerusercontent.com/images/o4x30resy8nUspowZ1Vm9kH1fJI.png?scale-down-to=1024&width=2816&height=1536",
        },
      ],
    },

    // Section 6 — FAQ
    {
      __component: "sections.faq",
      sectionConfig: { sectionId: "faq", theme: "light" },
      heading: "Frequently asked questions.",
      subtitle:
        "Everything you need to know before introducing Georgia to your team.",
      items: [
        {
          question: "How much does Georgia cost?",
          answer:
            "Pricing depends on team size and rollout scope, but the goal is always affordable access to high-quality training.",
        },
        {
          question: "How long are sessions?",
          answer:
            "Most learning moments are designed to fit into a 15 to 30 minute window so they work with operational schedules.",
        },
        {
          question: "Can the training match our industry?",
          answer:
            "Yes. The content can be shaped around the types of conversations, team dynamics, and leadership challenges your people face.",
        },
        {
          question: "Do you offer a demo?",
          answer:
            "Yes. We usually start with a practical walkthrough so you can see how the product fits into your existing workflow.",
        },
      ],
    },

    // Section 7 — CTA
    {
      __component: "sections.cta",
      sectionConfig: { sectionId: "contact", theme: "mint" },
      heading: "No more awkward talks. Now it's possible.",
      subtitle:
        "Get in touch and we will show you how Georgia can help your team build stronger communication habits.",
      ctaText: "Get Started",
      ctaLink: "#contact",
      showForm: true,
      formFields: [
        { label: "Name", type: "text", placeholder: "Your full name", required: true },
        { label: "Email", type: "email", placeholder: "you@company.com", required: true },
        { label: "Company", type: "text", placeholder: "Company name", required: false },
        { label: "Message", type: "textarea", placeholder: "How can we help?", required: false },
      ],
    },
  ],
};

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    const existingPages = await strapi.documents("api::page.page").findMany({
      filters: { slug: "home" },
    });

    if (existingPages.length > 0) {
      // Page exists — update it to pick up any new fields (e.g. imageUrl)
      await strapi.documents("api::page.page").update(existingPages[0].documentId, {
        data: HOME_PAGE_DATA,
        status: "published",
      });
      strapi.log.info('Bootstrap: Home page updated with latest seed data.');
      return;
    }

    await strapi.documents("api::page.page").create({
      data: HOME_PAGE_DATA,
      status: "published",
    });

    strapi.log.info("Bootstrap: Home page seeded and published successfully.");
  },

  destroy() {},
};
