import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import KonamiEaster from './components/ui/KonamiEaster';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorFollower from './components/layout/CursorFollower';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    const accentShift = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const hueShift = scrollProgress * 30;
      document.documentElement.style.setProperty('--accent', `hsl(${240 + hueShift}, 100%, 67%)`);
      document.documentElement.style.setProperty('--accent-hover', `hsl(${240 + hueShift}, 100%, 73%)`);
    };
    window.addEventListener('scroll', accentShift, { passive: true });
    return () => window.removeEventListener('scroll', accentShift);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="noise-overlay">
          <LoadingScreen />
          <ScrollProgress />
          <CursorFollower />
          <KonamiEaster />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
