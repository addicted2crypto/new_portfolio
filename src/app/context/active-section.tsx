"use client"

import React, { createContext, useContext, useState } from 'react';
import { links } from '../lib/data';

type SectionName = (typeof links)[number]["name"];

type ActiveSectionProviderProps = {
   children: React.ReactNode 
};

type ActiveSectionType = {
   activeSection: SectionName;
   setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
   timeOfLastClick: number;
   setTimeOfLastClick: React.Dispatch<React.SetStateAction<Number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionType | null>(null);

export default function ActiveSectionProvider({
    children,
 } : ActiveSectionProviderProps) {

 
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
   const [timeOfLastClick, setTimeOfLastClick] = useState(0)

   return  (
   <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
   }}
   >
      {children}
   </ActiveSectionContext.Provider>
   );
}

 export function useActiveSection() {
   const context = useContext(ActiveSectionContext);

   if( context === null ){
      throw new Error(
         "useActiveSection must be used within an ActiveSectionProvider"
      );
   }
   return context;
}