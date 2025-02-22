import React from "react";
import { Helmet } from "react-helmet";

const GitHubStats = () => {
  return (
    <section className="p-10 bg-[#1a1a2e] text-[#00a8cc] font-mono flex flex-col items-center border-b border-[#00a8cc]">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#00a8cc] pb-2 animate-pulse text-white">
        [ GitHub Statistics ]
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://github-readme-stats.vercel.app/api?username=CodeByIman&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="w-80 shadow-lg rounded-lg border-2 border-[#00a8cc] hover:shadow-xl"
          />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=CodeByIman&layout=compact&theme=radical"
            alt="Top Languages"
            className="w-80 shadow-lg rounded-lg border-2 border-[#00a8cc] hover:shadow-xl"
          />
        </div>
      </div>
      <div className="mt-8 text-center text-lg">
        <p className="animate-bounce">
          Check out my GitHub profile for more projects and contributions! 🚀
        </p>
        <a
          href="https://github.com/CodeByIman"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-[#00a8cc] text-[#1a1a2e] font-bold rounded-lg hover:bg-[#0088a8] transition-colors duration-300"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
};

export default GitHubStats;