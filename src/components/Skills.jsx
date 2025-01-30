import React from "react";

const Skills = () => {
  const skills = [
    { category: "Data Science", items: ["Python", "Scikit-learn", "TensorFlow", "Hadoop", "Kafka", "Flink"] },
    { category: "Web Development", items: ["MERN Stack", "Django", "Spring Boot"] },
    { category: "Programming", items: ["Java", "C++", "Python"] },
    { category: "Tools", items: ["Adobe Illustrator", "Vite", "Git", "Docker", "Kubernetes"] },
  ];

  return (
    <section className="p-10 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 relative inline-block">
        Skills & Technologies
        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-300"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2">📚</span> {/* Emoji for category */}
              {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-700 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-lg font-medium">{item}</span>
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