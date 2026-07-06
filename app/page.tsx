import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Work from "@/components/Work";
import Offerings from "@/components/Offerings";
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
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
