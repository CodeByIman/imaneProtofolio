import React from "react";

const Contact = () => {
  return (
    <section className="p-10 bg-gray-800 text-green-400 text-center font-mono border-t border-green-500">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2">[ Contact Me ]</h2>
      <p className="mb-2">📧 Email: your.email@example.com</p>
      <p className="mb-2">🔗 LinkedIn: <a href="https://www.linkedin.com/in/imane-bouboul/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-500">My LinkedIn Profile</a></p>
      <p>💻 GitHub: <a href="https://github.com/CodeByIman" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-500">My GitHub Profile</a></p>
    </section>
  );
};

export default Contact;
