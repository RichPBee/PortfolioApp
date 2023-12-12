import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import { useEffect, useState } from "react";
import ScrollUp from "./components/ScrollUp";

function App(): React.JSX.Element {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleScrollUpBtn = () => { 
      window.scrollY > 150 ? setShowButton(true) : setShowButton(false);
    }

    window.addEventListener('scroll', toggleScrollUpBtn);

    return () => {
      window.removeEventListener('scroll', toggleScrollUpBtn);
    }
  }, [])

  return (
    <main className="MainPage">
      {showButton && (
        <ScrollUp />
      )}
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
