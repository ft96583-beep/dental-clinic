import { motion } from 'motion/react';
import { Logo } from './Logo';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        const timer = setTimeout(() => {
          onComplete();
        }, 1800);
        return () => clearTimeout(timer);
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center p-8 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl"
      >
        <div className="filter brightness-0 invert scale-125 mb-4">
          <Logo />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
