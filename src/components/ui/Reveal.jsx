import { useEffect, useRef } from 'react';

// Rises 32px and fades in once, using IntersectionObserver.
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
