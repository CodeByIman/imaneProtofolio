import React from "react";



const projects = [
  {
    title: "Gestion Résidence",
    description: "A platform for managing student residences with advanced booking and maintenance tracking.",
    technologies: "Spring Boot, React, Tailwind CSS",
  },
  {
    title: "Search Apartment Near University",
    description: "A search engine helping students find accommodations near universities with interactive filtering.",
    technologies: "Django, React, Tailwind CSS",
  },
  {
    title: "Coachify – Social Media for Coaches & Clients",
    description: "A social media platform where coaches connect with clients, share training programs, and track progress.",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section className="p-10 bg-black min-h-screen flex flex-col items-center text-green-400 font-mono border-t border-green-500">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-green-400 pb-2">[ My Completed Projects ]</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 border border-green-400 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-green-500/50"
          >
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-green-300 mb-4">{project.description}</p>
            <p className="text-sm text-green-500">
              <span className="text-green-400">Tech Stack:</span> {project.technologies}
            </p>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-600 transition-all duration-300">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>

  );
};

export default Projects;
