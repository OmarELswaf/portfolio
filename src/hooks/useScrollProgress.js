import { useState, useEffect, useRef } from 'react';

export function useScrollProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const element = targetRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight;
      const endPoint = -elementHeight;

      if (elementTop >= startPoint) {
        setProgress(0);
        return;
      }
      if (elementTop <= endPoint) {
        setProgress(1);
        return;
      }

      const currentProgress = (startPoint - elementTop) / (startPoint - endPoint);
      setProgress(Math.min(1, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetRef]);

  return progress;
}

export function usePageScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(scrollTop / docHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
