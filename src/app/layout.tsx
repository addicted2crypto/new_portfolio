import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionProvider from './context/active-section';
import Header from './components/header';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer';
import Toggledarkmode from './components/toggle-darkmode';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William | My Portfolio!",
  description: "William is the dev that you want at your company.",
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
        <div className='bg-[#e7ffe1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75] pt-28'>
        </div>
        <div className='bg-[#c1d7fe] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'>
        </div>
        {/* <ThemeContextProvider */}
        <ActiveSectionProvider>
       <Header />
        {children}
        </ActiveSectionProvider>

        <Toaster position='top-center'/>
        <Footer />
        <Toggledarkmode />
        </body>
    </html>
  );
}
