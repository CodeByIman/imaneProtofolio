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
    <section className="p-10 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 relative inline-block">
        My Completed Projects
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-transparent"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">Tech Stack:</strong> {project.technologies}
            </p>
            <div className="mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110">
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