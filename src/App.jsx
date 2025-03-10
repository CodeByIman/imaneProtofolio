import React from 'react';
import Routes from './routes/Routes';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubStats from "./components/GitHubStats";

export default function App() {
  return <div className="bg-gray-100 text-gray-900">
    <Hero />
    <Skills />
    <Projects />
    <GitHubStats />
    <Contact />

  </div>;
}
