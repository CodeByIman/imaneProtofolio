import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const titleRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const titleLetters = "Contact Me".split("");

  // Manual implementation of inView detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="p-12 bg-[#1a1a2e] text-center font-mono relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* New advanced title design */}
          <div ref={titleRef} className="relative w-full max-w-4xl mb-16 flex flex-col items-center z-20">
            {/* Glowing background element */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00a8cc]/0 via-[#00a8cc]/10 to-[#00a8cc]/0 blur-xl opacity-70 rounded-full transform -translate-y-1/4"></div>

            {/* Animated title with letter animation */}
            <div className="relative flex justify-center mb-6 overflow-hidden">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={isInView ? {
                    y: 0,
                    opacity: 1
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * index,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="inline-block px-1 text-4xl sm:text-5xl md:text-4xl font-extrabold tracking-wider"
                  style={{
                    textShadow: '0 0 15px rgba(0, 168, 204, 0.8), 0 0 10px rgba(0, 168, 204, 0.4)',
                    color: letter === " " ? 'transparent' : '#ffffff'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated decorative line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "100%", opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#00a8cc] to-transparent rounded-full mb-6"
            />

            {/* Subtitle with typing effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg text-center max-w-3xl text-[#a0a0d0] relative"
            >
              <span className="relative inline-block">
                <span>Ready to collaborate and discuss new opportunities</span>
                <motion.span
                  initial={{ left: 0 }}
                  animate={isInView ? { left: "105%" } : {}}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 left-0 w-full bg-[#1a1a2e]"
                  style={{ mixBlendMode: "darken" }}
                />
              </span>
            </motion.p>

            {/* Animated tech dots decoration */}
            <div className="flex space-x-2 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? {
                    scale: 1,
                    opacity: 1
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 1 + (i * 0.1)
                  }}
                  style={{
                    opacity: isInView ? undefined : 0,
                    animation: isInView ? 'pulse 2s infinite alternate' : 'none',
                    animationDelay: `${1 + (i * 0.1)}s`
                  }}
                  className="w-2 h-2 rounded-full bg-[#00a8cc]"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e] p-6 rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3 text-[#00a8cc]">📧</div>
                <div className="text-white font-bold mb-2">Email</div>
                <a
                  href="mailto:imanebouboul0@gmail.com"
                  className="text-[#00a8cc] hover:text-white hover:underline transition-colors duration-300 text-sm"
                >
                  imanebouboul0@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e] p-6 rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3 text-[#00a8cc]">🔗</div>
                <div className="text-white font-bold mb-2">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/imane-bouboul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a8cc] hover:text-white hover:underline transition-colors duration-300 text-sm"
                >
                  Imane Bouboul
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e] p-6 rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3 text-[#00a8cc]">💻</div>
                <div className="text-white font-bold mb-2">GitHub</div>
                <a
                  href="https://github.com/CodeByIman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a8cc] hover:text-white hover:underline transition-colors duration-300 text-sm"
                >
                  CodeByIman
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-gray-400 italic text-sm font-light"
          >
            <p className="max-w-md mx-auto leading-relaxed">
              Thanks for visiting my portfolio! I'm always open to new opportunities and collaborations.
              Looking forward to connecting with you!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Contact;