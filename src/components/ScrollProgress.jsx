import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-edge"
      aria-hidden="true"
    >
      <div className="absolute inset-0 spectrum-gradient opacity-25" />
      <motion.div
        className="absolute inset-y-0 left-0 origin-left spectrum-gradient"
        style={{ scaleX }}
      />
    </div>
  );
}
