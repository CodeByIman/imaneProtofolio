import React from "react";

const projects = [
  {
    title: "Gestion Résidence",
    description: "Manage student residences with booking and maintenance tracking.",
    technologies: "Spring Boot, React, Tailwind CSS",
    video: "https://player.vimeo.com/video/1059354628?h=f5a8f69658&badge=0&autopause=0&player_id=0&app_id=58479",
    link: "https://github.com/CodeByIman/gestion-residence"
  },
  {
    title: "Search Apartment Near University",
    description: "Find student accommodations near universities with interactive filters.",
    technologies: "Django, React, Tailwind CSS",
    video: "https://player.vimeo.com/video/1059354628?h=f5a8f69658&badge=0&autopause=0&player_id=0&app_id=58479",
    link: "https://github.com/CodeByIman/djangoProject"
  },
  {
    title: "Coachify – Social Media for Coaches & Clients",
    description: "Connect coaches and clients, share programs, and track progress.",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS",
    video: "https://player.vimeo.com/video/1059354628?h=f5a8f69658&badge=0&autopause=0&player_id=0&app_id=58479",
    link: "https://github.com/CodeByIman/coachify"
  },
];

const Projects = () => {
  return (
    <section className="p-10 bg-[#1a1a2e] min-h-screen flex flex-col items-center text-[#e0e0e0] font-mono border-t border-[#00a8cc]">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#00a8cc] pb-2">[ My Completed Projects ]</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-[#16213e] border border-[#00a8cc] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#00a8cc]/50"
          >
            <div style={{ paddingTop: '75%', position: 'relative' }}>
              <iframe
                src={project.video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title={project.title}
              ></iframe>
            </div>

            <h3 className="text-xl font-bold mb-2 text-[#00a8cc]">{project.title}</h3>
            <p className="text-[#e0e0e0] mb-4">{project.description}</p>
            <p className="text-sm text-[#00a8cc]">
              <span className="text-[#00a8cc] font-semibold">Tech Stack:</span> {project.technologies}
            </p>
            <div className="mt-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-[#00a8cc] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#0096b3] transition-all duration-300 hover:shadow-lg">
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
