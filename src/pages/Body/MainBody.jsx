import LandingPage from "../Landing/LandingPage";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";

const MainBody = () => {
  return (
    <main>
      <section id="home">
        <Header />
        <Sidebar />
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default MainBody;
