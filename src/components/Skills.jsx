import React from "react";
import { FaPython, FaJava, FaDocker, FaReact, FaGitAlt, FaCode, FaCuttlefish, FaMicrochip, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiDjango, SiSpringboot, SiCplusplus, SiVite, SiKubernetes, SiAdobeillustrator, SiNumpy, SiApachekafka, SiApacheflink, SiAnsible, SiTerraform, SiAngular } from "react-icons/si";

const skills = [
  {
    category: "Data Science", items: [
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
    category: "Web Development", items: [
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
    category: "Programming", items: [
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
    category: "DevOps & Tools", items: [
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

const Skills = () => {
  return (
    <section className="p-10 bg-[#1a1a2e] min-h-screen flex flex-col items-center text-[#e0e0e0] font-mono border-t border-[#00a8cc]">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#00a8cc] pb-2">
        [ Skills & Technologies ]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-[#16213e] border border-[#00a8cc] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#00a8cc]/50"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center text-[#00a8cc]">
              <span className="mr-3">🚀</span> {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-[#e0e0e0] hover:text-[#00a8cc] transition-all duration-300">
                  <span className="text-2xl text-[#00a8cc] mr-3">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
