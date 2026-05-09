import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../common/TestimonialCard';

const tilts = [-2, 1.5, -1, 2];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    let scrollPos = 0;

    const animate = () => {
      if (!isPaused) {
        scrollPos += 0.5;
        if (scrollPos >= scrollWidth) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="What People Say" subtitle="Feedback from clients and colleagues I've worked with" />
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="overflow-hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 px-6"
          style={{ width: 'max-content' }}
        >
          {duplicated.map((testimonial, i) => (
            <div key={`${testimonial.id}-${i}`} className="w-[320px] flex-shrink-0">
              <TestimonialCard testimonial={testimonial} tilt={tilts[i % tilts.length]} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
