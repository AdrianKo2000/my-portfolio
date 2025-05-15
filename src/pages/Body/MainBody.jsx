import LandingPage from "../Landing/LandingPage";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../About/About";

const MainBody = () => {
  return (
    <main>
      <section id="home" className=" h-auto lg:h-screen">
        <Header />
        <Sidebar />
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">skills</section>
      <section id="projects">projects</section>
      <section id="contact">contact</section>
    </main>
  );
};

export default MainBody;
