import { ThemeProvider } from './context/ThemeContext';
import SideRail from './components/layout/SideRail';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="lg:flex lg:max-w-6xl lg:mx-auto lg:gap-12 px-6 md:px-12">
        <SideRail />
        <main className="lg:flex-1 lg:py-24 min-w-0">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
