import React from "react";

const Contact = () => {
  return (
    <section className="p-10 bg-[#1a1a2e] text-[#00a8cc] text-center font-mono border-t border-[#00a8cc]">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#00a8cc] pb-2 text-white">
        [ Contact Me ]
      </h2>
      <p className="mb-2">
        📧 Email:{" "}
        <a
          href="mailto:imanebouboul0@gmail.com"
          className="text-[#00a8cc] hover:text-[#0088a8] transition-colors duration-300"
        >
          imanebouboul0@gmail.com
        </a>
      </p>
      <p className="mb-2">
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/imane-bouboul/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00a8cc] hover:text-[#0088a8] transition-colors duration-300"
        >
          Imane Bouboul
        </a>
      </p>
      <p className="mb-2">
        💻 GitHub:{" "}
        <a
          href="https://github.com/CodeByIman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00a8cc] hover:text-[#0088a8] transition-colors duration-300"
        >
          CodeByIman
        </a>
      </p>
    </section>
  );
};

export default Contact;