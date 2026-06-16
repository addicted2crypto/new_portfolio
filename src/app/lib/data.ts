
import React from "react";
import { GiComputing } from "react-icons/gi";
import { BiSolidFridge } from "react-icons/bi";
import { StaticImageData } from "next/image";

import { GiOpenTreasureChest } from "react-icons/gi";

export interface ProjectData {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  demoUrl?: string;
  githubUrl?: string;
}

export interface CertificationData {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationCode?: string;
  expirationDate?: string;
  credentialUrl?: string;
  description?: string;
}

import cftmarketImg from '/public/cftmarket.png';
import commandImg from '/public/command.png';
import applianceImg from '/public/appliance.png';
import agentImg from '/public/agent.png';
import learningtutorImg from '/public/learningtutor.png';
import dhaImg from '/public/dha.png';
import gymtechImg from '/public/gymtech.png';
import hcashImg from '/public/hcash.png';
import moatImg from '/public/moat.png';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Founder & Lead Developer, GymTech",
    location: "Remote",
    description:
      "Building a full-stack SaaS platform for martial arts and fitness gyms. Architected multi-tenant system with role-based access control, tier-based subscriptions ($79-$299/mo), and Stripe Connect payment processing. Features include class scheduling, member management, QR check-ins, landing page builder, and real-time analytics with PostgreSQL and Supabase.",
    icon: React.createElement(GiComputing),
    date: "Dec 2025 - Present",
  },
  {
    title: "Software Engineer, DoD Contractor",
    location: "Seattle, WA (Hybrid)",
    description:
      "Supporting Defense Health Agency platforms (health.mil, TRICARE) through BDR Solutions LLC. Shipping DoD Health IT features on Hyperledger Iroha, the first government blockchain deployment in production. Built NestJS SDK adopted by 4 DoD teams, reducing boilerplate setup from 2 days to 3 hours. Maintaining enterprise CMS with JavaScript, C#, and Sitecore while implementing end-to-end TLS, VPN tunnels, and WAF configurations.",
    icon: React.createElement(GiComputing),
    date: "Apr 2025 - Present",
  },
  {
    title: "Lead Full-Stack Developer",
    location: "Remote",
    description:
      "Led development of enterprise SaaS platforms with focus on payment processing, authentication systems, and data analytics. Architected secure APIs and implemented industry-standard security practices across client applications. Managed full development lifecycle from requirements to production deployment.",
    icon: React.createElement(GiComputing),
    date: "Oct 2022 - Present",
  },
  {
    title: "Full-Stack Developer, EAS Platform",
    location: "Seattle, WA",
    description:
      "Lead developer for an Experience as a Service B2B platform. Architected scalable full-stack solutions serving enterprise clients, including user authentication, payment integration, blockchain capabilities, and real-time data processing.",
    icon: React.createElement(GiComputing),
    date: "2020 - 2022",
  },
  {
    title: "Blockchain Developer & Team Lead",
    location: "Remote",
    description:
      "Led blockchain development team building decentralized applications for Web3 projects. Designed and implemented smart contracts and frontend interfaces across multiple blockchain networks. Collaborated with leading Web3 companies on production deployments.",
    icon: React.createElement(GiComputing),
    date: "2021 - 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Delivered full-stack development services with emphasis on security and scalable architecture. Built custom web applications across industries, specializing in React, Node.js, and blockchain integrations with a strong focus on code quality and security best practices.",
    icon: React.createElement(GiOpenTreasureChest),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: 'AvaSleuth / ContractSleuth',
    description:
      "Production application built on top of a local AI stack I built from scratch (DCGP + WillAgent). Applies local model intelligence to Avalanche ecosystem security: L0-L7 smart contract auditing, smart wallet tracking (1047 identities indexed), and token radar, all running on local models with a 5-gate anti-hallucination pipeline. Foundry three-phase PoC generation, heartbeat state machine, 44-finding audit track record including Club HashCash (Avalanche C-Chain). Local AI doing real work in a live, high-stakes environment.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Foundry", "Avalanche", "Solidity", "wagmi", "viem"],
    imageUrl: commandImg,
    githubUrl: "https://github.com/addicted2crypto",
  },
  {
    title: 'DCGP',
    description:
      "Live context governance ecosystem for local LLM development. DCGP is the foundation layer: it enforces typed context boundaries, predicts entropy before hallucinations occur, and gates deterministic output across any agentic pipeline. Ships as an opencode plugin so any local model build gets hallucination prevention and a full audit surface out of the box. The kernel powering the AvaSleuth and WillAgent ecosystem.",
    tags: ["TypeScript", "LLM", "RAG", "AI", "Node.js", "Agents", "Opencode"],
    imageUrl: agentImg,
    githubUrl: "https://github.com/addicted2crypto/DCGP",
  },
  {
    title: 'WillAgent',
    description:
      "Local model orchestration framework and the middle layer of the local AI stack. Dual-routes between local models (Ollama/Qwen) and the Claude API using a ReACT pattern with a typed tool registry. Redis state persistence, kill-switch agent termination, and full audit logging give deterministic control over autonomous AI workloads. Built to run real tasks on your own hardware without depending on cloud APIs.",
    tags: ["NestJS", "TypeScript", "Redis", "Claude API", "Ollama", "Node.js", "Agents", "LLM"],
    imageUrl: agentImg,
    githubUrl: "https://github.com/addicted2crypto/willagent",
  },
  {
    title: 'hCASH ROI Oracle',
    description:
      "Live mining ROI calculator running on Avalanche mainnet. Powered by Chainlink price oracles and real-time DexScreener data. Calculates break-even thresholds, tracks hCASH token economics, and scans on-chain marketplace activity for live pricing. Real oracle integration, real financial modeling, real stakes.",
    tags: ["Next.js", "TypeScript", "Chainlink", "Avalanche", "DexScreener", "Solidity", "wagmi", "viem"],
    imageUrl: hcashImg,
    demoUrl: "https://hcash.onchaintruth.xyz/",
  },
  {
    title: 'Moat OCA Leaderboard',
    description:
      "Live on-chain portfolio analyzer tracking Moat strategy performance against AVAX and BTC benchmarks. Scrapes wallet data, calculates opportunity cost, and ranks top performers on a real-time leaderboard. Full-stack Web3 analytics with verifiable on-chain data, delivered at hackathon speed and running on mainnet.",
    tags: ["Next.js", "TypeScript", "Avalanche", "wagmi", "viem", "PostgreSQL", "Web3", "Analytics"],
    imageUrl: moatImg,
    demoUrl: "https://moat.onchaintruth.xyz/leaderboard",
  },
  {
    title: 'Defense Health Agency, DoD Contractor',
    description:
    "Two DoD health contracts: health.mil and TRICARE (prior engagement), now heading up DHA.mil through BDR Solutions LLC. DHA.mil runs fully in Docker: C#, Sitecore CMS, Unicorn serialization, and MVC inside a containerized image, the first Docker pubweb instance running in government production. Shipped Hyperledger Iroha blockchain features (first gov blockchain in production) and built a NestJS SDK adopted by 4 DoD teams, cutting boilerplate setup from 2 days to 3 hours.",
    tags: ["C#", "Sitecore CMS", "Docker", "Unicorn", "MVC", "NestJS", "Hyperledger Iroha", "TypeScript", "Security+", ".NET", "DoD"],
    imageUrl: dhaImg,
  },
  {
    title: 'GymTech',
    description:
      "Full-stack SaaS platform for martial arts and fitness gyms competing with SparkMembership. Built multi-tenant architecture with role-based access control (super_admin, gym_owner, staff, member) and tier-based subscriptions ($79-$299/mo). Integrated Stripe for platform billing and Stripe Connect for gym payment processing. Core features include class scheduling, member database, QR check-in system, landing page builder, and real-time analytics dashboards. PostgreSQL triggers enforce tier limits on members, staff, and messaging quotas. Designed complete subscription lifecycle with 14-day trials and automated data policies.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS", "Zustand", "RLS", "Multi-tenant", "SaaS"],
    imageUrl: gymtechImg,
  },
  {
    title: 'Learning Tutor',
    description:
    "An AI-powered personalized learning platform that curates adaptive learning plans for any subject. Built to help me achieve my CompTIA Security+ certification, this full-stack application leverages LLM technology to create customized educational pathways and intelligent tutoring capabilities.",
    tags: ["React", "Next.js", "Tailwind", "AI", "LLM", "TypeScript", "Node.js", "API", "Full-Stack"],
    imageUrl: learningtutorImg,
    demoUrl: "https://tutorlearningapp.vercel.app/",
  },
  {
    title: 'Appliance Consult',
    description:
      "The project that launched an engineering career. With a decade of hands-on appliance repair experience, the gap was obvious: repair knowledge lived in people's heads, not software. Built an AI-powered advisory platform to digitize expert repair logic so users get instant guidance with one click. LLM integration, Stripe billing, full production database. First full-stack app. The bridge from trades to tech.",
    tags: ["React", "Next.js", "Tailwind", "Rust", "MongoDB", "API", "LLM", "AI", "Prisma", "Stripe", "Node.js", "Drizzle"],
    imageUrl: applianceImg,
  },
  {
    title: "Command Center",
    description:
      "Led development team building a comprehensive Web3 wallet tracker with multi-chain indexing capabilities. Real-time data dashboard displays wallet holdings across multiple blockchain networks with integrated DeFi options for cross-chain operations.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "Postgres", "AI-LLM", "Node.js"],
      imageUrl:  commandImg,
  },
  {
    title: "CFT",
    description:
      "Innovative decentralized market pools platform built with trust and transparency at its core. Features comprehensive transaction indexing on local RPC nodes, enabling users to track and verify all market activities in real-time.",
    tags: ["React", "Next.js", "Solidity", "Rust", "Framer", "SQL", "RPC", "Node.js"],
    imageUrl: cftmarketImg,
  },
] as const;


