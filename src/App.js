import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from ".//components/Experience";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />
    </div>
  );
}

export default App;
