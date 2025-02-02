import React from "react";
import { Helmet } from "react-helmet";
const GitHubStats = () => {
  return (
    <section className="p-10 bg-gray-900 text-green-400 font-mono flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-green-400 pb-2">[ GitHub Statistics ]</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=CodeByIman&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="w-80 shadow-lg rounded-lg"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=CodeByIman&layout=compact&theme=radical"
          alt="Top Languages"
          className="w-80 shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
};

export default GitHubStats;
