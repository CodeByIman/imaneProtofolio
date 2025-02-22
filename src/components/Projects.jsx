import React from "react";
const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Gestion Résidence",
    description: "Manage student residences with booking and maintenance tracking.",
    technologies: "Spring Boot, React, Tailwind CSS",
    image: `/imaneProtofolio/gestion-residence.png`, // Dynamic base URL
    link: "https://github.com/CodeByIman/gestion-residence"
  },
  {
    title: "Search Apartment Near University",
    description: "Find student accommodations near universities with interactive filters.",
    technologies: "Django, React, Tailwind CSS",
    image: `${baseUrl}search-apartment.png`,
    link: "https://github.com/CodeByIman/djangoProject"
  },
  {
    title: "Coachify – Social Media for Coaches & Clients",
    description: "Connect coaches and clients, share programs, and track progress.",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS",
    image: `${baseUrl}coachify.png`,
    link: "https://github.com/CodeByIman/coachify"
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
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-green-300 mb-4">{project.description}</p>
            <p className="text-sm text-green-500">
              <span className="text-green-400">Tech Stack:</span> {project.technologies}
            </p>
            <div className="mt-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-600 transition-all duration-300">
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