export const skillsData = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "C#",
  "Rust",
  "Golang",
  "Solidity",
  "Java",
  "SQL",
  // Frontend
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  // Backend
  "Node.js",
  "Express",
  "NestJS",
  ".NET",
  "Django",
  // Databases & ORMs
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Drizzle",
  // Web3 Tooling
  "Foundry",
  "wagmi",
  "viem",
  "RainbowKit",
  // State & APIs
  "Redux",
  "Zustand",
  "GraphQL",
  "Apollo",
  "Stripe",
  // Queue / Infra
  "BullMQ",
  // AI/ML
  "LLM",
  "RAG",
  // Tools
  "Git",
  "Docker",
  "CLI",
  "Bash",
  "AWS",
  "Azure",
] as const;

export const certificationsData: CertificationData[] = [
  {
    name: "CompTIA Security+ Certified",
    issuer: "CompTIA",
    date: "October 28, 2025",
    credentialId: "COMP001022876354",
    verificationCode: "QF4L4H4TYNRQ2WH2",
    expirationDate: "October 28, 2028",
    credentialUrl: "https://www.certmetrics.com/comptia/public/verification.aspx?code=QF4L4H4TYNRQ2WH2",
  },
  {
    name: "OWASP Smart Contract Top 10 2026",
    issuer: "OWASP Foundation",
    date: "2025",
    description:
      "Full-coverage audit methodology: ABI-level static analysis, live on-chain intelligence, adversarial threat modeling, Foundry three-phase PoC generation. Track record includes a 44-finding audit of Club HashCash (Avalanche C-Chain).",
  },
  {
    name: "DoD IAT Level II",
    issuer: "Department of Defense",
    date: "October 2025",
    description:
      "Information Assurance Technical Level II designation held in conjunction with CompTIA Security+. Qualifies for privileged access on DoD information systems.",
  },
];