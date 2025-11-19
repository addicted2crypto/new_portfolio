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
  title: "William Heeb | Full-Stack Developer | React, TypeScript, AI & Web3",
  description: "Full-stack software engineer with 5+ years building production-ready web applications. Specialized in React, Next.js, TypeScript, AI integration, and Web3 development. CompTIA Security+ certified. Open to new opportunities.",
  keywords: ["Full-Stack Developer", "React Developer", "TypeScript", "Next.js", "AI Developer", "Web3 Developer", "Software Engineer", "Blockchain Developer", "JavaScript"],
  authors: [{ name: "William Heeb" }],
  creator: "William Heeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamsforeverportfolio.vercel.app/",
    title: "William Heeb - Full-Stack Developer Portfolio",
    description: "Full-stack developer specializing in React, TypeScript, AI, and Web3 technologies. 5+ years of experience building scalable applications.",
    siteName: "William Heeb Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Heeb - Full-Stack Developer",
    description: "Full-stack developer specializing in React, TypeScript, AI, and Web3",
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
