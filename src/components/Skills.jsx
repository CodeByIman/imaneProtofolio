import React from "react";
import { FaPython, FaJava, FaDocker, FaReact, FaGitAlt, FaCode } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow, SiDjango, SiSpringboot, SiCplusplus, SiVite, SiKubernetes, SiAdobeillustrator } from "react-icons/si";

const skills = [
  {
    category: "Data Science", items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Hadoop", icon: <FaCode /> },
      { name: "Kafka", icon: <FaCode /> },
      { name: "Flink", icon: <FaCode /> }
    ]
  },
  {
    category: "Web Development", items: [
      { name: "MERN Stack", icon: <FaReact /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring Boot", icon: <SiSpringboot /> }
    ]
  },
  {
    category: "Programming", items: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> }
    ]
  },
  {
    category: "Tools", items: [
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> }
    ]
  }
];

const Skills = () => {
  return (
    <section className="p-10 bg-gray-800 min-h-screen flex flex-col items-center text-green-400 font-mono">
      <h2 className="text-4xl font-extrabold mb-8 border-b-4 border-green-400 pb-3">
        [ Skills & Technologies ]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-700 border border-green-500 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-green-500/50"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center text-green-300">
              <span className="mr-3">🚀</span> {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-green-200">
                  <span className="text-2xl text-green-400 mr-3">{item.icon}</span>
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