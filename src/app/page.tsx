import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <div className="noise">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
