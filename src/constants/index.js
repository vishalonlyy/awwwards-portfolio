// index.js
export const servicesData = [
  {
    title: "Web3 & Blockchain Development",
    description:
      "We build smart contracts, DeFi platforms, staking mechanisms, and NFT ecosystems optimized for security, scalability, and performance across Solana, Ethereum, and EVM chains.",
    items: [
      {
        title: "Smart Contract Architecture",
        description: "Secure, gas-efficient contracts written in Solidity, Rust, and Move for EVM and non-EVM chains.",
      },
      {
        title: "Protocol & DApp Engineering",
        description: "Custom-built DeFi protocols, staking dashboards, DAO tooling, and token ecosystems.",
      },
      {
        title: "Multi-Chain Integration",
        description: "Seamless support across Solana, Ethereum, BSC, and Layer-2s with bridge and wallet integrations.",
      },
      {
        title: "Audit-Ready Code",
        description: "Built with security-first principles and audit-friendly modular design patterns."
      },
      {
        title : "Tokenomics & Launch Support",
        description: "End-to-end strategy and dev support for utility tokens, memecoins, and NFT drops."
      }
    ],
  },
  {
    title: "AI-Powered Automation",
    description:
      "From auto-reply bots and content generators to intelligent workflows — our AI systems integrate GPT, computer vision, and dynamic logic to deliver smart, adaptive experiences.",
    items: [
      {
        title: "Auto-Reply Bots",
        description: "Custom-trained GPT agents that engage on X (Twitter), Telegram, and Discord — designed for tone, speed, and scalability.",
      },
      {
        title: "Content & Image Generators",
        description: "AI engines that generate tweets, blogs, captions, or visuals using NLP and multimodal models.",
      },
      {
        title: "Workflow Automation",
        description: "Smart pipelines that handle data scoring, enrichment, lead qualification, and client outreach — fully automated.",
      },
      {
        title : "Computer Vision Integrations",
        description : "AI systems that detect and react to image content (e.g., X post replies, meme engagement bots)."
      },
      {
        title : "Custom AI Training & Fine-Tuning",
        description: "Tailored models built on your brand voice or user behavior — trained for precision and personality."
      }
    ],
  },
  {
    title: "Web & Mobile Product Development",
    description:
      "We build fast, secure, and responsive websites, mobile apps, and internal tools with a focus on performance, accessibility, and intuitive UX — designed to scale with your product.",
    items: [
      {
        title: "Custom Web Applications",
        description: "Full-stack platforms tailored to your business logic — fast, scalable, and SEO-optimized.",
      },
      {
        title: "Mobile App Development",
        description: "Cross-platform apps for iOS and Android with native performance and seamless UX.",
      },
      {
        title: "Dashboards & Admin Panels",
        description: "Internal tools and analytics dashboards built for clarity, control, and efficiency.",
      },
      {
        title: "API Integration & Backend Systems",
        description: "Robust backend architecture with secure APIs, third-party integrations, and real-time functionality.",
      },
      {
        title: "Performance & Accessibility Optimization",
        description: "Engineered for speed, WCAG compliance, and device responsiveness across all screen sizes."
      }
    ],
  },
  {
    title: "Creative Strategy & Digital Identity",
    description:
      "Our design team crafts cohesive brand systems, interactive interfaces, and visual experiences that resonate with users and position your product with clarity, trust, and distinction.",
    items: [
      {
        title: "Brand Systems & Visual Language",
        description: "Creation of logos, typography, color palettes, and design frameworks that define your product’s identity.",
      },
      {
        title: "UI/UX Design",
        description: "User-first interface design focused on clarity, usability, and conversion — for both web and mobile.",
      },
      {
        title: "Interactive Prototyping",
        description: "Clickable prototypes and motion mockups that bring your product vision to life before development.",
      },
      {
        title: "Design Systems & Component Libraries",
        description: "Scalable, consistent design systems built for developers and designers to work in sync.",
      },
      {
        title: "Content & Visual Storytelling",
        description: "High-impact layouts, animations, and visuals that enhance engagement and communicate value instantly.",
      }
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "KAKAFi",
    description:
      "A platform built on Solana for DeFi and NFT utilities, featuring fast transactions and secure smart contracts.",
    href: "",
    image: "/assets/projects/kakafy.jpg",
    bgImage: "/assets/backgrounds/solana.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "SOLANA" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Fetch.ai Auto-Reply Bot",
    description:
      "AI-powered auto-reply bot for X (Twitter) using ASI1.ai, Typescript, React, and Python for smart engagement.",
    href: "",
    image: "/assets/projects/fetchai.jpg",
    bgImage: "/assets/backgrounds/bot.jpg",
    frameworks: [
      { id: 1, name: "X API v2" },
      { id: 2, name: "ASI1.ai" },
      { id: 3, name: "Typescript" },
      { id: 4, name: "React" },
      { id: 5, name: "Python" },
    ],
  },
  {
    id: 5,
    name: "ChainGPT x Binance Square",
    description:
      "AI-powered content and engagement platform for Binance Square, leveraging Angular, Firebase, GraphQL, and Material UI.",
    href: "",
    image: "/assets/projects/chain.jpg",
    bgImage: "/assets/backgrounds/binance.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ideahatchlabs" },
  { name: "GitHub", href: "https://github.com/ideahatchlabs" },
  { name: "Discord", href: "https://discord.gg/ideahatchlabs" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ideahatchlabs.com/" },
];
