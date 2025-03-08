import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
    <section className="p-12 bg-[#1a1a2e] text-center font-mono border-t-2 border-[#00a8cc] relative overflow-hidden">
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
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-white inline-block relative"
          >
            <span className="relative z-10">// Contact Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00a8cc] to-[#0088a8]"></span>
          </motion.h2>

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
    </section>
  );
};

export default Contact;