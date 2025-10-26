import "./layout.css";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import Hereo from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
function Layout() {
  return (
    <div className="app-container">
      <div className="border">
        <header className="header-left">
          <ThemeToggle />
        </header>

        <Hereo />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default Layout;
