"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (

    <motion.main

      initial={{
        opacity: 0,
        scale: 0.98,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}

      className="bg-[#050816] overflow-hidden"
    >

      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
      >
        <Navbar />
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
      >
        <Hero />
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
      >
        <About />
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
        }}
      >
        <Skills />
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
      >
        <Projects />
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
      >
        <Certifications />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
      >
        <Contact />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.8,
        }}
      >
        <Footer />
      </motion.div>

    </motion.main>

  );
}