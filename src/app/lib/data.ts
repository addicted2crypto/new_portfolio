
import React from "react";
import { FaReact } from "react-icons/fa";
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

import easImg from "/public/eas.png";
import coincreteImg from '/public/coincrete.png';
import cftmarketImg from '/public/cftmarket.png';
import commandImg from '/public/command.png';
import applianceImg from '/public/appliance.png';
import agentImg from '/public/agent.png';
import learningtutorImg from '/public/learningtutor.png';
import dhaImg from '/public/dha.png';


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
    title: "Lead Full-Stack Developer",
    location: "Remote",
    description:
      "Leading development of enterprise SaaS platforms with focus on payment processing, authentication systems, and data analytics. Architecting secure APIs and implementing industry-standard security practices for client applications. Managing full development lifecycle from requirements to deployment.",
    icon: React.createElement(GiComputing),
    date: "Oct 2022 - Present"
  },
  {
    title: "Full-Stack Lead Developer",
    location: "Seattle, WA",
    description:
      "Lead developer for Experience as a Service (EAS) platform. Architected scalable full-stack solutions serving B2B clients. Built core features including user authentication, payment integration, and real-time data processing using modern web technologies.",
    icon: React.createElement(GiComputing),
    date: "2020 - 2022",
  },
  {
    title: "Blockchain Developer & Team Lead",
    location: "Remote",
    description:
      "Led blockchain development team building decentralized applications (dApps) for Web3 projects. Designed and implemented smart contracts and frontend interfaces that interact with multiple blockchain networks. Collaborated with leading Web3 companies on production deployments.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",

  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Provided full-stack development services with emphasis on security and scalable architecture. Built custom web applications for clients in various industries. Specialized in React, Node.js, and blockchain integrations while maintaining strong focus on code quality and security best practices.",
    icon: React.createElement(GiOpenTreasureChest),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: 'Defense Health Agency — DoD Contractor',
    description:
    "Software Engineer supporting health.mil and TRICARE platforms through government contracts (Semper Valens Solutions → Chenega Corporation). Shipping DoD Health IT features on Hyperledger Iroha—the first government blockchain deployment in production. Built a NestJS SDK adopted by 4 DoD teams, reducing boilerplate setup from 2 days to 3 hours. Maintaining enterprise CMS sites with JavaScript, C#, and Sitecore while implementing security protocols including end-to-end TLS, VPN tunnels, and WAF configurations.",
    tags: ["NestJS", "Hyperledger Iroha", "C#", "JavaScript", "Sitecore CMS", "TypeScript", "Security+", ".NET", "Node.js", "DoD"],
    imageUrl: dhaImg,
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
    title: 'Anything_AI',
    description:
    "Facilitating MCP tools with agentic AI integration for any website and tech stack. Enables seamless AI-Bot communication and web scraping capabilities that adapt to client-specific APIs and requirements. Flexible architecture supports multiple programming languages and frameworks.",
    tags: ["C#", ".net", "Python", "JavaScript", "AI", "LLM", "RAG", "Opensource", "JAVA", "API", "Fine-Tune"],
    imageUrl: agentImg,
  },
  {
    title: 'Appliance Consult',
    description:
      "Full-stack application digitizing a century of appliance repair expertise into an AI-powered advisory platform. Users receive instant expert repair guidance with one click. Built with modern tech stack integrating payment processing and comprehensive database architecture to deliver intelligent repair recommendations.",
      tags: ["React", "Next.js",  "Tailwind",  "Rust", "MongoDB", "API", "LLM", "AI", "Prisma", "Stripe", "ORM", "Node.js", "Drizzle"],
       imageUrl: applianceImg,
  },
  {
    title: "EAS",
    description:
      "Brought on as lead developer for Experience as a Service platform through referrals from previous successful projects. Architected scalable full-stack solution with payment integration, authentication systems, and blockchain capabilities to serve B2B clients.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js", "Rust","Stripe", "Blockchain"],
    imageUrl: easImg,
  },
  {
    title: "Command Center",
    description:
      "Led development team building a comprehensive Web3 wallet tracker with multi-chain indexing capabilities. Real-time data dashboard displays wallet holdings across multiple blockchain networks with integrated DeFi options for cross-chain operations.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "Postgres", "AI-LLM", "Node.js"],
      imageUrl:  commandImg,
  },
  {
    title: "CoinCrete",
    description:
      "Joined a growing development team building a Web3 dApp from the ground up with security as the primary focus. Implemented core features including smart contract integration, user authentication, and multi-chain wallet connectivity using modern full-stack technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "JavaScript", "MongoDB", "Postgres"],
    imageUrl: coincreteImg,
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
  ".NET",
  "Django",
  // Databases & ORMs
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  // State & APIs
  "Redux",
  "GraphQL",
  "Apollo",
  // AI/ML
  "LLM",
  "RAG",
  // Tools
  "Git",
  "CLI",
] as const;

export const certificationsData = [
  {
    name: "CompTIA Security+ Certified",
    issuer: "CompTIA",
    date: "October 28, 2025",
    credentialId: "COMP001022876354",
    expirationDate: "October 24, 2028",
    credentialUrl: "http://verify.CompTIA.org",
  },
] as const;