import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Custom hook to detect if element is in viewport
function useOnScreen(ref, threshold = 0.3) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

const GitHubStats = () => {
  const titleRef = useRef(null);
  const isInView = useOnScreen(titleRef, 0.1);
  const titleLetters = "GITHUB STATS".split("");

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
    <section className="p-12 bg-[#1a1a2e] text-[#e0e0e0] font-mono relative overflow-hidden">
      {/* Background grid effect - matching other sections */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      <Helmet>
        <link rel="preconnect" href="https://github-readme-stats.vercel.app" />
      </Helmet>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* New advanced title design */}
        <div
          ref={titleRef}
          className="relative w-full max-w-4xl mx-auto mb-16 flex flex-col items-center z-20"
        >
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
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.05 * index,
                    ease: [0.215, 0.61, 0.355, 1]
                  }
                } : {}}
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
              <span>My code contributions and programming language proficiency</span>
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
                animate={isInView ? { scale: 1, opacity: [0, 1, 0.5] } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1 + (i * 0.1),
                  opacity: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    delay: 1 + (i * 0.1)
                  }
                }}
                className="w-2 h-2 rounded-full bg-[#00a8cc]"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e] p-4 rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 transition-all duration-300"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=CodeByIman&show_icons=true&theme=radical&border_color=00a8cc&bg_color=1a1a2e&title_color=00a8cc&icon_color=00a8cc&text_color=ffffff"
                alt="GitHub Stats"
                className="w-full max-w-md rounded-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a2e] p-4 rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 transition-all duration-300"
            >
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=CodeByIman&layout=compact&theme=radical&border_color=00a8cc&bg_color=1a1a2e&title_color=00a8cc&text_color=ffffff"
                alt="Top Languages"
                className="w-full max-w-md rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-6">
              Check out my GitHub profile for more projects and contributions!
              <span className="ml-2 inline-block animate-bounce">🚀</span>
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/CodeByIman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[#1a1a2e] text-[#00a8cc] font-bold rounded-lg border border-[#00a8cc] shadow-lg shadow-[#00a8cc]/20 hover:shadow-[#00a8cc]/40 hover:bg-[#00a8cc] hover:text-[#1a1a2e] transition-all duration-300"
            >
              Visit GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;