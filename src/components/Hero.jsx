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
    <section className="min-h-screen flex flex-col justify-center items-center text-left bg-gray-900 text-green-400 p-10 font-mono">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
        <div className="text-lg">
          <span className="text-green-500">~$ </span>
          <span>{text}</span>
          <span className="animate-pulse">▌</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
