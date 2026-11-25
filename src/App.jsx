import { ThemeProvider } from './context/ThemeContext';
import SideRail from './components/layout/SideRail';
import Footer from './components/layout/Footer';
import TaglineReveal from './components/ui/TaglineReveal';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <SideRail />
      <main id="main">
        <Hero />
        <TaglineReveal />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
