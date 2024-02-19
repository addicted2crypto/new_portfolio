
import { Toaster } from 'react-hot-toast';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Intro from './components/intro';
import MyProjects from './components/my-projects';
import SectionSeperator from './components/section-seperator';
import Skills from './context/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionSeperator />
      <AboutMe />
      <MyProjects />
      <Skills />
      <Experience />
      <Contact />
      <Toaster position='top-center'/>
        <Footer />
    </main>
  );
}
