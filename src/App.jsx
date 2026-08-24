import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { navItems } from './data.js';

export default function App() {
  const [activeId, setActiveId] = useState(navItems[0].id);

  // Tracks which section is currently in view so the nav can expose the
  // user's location within the page (SC 2.4.8 Location) via aria-current,
  // in addition to the visible section headings.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeId={activeId} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
