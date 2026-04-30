import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionProvider from './context/active-section';
import Header from './components/header';
import './globals.css';
import Toggledarkmode from './components/toggleDark';
import DarkContextProvider from './context/darkmode-context';
import ScrollProgress from './components/scrollProgress';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Heeb | Full-Stack Engineer & Smart Contract Auditor",
  description: "Full-stack engineer and smart contract security auditor with 8+ years of production experience. DoD contractor, CompTIA Security+ | IAT II certified. Specializing in NestJS, Next.js, TypeScript, Solidity, Foundry, and Avalanche. 44-finding audit track record.",
  keywords: [
    "Full-Stack Engineer",
    "Smart Contract Auditor",
    "Web3 Security",
    "React Developer",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Solidity",
    "Foundry",
    "Avalanche",
    "OWASP",
    "DoD Contractor",
    "AI Developer",
    "Web3 Developer",
    "Software Engineer",
    "Blockchain Developer",
    "JavaScript",
  ],
  authors: [{ name: "William Heeb" }],
  creator: "William Heeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamsforeverportfolio.vercel.app/",
    title: "William Heeb — Full-Stack Engineer & Smart Contract Auditor",
    description: "Full-stack engineer and smart contract security auditor with 8+ years of production experience across federal health IT, Web3 infrastructure, and SaaS.",
    siteName: "William Heeb Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Heeb — Full-Stack Engineer & Smart Contract Auditor",
    description: "Full-stack engineer and smart contract auditor. DoD contractor. AVAX ecosystem. 44-finding audit track record.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
      bg-gray-50 text-gray-950 relative dark:bg-[#100f0f] dark:text-[#d6d6d6] `}>
        <ScrollProgress />
        <div className='bg-[#075738] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75] pt-28 dark:bg-[#1d3d15]'>
        </div>
        <div className='bg-[#3377ee] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#071e45]'>
        </div>

        <DarkContextProvider>
         <ActiveSectionProvider>
          <Header />
           {children}
         </ActiveSectionProvider>
         <Toggledarkmode />
        </DarkContextProvider>
       </body>
    </html>
  );
}
