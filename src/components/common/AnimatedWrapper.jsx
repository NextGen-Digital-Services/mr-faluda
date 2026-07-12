import { motion } from 'framer-motion';

export default function AnimatedWrapper({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 30,
  className = "" 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {children}
    </motion.div>
  );
}
