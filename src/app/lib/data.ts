
import React from "react";
import { FaReact } from "react-icons/fa";
import { GiComputing } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";

import easImg from "/public/eas.png";
import coincreteImg from '/public/coincrete.png';
import cftmarketImg from '/public/cftmarket.png';
import commandImg from '/public/command.png';
import applianceImg from '/public/appliance.png';


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
    icon: React.createElement(FaReact),
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
    title: "Front-End Developer",
    location: "Web3",
    description:
      "I have created multipe diffrent front ends and back ends for many projects through word of mouth. Working with leading dapp's in the web3 industry",
    icon: React.createElement(FaReact),
    date: "2021 - Present",

  },
  {
    title: "Full-Stack Developer",
    location: "Web3",
    description:
      "I'm  a full-stack developer working as a freelancer. Security focused!🔐 Refrences are needed to secure work in web3.",
    icon: React.createElement(GiOpenTreasureChest),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: 'Appliance Consult',
    description:
      "Full stack app. Secure 100 years of appliance repair advise with a click of a button. Storing all data in a DB to incorperate a AI solution",
      tags: ["React", "Next.js",  "Tailwind",  "Rust", "MongoDB", "API", "LLM", "AI", "Prisma"],
       imageUrl: applianceImg,
  },
  {
    title: "EAS",
    description:
      "I was brought on as the lead dev. Word of mouth from previous projects led me to become the lead dev for EAS.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Rust"],


    imageUrl: easImg,


  },
  {
    title: "Command Center",
    description: 
      "I was brought on as the lead developer. We are building a full-stack app with a indexed web3 wallet tracker. We will implement real time data that show wallet holdings across chains. Defi options across chains will be implemented.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity", "Postgres", "AI-LLM"],
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
    tags: ["React", "Next.js", "Solidity", "Rust", "Framer", "SQL", "RPC", "NODE"],
    imageUrl: cftmarketImg,
  },
] as const;


export const skillsData = [
  "JavaScript",

  "React",
  "Typescript",
  "Next.js",
  "HTML",
  "CSS",
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