import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projects } from "./assets/data";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />

      <section className="projects" id="projects">
        <h2 className="projects-heading">
          <span className="heading-num">02.</span> My Projects
        </h2>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
