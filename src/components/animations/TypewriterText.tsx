import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypewriterText = ({ text, className = "", delay = 0, speed = 0.05 }: TypewriterTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" },
  };

  let letterIndex = 0;

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIdx) => {
        const letters = Array.from(word);
        const wordStart = letterIndex;
        letterIndex += letters.length + 1;

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {letters.map((letter, i) => (
              <motion.span
                key={`${wordIdx}-${i}`}
                custom={wordStart + i}
                variants={child}
              >
                {letter}
              </motion.span>
            ))}
            {wordIdx < words.length - 1 && (
              <motion.span
                key={`space-${wordIdx}`}
                custom={wordStart + letters.length}
                variants={child}
                className="whitespace-pre"
              >
                {" "}
              </motion.span>
            )}
          </span>
        );
      })}
    </motion.span>
  );
};
