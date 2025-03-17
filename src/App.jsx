import NavbarMain from "./components/Navbar/NavbarMain";
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import AboutMain from "./components/AboutMe/AboutMain";
import Myskillsmain from "./components/Myskills/Myskillsmain";
import SubSkills from "./components/Myskills/SubSkills";
import ExperienceMain from "./components/Experience/ExperienceMain";
import ProjectMain from "./components/Projects/ProjectMain";
import ContactMain from "./components/Contact/ContactMain";
import FooterMain from "./components/Footersection/FooterMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMain />
      <Myskillsmain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
}

export default App;
