import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const GitHubStats = () => {
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
    <section className="p-12 bg-[#1a1a2e] text-[#e0e0e0] font-mono border-t-2 border-[#00a8cc] relative overflow-hidden">
      {/* Background grid effect - matching other sections */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>
      <Helmet>
        <link rel="preconnect" href="https://github-readme-stats.vercel.app" />
      </Helmet>

      {/* Background grid effect - same as contact section */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-white inline-block relative"
          >
            <span className="relative z-10">// GitHub Statistics</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00a8cc] to-[#0088a8]"></span>
          </motion.h2>

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