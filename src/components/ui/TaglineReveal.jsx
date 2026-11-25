import { useEffect, useRef } from 'react';

const words = "I build web apps from the database schema to the interface. I care about the parts that never make the screenshot: authentication, data design and a test suite that passes.".split(' ');

export default function TaglineReveal() {
  const root = useRef(null);
  useEffect(() => {
    const spans = root.current.querySelectorAll('.tag-word');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { spans.forEach((s) => (s.style.opacity = 1)); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.style.opacity = 1; io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -40% 0px' });
    spans.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <section aria-label="What I do" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p ref={root} className="heading-3 max-w-[680px]">
          {words.map((w, i) => (
            <span key={i} className="tag-word inline-block mr-[0.25em] transition-opacity duration-500 ease-base" style={{ opacity: 0.3 }}>{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
