
import { Toaster } from 'react-hot-toast';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Intro from './components/intro';
import MyProjects from './components/myProjects';
import SectionSeperator from './components/sectionSeperator';
import Skills from './context/skills';
import Certifications from './components/certifications';
import Terminal from './components/Terminal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionSeperator />
      <AboutMe />
      <MyProjects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Toaster position='top-center'/>
      <Terminal />
      <Footer />
    </main>
  );
}
