
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Faq } from './components/Faq';
import { Pricing } from './components/Pricing';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { FormDemo } from './components/Form';
import { ScrollToTopButton } from './components/Scroll';






export default async function Home() {

  return (
    <>

    
      <Navbar />
      <Hero />
     
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
           
        <Features />
        <Faq />
        <Pricing />
        <FormDemo />
        <Cta />
        <Footer />
        <ScrollToTopButton />
      </div>

 
    </>
  );
}