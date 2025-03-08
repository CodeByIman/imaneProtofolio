import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showBio, setShowBio] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [command, setCommand] = useState("");
  const terminalRef = useRef(null);

  // Improved content with more professional details
  const fullText = `Hello, I'm Imane Bouboul\nMaster's student in Big Data & Data Science with a focus on AI and Machine Learning.\nDeveloping intelligent solutions that bridge theory and real-world applications.`;

  // Social/professional links
  const links = [
    { name: "GitHub", url: "https://github.com/CodeByIman" },
    { name: "LinkedIn", url: "#" },
    { name: "Resume", url: "#" },
  ];

  // Terminal typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        i++;

        // Auto-scroll terminal content
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
        setTimeout(() => setShowBio(true), 500);
      }
    }, 40); // Slightly faster typing

    return () => clearInterval(interval);
  }, []);

  // Show links after bio appears
  useEffect(() => {
    if (showBio) {
      setTimeout(() => setShowLinks(true), 800);
    }
  }, [showBio]);

  // Handle "typed" commands
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand();
    }
  };

  const processCommand = () => {
    setCommand("");
    // You could implement actual command handling here
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-left bg-[#1a1a2e] text-[#e0e0e0] p-4 md:p-10 font-mono relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMGgxdjFoLTF6IiBmaWxsPSIjMDBhOGNjMTAiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/6 text-4xl text-[#00a8cc] opacity-10 animate-float-slow">&lt;/&gt;</div>
      <div className="absolute bottom-1/3 right-1/6 text-3xl text-[#00a8cc] opacity-10 animate-float-medium rotate-12">{"{}"}</div>
      <div className="absolute top-2/3 left-1/4 text-2xl text-[#00a8cc] opacity-10 animate-float-fast">ML</div>
      <div className="absolute top-1/3 right-1/4 text-2xl text-[#00a8cc] opacity-10 animate-float-medium">AI</div>

      <div className="w-full max-w-3xl bg-[#0c1021] p-6 rounded-xl shadow-2xl border border-[#00a8cc] relative z-10 overflow-hidden">
        {/* Terminal glowing effect */}
        <div className="absolute inset-0 bg-[#00a8cc] opacity-5 blur-xl rounded-full"></div>

        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4 bg-[#16213e] px-4 py-2 rounded-t-lg -mt-6 -mx-6 border-b border-[#00a8cc]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-[#00a8cc] text-sm">imane@portfolio ~ </div>
          <div className="text-[#00a8cc] text-sm">bash</div>
        </div>

        {/* Terminal Content */}
        <div className="text-lg h-72 overflow-y-auto custom-scrollbar pb-4" ref={terminalRef}>
          {/* Welcome message with blinking effect */}
          <div className="mb-6">
            <span className="text-[#00a8cc] font-bold">~$ </span>
            <span className="text-green-400">echo "Welcome to my portfolio"</span>
            <div className="text-[#e0e0e0] mt-1 mb-2">Welcome to my portfolio</div>

            <span className="text-[#00a8cc] font-bold">~$ </span>
            <span className="text-green-400">cat about_me.txt</span>
            <div className="text-[#e0e0e0] whitespace-pre-line mt-1 ml-4 border-l-2 border-[#00a8cc40] pl-4">
              {text}
              {!showBio && <span className="animate-blink">▌</span>}
            </div>
          </div>



          {/* Command prompt */}
          <div className="mt-6 flex items-center">
            <span className="text-[#00a8cc] font-bold">~$ </span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-[#e0e0e0] flex-1 ml-2"
              placeholder="Type 'help' for commands..."
            />
            <span className="animate-blink">▌</span>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s forwards;
        }
        
        .animate-slide-in {
          opacity: 0;
          animation: slideIn 0.5s forwards;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0c1021;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #00a8cc;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;