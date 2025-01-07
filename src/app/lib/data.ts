
import React from "react";
import { FaReact } from "react-icons/fa";
import { GiComputing } from "react-icons/gi";
import { BiSolidFridge } from "react-icons/bi";

import { GiOpenTreasureChest } from "react-icons/gi";

import easImg from "/public/eas.png";
import coincreteImg from '/public/coincrete.png';
import cftmarketImg from '/public/cftmarket.png';
import commandImg from '/public/command.png';
import applianceImg from '/public/appliance.png';
import agentImg from '/public/agent.png';


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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Boss",
    location: "WorldWide",
    description:
    "I am the talented lead dev. I am the idea maker. I am testing payment paywalls and authorized routes for paid clients. Data collection MATTERS.",
    icon: React.createElement(BiSolidFridge),
    date: "oct 2022 - Present"
  },
  {
    title: "Full-Stack Lead Developer",
    location: "Seattle",
    description:
      "I am the lead developer for experience as a service. The begining of something huge.",
    icon: React.createElement(GiComputing),
    date: "2020 - Present",
  },
  {
    title: "Blockchain web3 team lead",
    location: "Web3",
    description:
      "I have created multiple different front  and back ends  that communicate with the blockchain for many projects. Working with leading dapp's in the web3 industry",
    icon: React.createElement(FaReact),
    date: "2021 - Present",

  },
  {
    title: "Full-Stack Developer",
    location: "Web3",
    description:
      "I'm  a full-stack developer working as a freelancer. Security focused!🔐 References are needed to secure work in web3. I'm building a lasting name for myself and my company!",
    icon: React.createElement(GiOpenTreasureChest),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: 'AI_Additions',
    description: 
    "We are facilitating AI_agents to any website. Any tech stack. Add a AI-Bot anywhere and with any api that fits the clients.",
    tags: ["C#", ".net", "Python", "AI", "LLM", "RAG", "Opensource", "JAVA", "JS", "CSS", "HTML"],
    imageUrl: agentImg,
  },
  {
    title: 'Appliance Consult',
    description:
      "Full stack app. Secured 100 years of appliance repair experience to facilitate advice with a 1 click of a button. Storing all data in a DB to incorperate a AI solution",
      tags: ["React", "Next.js",  "Tailwind",  "Rust", "MongoDB", "API", "LLM", "AI", "Prisma", "Stripe", "ORM", "Nodejs", "Drizzle"],
       imageUrl: applianceImg,
  },
  {
    title: "EAS",
    description:
      "I was brought on as the lead dev. Word of mouth from previous projects led me to become the lead dev for EAS.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS", "Rust","Stripe", "Blockchain"],


    imageUrl: easImg,


  },
  {
    title: "Command Center",
    description: 
      "I was brought on as the lead developer. We are building a full-stack app with the capability of indexing as a web3 wallet tracker. We will implement real time data that show wallet holdings across chains. Defi options across chains will be implemented.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "Postgres", "AI-LLM", "NodeJS"],
      imageUrl:  commandImg,
  },
  {
    title: "CoinCrete",
    description:
      " I am the front-end developer. We are creating from scratch all the needed features of a web3 dapp with security at the forefront.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "JavaScript", "SQL", "MongoDB", "Postgres"],
    imageUrl: coincreteImg,
  },
  {
    title: "CFT",
    description:
      "A new idea for amazing market pools and a interactive place that can be trusted. Indexing all transactions on a local RPC",
    tags: ["React", "Next.js", "Solidity", "Rust", "Framer", "SQL", "RPC", "NODE", "SQL"],
    imageUrl: cftmarketImg,
  },
] as const;


export const skillsData = [
  "JavaScript",
  "C#",
  "React",
  "Typescript",
  "Python",
  "RAG",
  "Git",
  ".net",
  "Next.js",
  "HTML",
  "CSS",
  "LLM",
  "CLI",
  "Rust",
  "Golang",
  "Solidity",
  "Node.js",
  "Python",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;