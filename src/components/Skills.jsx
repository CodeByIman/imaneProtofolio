import React, { useEffect, useRef, useState } from "react";
import { FaPython, FaJava, FaDocker, FaReact, FaGitAlt, FaCode, FaCuttlefish, FaMicrochip, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiDjango, SiSpringboot, SiCplusplus, SiVite, SiKubernetes, SiAdobeillustrator, SiNumpy, SiApachekafka, SiApacheflink, SiAnsible, SiTerraform, SiAngular } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Data Science",
    emoji: "📊",
    description: "Processing and analyzing complex datasets to extract meaningful insights",
    items: [
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "Scikit-learn", icon: <SiScikitlearn />, level: 85 },
      { name: "TensorFlow", icon: <SiTensorflow />, level: 80 },
      { name: "NumPy", icon: <SiNumpy />, level: 88 },
      { name: "Hadoop", icon: <FaCode />, level: 75 },
      { name: "Kafka", icon: <SiApachekafka />, level: 82 },
      { name: "Flink", icon: <SiApacheflink />, level: 78 }
    ]
  },
  {
    category: "Web Development",
    emoji: "🌐",
    description: "Creating responsive, modern web applications with cutting-edge technologies",
    items: [
      { name: "MERN Stack", icon: <FaReact />, level: 88 },
      { name: "Tailwind CSS", icon: <FaCss3Alt />, level: 92 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 95 },
      { name: "HTML", icon: <FaHtml5 />, level: 98 },
      { name: "Django", icon: <SiDjango />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 80 }
    ]
  },
  {
    category: "Programming",
    emoji: "💻",
    description: "Proficient in multiple programming paradigms and language ecosystems",
    items: [
      { name: "C", icon: <FaCuttlefish />, level: 85 },
      { name: "C++", icon: <SiCplusplus />, level: 82 },
      { name: "Java", icon: <FaJava />, level: 88 },
      { name: "Python", icon: <FaPython />, level: 92 },
      { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
      { name: "Assembler", icon: <FaMicrochip />, level: 75 },
      { name: "Arduino", icon: <FaMicrochip />, level: 80 }
    ]
  },
  {
    category: "DevOps & Tools",
    emoji: "🔧",
    description: "Automating deployment pipelines and optimizing infrastructure management",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 88 },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 82 },
      { name: "Ansible", icon: <SiAnsible />, level: 78 },
      { name: "Terraform", icon: <SiTerraform />, level: 80 },
      { name: "Vite", icon: <SiVite />, level: 85 },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator />, level: 75 }
    ]
  }
];

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
      className="p-10 relative bg-[#1a1a2e] min-h-screen flex flex-col items-center text-[#e0e0e0] font-mono overflow-hidden"
    >
      {/* Background grid effect (added from Contact component) */}
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
            transition: "transform 0.1s ease-out"  // Faster transition
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

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold mb-8 relative z-10"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a8cc] to-[#00d4ff] pb-2">
          &lt; Skills &amp; Technologies /&gt;
        </span>
        <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00a8cc] to-transparent rounded-full" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-lg text-center max-w-3xl mb-12 text-[#a0a0d0]"
      >
        Expertise across various domains, continuously expanding my technological horizons.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl relative z-10">
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
                delay: 0.15 * visibleCards.indexOf(index), // Sequential animation based on card visibility
                ease: "easeOut"
              }}
              className="relative group"
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
                transition: 'transform 0.1s ease-out' // Faster transition
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a8cc] to-[#004e7c] opacity-50 rounded-lg blur-sm group-hover:opacity-100 group-hover:blur transition-all duration-200" />

              <div className="p-6 bg-gradient-to-br from-[#16213e] to-[#0f172a] backdrop-blur-md border border-[#00a8cc]/30 rounded-lg shadow-xl relative h-full z-10 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Particles count={15} />
                </div>

                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-[#00a8cc]/5 blur-xl group-hover:bg-[#00a8cc]/10 group-hover:blur-2xl transition-all duration-300" />

                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#00a8cc] group-hover:text-[#00d4ff] transition-colors duration-200">
                  <span className="mr-3 text-2xl transform group-hover:scale-125 transition-transform duration-200">
                    {skill.emoji}
                  </span>
                  {skill.category}
                </h3>

                <p className="text-[#a0a0d0] mb-6 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                  {skill.description}
                </p>

                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      animate={activeCard === index ?
                        { x: 0, opacity: 1, transition: { delay: i * 0.03, duration: 0.2 } } :
                        { x: 0, opacity: 1, transition: { duration: 0.2 } }}
                      className="flex items-center justify-between text-lg font-medium group/item"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl text-[#00a8cc] mr-3 transform group-hover/item:rotate-12 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="text-[#e0e0e0] group-hover/item:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>

                      <div className="h-1.5 w-24 bg-[#0c1429] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={activeCard === index ? { width: `${item.level}%` } : { width: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.03 }}
                          className="h-full bg-gradient-to-r from-[#00a8cc] to-[#00d4ff] rounded-full"
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>

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
                            duration: Math.random() * 1.5 + 1, // Faster animation
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
          transition: 'opacity 0.2s ease, left 0.05s linear, top 0.05s linear' // Faster cursor
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