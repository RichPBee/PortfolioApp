import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App(): React.JSX.Element {
  return (
    <main className="MainPage">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App
