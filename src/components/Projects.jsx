import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gestion Résidence",
    description: "Intelligent platform for managing student residences with advanced booking system and real-time maintenance tracking capabilities.",
    technologies: ["Spring Boot", "React", "Tailwind CSS"],
    video: "https://player.vimeo.com/video/1059408443?h=cf001cf941&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    link: "https://github.com/CodeByIman/gestion-residence",
    color: "#00a8cc"
  },
  {
    title: "Search Apartment Near University",
    description: "Interactive application helping students find optimal accommodations with proximity filtering and neighborhood safety analytics.",
    technologies: ["Django", "React", "Tailwind CSS"],
    video: "https://player.vimeo.com/video/1059354628?h=f5a8f69658&badge=0&autopause=0&player_id=0&app_id=58479",
    link: "https://github.com/CodeByIman/djangoProject",
    color: "#7b2cbf"
  },
  {
    title: "Coachify – Social Media for Coaches & Clients",
    description: "Revolutionary connection platform bridging fitness coaches and clients with personalized program sharing and progress visualization.",
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
        <div className="flex flex-col lg:flex-row">
          {/* Video frame - Takes 40% on large screens, full width on small */}
          <div className="lg:w-2/5 overflow-hidden relative">
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
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title={project.title}
              ></iframe>
            </div>
          </div>

          {/* Content section - Takes 60% on large screens, full width on small */}
          <div className="lg:w-3/5 p-6">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-70" style={{ borderColor: project.color }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-70" style={{ borderColor: project.color }}></div>

            {/* Title with animated underline on hover */}
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2" style={{ color: project.color }}>{project.title}</h3>
              <div
                className="h-px bg-current mb-4 transition-all duration-300"
                style={{
                  backgroundColor: project.color,
                  width: isHovered ? "100%" : "0%"
                }}
              ></div>
            </div>

            {/* Description */}
            <p className="text-[#e0e0e0] mb-6 text-lg">{project.description}</p>

            {/* Tech stack */}
            <div className="mb-8">
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

            {/* Button with hover effect */}
            <div className="mt-4 relative z-10">
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
  return (
    <section className="p-12 bg-[#1a1a2e] text-[#e0e0e0] font-mono border-t-2 border-[#00a8cc] relative overflow-hidden">
      {/* Background grid effect - matching other sections */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-12">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 relative z-10"
          >
            <h2 className="text-4xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a8cc] to-[#00d4ff] pb-2">
                &lt; // My Completed Projects /&gt;
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#00a8cc] to-transparent rounded-full mt-2 mx-auto" style={{ width: '60%', maxWidth: '400px' }} />
          </motion.div>

          <div className="space-y-16">
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