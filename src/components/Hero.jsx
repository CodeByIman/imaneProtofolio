import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = `Hello, I'm Imane Bouboul\nMaster's student in Big Data & Data Science, specializing in AI, Machine Learning, and Web Development.\nPassionate about creating impactful AI-powered applications in Morocco.`;

  const speed = 50; // Typing speed in ms

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-left bg-[#1a1a2e] text-[#00a8cc] p-10 font-mono border-b border-[#00a8cc]">
      <div className="w-full max-w-2xl bg-[#16213e] p-6 rounded-xl shadow-lg border border-[#00a8cc]">
        {/* Fake Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* Terminal Content */}
        <div className="text-lg">
          <span className="text-[#00a8cc] font-bold">~$ </span>
          <span className="text-green-400">cat about_me.txt</span>
          <br />
          <span className="text-[#00a8cc] font-bold">~$ </span>
          <span>{text}</span>
          <span className="animate-blink">▌</span>
        </div>
        {/* Fake Command Prompt */}
        <div className="mt-4">
          <span className="text-[#00a8cc] font-bold">~$ </span>
          <span className="text-gray-400">// Explore my portfolio to learn more about my work...</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;