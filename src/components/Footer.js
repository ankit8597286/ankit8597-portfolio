"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <footer className="relative bg-[#050816] border-t border-slate-800 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Name */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-bold text-white">
              Ankit <span className="text-cyan-400">Kumar</span>
            </h2>

            <p className="text-slate-400 mt-3 max-w-md">
              Frontend Developer passionate about creating
              modern and responsive web applications.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">

            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          {/* GitHub */}
          <a
            href="https://github.com/ankit8597286"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankit-kumar-9a4410329/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:ankit8597286@gmail.com"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            <FaEnvelope size={22} />
          </a>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 text-center text-sm">
            © 2026 Ankit Kumar. All Rights Reserved.
          </p>

        </div>

      </div>

      {/* Floating Scroll Top Button */}
      {showButton && (

        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            flex
            items-center
            justify-center
            text-xl
            shadow-[0_0_25px_rgba(34,211,238,0.45)]
            hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
            transition-all
            duration-300
            hover:scale-110
            animate-bounce
          "
        >
          <FaArrowUp />
        </button>

      )}

    </footer>
  );
}