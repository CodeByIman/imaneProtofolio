import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gestion Résidence",
    description: "Web application designed to streamline student residence management by automating administrative tasks, improving communication, and enhancing operational efficiency.",
    technologies: ["Spring Boot", "React", "Tailwind CSS"],
    video: "https://player.vimeo.com/video/1059408443?h=cf001cf941&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    link: "https://github.com/CodeByIman/gestion-residence",
    color: "#00a8cc"
  },
  {
    title: "Search Apartment Near University",
    description: "Interactive application helping students find optimal accommodations with proximity filtering and neighborhood safety analytics.",
    technologies: ["Django", "React", "Tailwind CSS"],
    video: "https://player.vimeo.com/video/1064447800?h=3fee748ae3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    link: "https://github.com/CodeByIman/djangoProject",
    color: "#7b2cbf"
  },
  {
    title: "Coachify – Social Media for Coaches & Clients",
    description: "Web platform transforming online coaching through interactive engagement and flexible learning experiences.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    video: "https://player.vimeo.com/video/1059354628?h=f5a8f69658&badge=0&autopause=0&player_id=0&app_id=58479",
    link: "https://github.com/CodeByIman/coachify",
    color: "#ff6a3d"
  },
];

// Custom hook to detect if element is in viewport
function useOnScreen(ref, threshold = 0.3) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
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

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className="w-full mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-[#1a1a2e] border rounded-lg shadow-lg overflow-hidden relative"
        style={{
          borderColor: project.color,
          boxShadow: isHovered ? `0 10px 25px -5px ${project.color}40` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Use a column layout for mobile and a row layout for desktop */}
        <div className="flex flex-col md:flex-row">
          {/* Video frame - Full width on mobile, 45% on desktop for better proportion */}
          <div className="md:w-[45%] overflow-hidden">
            {/* Fixed: Using a container with padding-top percentage to maintain aspect ratio */}
            <div className="relative" style={{ paddingTop: '75%' }}>
              <div
                className="absolute inset-0 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${project.color}10, ${project.color}30, ${project.color}10)`,
                  animation: 'shimmer 1.5s infinite'
                }}
              ></div>

              <iframe
                src={project.video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title={project.title}
              ></iframe>
            </div>
          </div>

          {/* Content section - full width on mobile, 55% on desktop */}
          <div className="md:w-[55%] p-6 md:p-8 flex flex-col justify-between">
            {/* Decorative corner accents with better positioning */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-70" style={{ borderColor: project.color }}></div>

            <div>
              {/* Title with animated underline on hover */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2" style={{ color: project.color }}>{project.title}</h3>
                <div
                  className="h-px mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: project.color,
                    width: isHovered ? "100%" : "0%"
                  }}
                ></div>
              </div>

              {/* Description with consistent line height and adjusted spacing */}
              <p className="text-[#e0e0e0] mb-6 text-base md:text-lg leading-relaxed">{project.description}</p>

              {/* Tech stack with better spacing and alignment */}
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3" style={{ color: project.color }}>Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full text-white font-medium"
                      style={{ backgroundColor: `${project.color}90` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Button with better positioning and consistent margin */}
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 font-semibold rounded-md text-[#1a1a2e] relative overflow-hidden group flex items-center justify-center transition-transform duration-200"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="relative z-10">View Project</span>

                  {/* Button background animation */}
                  <span
                    className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-500"
                  ></span>

                  {/* Right arrow icon */}
                  <svg
                    className="ml-2 w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5-5 5M5 12h13"></path>
                  </svg>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef(null);
  const isInView = useOnScreen(titleRef, 0.1);
  const titleLetters = "MY PROJECTS".split("");

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-[#1a1a2e] text-[#e0e0e0] font-mono relative overflow-hidden">
      {/* Background grid effect - matching other sections */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="space-y-12">
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
                  className="inline-block px-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider"
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
              animate={isInView ? { width: "80%", opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#00a8cc] to-transparent rounded-full mb-6"
            />

            {/* Subtitle with typing effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg text-center max-w-3xl text-[#a0a0d0] relative px-4"
            >
              <span className="relative inline-block">
                <span>Cutting-edge expertise driving innovation across multiple domains</span>
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

          {/* Projects container with better spacing */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;