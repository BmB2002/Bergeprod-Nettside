import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Work from "@/components/Work";
import Offerings from "@/components/Offerings";
import WebDesigns from "@/components/WebDesigns";
import Apps from "@/components/Apps";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Work />
        <Offerings />
        <WebDesigns />
        <Apps />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
