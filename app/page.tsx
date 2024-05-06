
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; 
import { Features } from './components/Features';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features/>
      </div>
    </>
  );
}