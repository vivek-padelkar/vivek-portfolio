/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Force dark mode as requested by user's preference for dark-accent + neutral base
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative selection:bg-brand-primary selection:text-white dark:bg-bg-dark transition-colors duration-300">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px] dark:opacity-30 opacity-10" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] dark:opacity-30 opacity-10" />
      </div>
    </div>
  );
}
