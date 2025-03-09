import React, { useEffect, useRef, useState } from "react";
import { FaPython, FaJava, FaDocker, FaReact, FaGitAlt, FaCode, FaCuttlefish, FaMicrochip, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiDjango, SiSpringboot, SiCplusplus, SiVite, SiKubernetes, SiAdobeillustrator, SiNumpy, SiApachekafka, SiApacheflink, SiAnsible, SiTerraform } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Data Science",
    emoji: "📊",
    description: "Processing and analyzing complex datasets to extract meaningful insights",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Hadoop", icon: <FaCode /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Flink", icon: <SiApacheflink /> }
    ]
  },
  {
    category: "Web Development",
    emoji: "🌐",
    description: "Creating responsive, modern web applications with cutting-edge technologies",
    items: [
      { name: "MERN Stack", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring Boot", icon: <SiSpringboot /> }
    ]
  },
  {
    category: "Programming",
    emoji: "💻",
    description: "Proficient in multiple programming paradigms and language ecosystems",
    items: [
      { name: "C", icon: <FaCuttlefish /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Assembler", icon: <FaMicrochip /> },
      { name: "Arduino", icon: <FaMicrochip /> }
    ]
  },
  {
    category: "DevOps & Tools",
    emoji: "🔧",
    description: "Automating deployment pipelines and optimizing infrastructure management",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> }
    ]
  }
];

// Title animation letters array
const titleLetters = "TECHNICAL ARSENAL".split("");

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);
  const titleRef = useRef(null);

  // Set up card refs
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, skills.length);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Title in-view detection
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => {
            if (!prev.includes(index)) {
              return [...prev, index].sort((a, b) => a - b);
            }
            return prev;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const calculateRotate = (event, cardRect) => {
    if (!cardRect) return { x: 0, y: 0 };

    // Get mouse position relative to card
    const x = event.clientX - cardRect.left;
    const y = event.clientY - cardRect.top;

    // Calculate rotation based on mouse position relative to card center
    const maxRotate = 8; // Max rotation in degrees
    const rotateY = ((x / cardRect.width) - 0.5) * maxRotate * 2;
    const rotateX = (((y / cardRect.height) - 0.5) * maxRotate * 2) * -1;

    return { x: rotateX, y: rotateY };
  };

  // Particles component for visual effects
  const Particles = ({ count = 15 }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: count }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 10 + 5;
          const delay = Math.random() * 2;

          return (
            <div
              key={i}
              className="absolute bg-[#00a8cc] rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3,
                transform: `translateY(0)`,
                animation: `float-particle ${duration}s infinite linear ${delay}s`
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="p-6 md:p-10 relative bg-[#1a1a2e] min-h-screen flex flex-col items-center text-[#e0e0e0] font-mono overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-[#00a8cc]"></div>
        ))}
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,168,204,0.15)_0%,transparent_60%)]"
          style={{
            transform: `translate(${(mousePosition.x / window.innerWidth - 0.5) * -20}px, ${(mousePosition.y / window.innerHeight - 0.5) * -20}px)`,
            transition: "transform 0.1s ease-out"
          }}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#00a8cc] to-transparent"
            style={{
              left: `${(i / 10) * 100}%`,
              opacity: 0.1 + (Math.sin(i / 3) * 0.05),
              animation: `pulse-line ${3 + i % 5}s infinite ease-in-out ${i * 0.2}s`
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00a8cc] to-transparent"
            style={{
              top: `${(i / 5) * 100}%`,
              opacity: 0.1 + (Math.cos(i / 2) * 0.05),
              animation: `pulse-line ${4 + i % 3}s infinite ease-in-out ${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* New advanced title design */}
      <div
        ref={titleRef}
        className="relative w-full max-w-4xl mb-16 flex flex-col items-center z-20"
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

      {/* Skills grid - same as before */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl relative z-10">
        {skills.map((skill, index) => {
          const isVisible = visibleCards.includes(index);

          return (
            <motion.div
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * visibleCards.indexOf(index),
                ease: "easeOut"
              }}
              className="relative group h-full"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onMouseMove={(e) => {
                if (cardRefs.current[index]) {
                  const rect = cardRefs.current[index].getBoundingClientRect();
                  const rotation = calculateRotate(e, rect);
                  cardRefs.current[index].style.transform = `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`;
                }
              }}
              style={{
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a8cc] to-[#004e7c] opacity-50 rounded-lg blur-sm group-hover:opacity-100 group-hover:blur transition-all duration-200" />

              <div className="p-4 md:p-6 bg-gradient-to-br from-[#16213e] to-[#0f172a] backdrop-blur-md border border-[#00a8cc]/30 rounded-lg shadow-xl relative h-full z-10 overflow-hidden flex flex-col">
                <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Particles count={10} />
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#00a8cc]/5 blur-xl group-hover:bg-[#00a8cc]/10 group-hover:blur-2xl transition-all duration-300" />

                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 flex items-center text-[#00a8cc] group-hover:text-[#00d4ff] transition-colors duration-200">
                  <span className="mr-2 md:mr-3 text-xl md:text-2xl transform group-hover:scale-125 transition-transform duration-200">
                    {skill.emoji}
                  </span>
                  {skill.category}
                </h3>

                <p className="text-[#a0a0d0] mb-4 md:mb-6 text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                  {skill.description}
                </p>

                {/* Skill items grid layout */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      animate={activeCard === index ?
                        { x: 0, opacity: 1, transition: { delay: i * 0.03, duration: 0.2 } } :
                        { x: 0, opacity: 1, transition: { duration: 0.2 } }}
                      className="flex items-center justify-start group/item"
                    >
                      <span className="text-lg md:text-xl text-[#00a8cc] mr-2 transform group-hover/item:rotate-12 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="text-sm md:text-base text-[#e0e0e0] group-hover/item:text-white transition-colors duration-200">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Quick-response particles for active cards */}
                {activeCard === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const size = Math.random() * 3 + 2;
                      return (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50
                          }}
                          animate={{
                            opacity: [0, 0.7, 0],
                            x: Math.random() * 150 - 75,
                            y: Math.random() * 150 - 75
                          }}
                          transition={{
                            duration: Math.random() * 1.5 + 1,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          className="absolute bg-[#00a8cc] rounded-full"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cursor effect */}
      <div
        className="fixed w-6 h-6 pointer-events-none mix-blend-screen z-50 opacity-75"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,168,204,0.8) 0%, rgba(0,168,204,0) 70%)',
          filter: 'blur(2px)',
          transition: 'opacity 0.2s ease, left 0.05s linear, top 0.05s linear'
        }}
      />

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.4;
          }
          50% {
            transform: translateY(-100vh) translateX(${Math.random() * 50 - 25}px);
          }
        }
        
        @keyframes pulse-line {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;