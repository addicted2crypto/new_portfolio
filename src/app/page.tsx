import Image from "next/image";
import Intro from './components/intro';
import SectionSeperator from './components/section-seperator';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionSeperator />
    </main>
  );
}
