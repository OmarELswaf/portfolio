import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CursorFollower() {
  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (!isTouch) setVisible(true);
  }, []);

  useEffect(() => {
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouchDevice || !visible) return null;

  return (
    <>
      {/* Outer circle */}
      <motion.div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full mix-blend-difference"
        animate={{
          x: x - (hovering ? 30 : 20),
          y: y - (hovering ? 30 : 20),
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40,
          backgroundColor: hovering ? 'rgba(108, 99, 255, 0.3)' : 'transparent',
          borderWidth: hovering ? 0 : 2,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.2 }}
        style={{ borderColor: 'var(--accent)', borderStyle: 'solid' }}
      />
      {/* Inner dot */}
      <motion.div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full mix-blend-difference"
        style={{ backgroundColor: 'var(--accent)' }}
        animate={{
          x: x - (clicking ? 3 : 4),
          y: y - (clicking ? 3 : 4),
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 20, mass: 0.1 }}
      />
    </>
  );
}
