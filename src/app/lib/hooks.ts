import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../context/active-section';
import type { SectionName } from './types';


export function useSectionTimeOutForClick( sectionName : SectionName, threshold = 0.555) {
    const {ref, inView} = useInView({
        threshold,
      });
    //   import state here
      const { setActiveSection, timeOfLastClick } = useActiveSection();
    
      useEffect(() => {
    
     
     if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
     }
    //  state array entered here dependency array
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,

    };

}
