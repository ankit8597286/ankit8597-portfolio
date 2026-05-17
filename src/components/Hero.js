"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-slate-950"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-cyan-400">Ankit Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            Web Developer
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            I am a dedicated BCA student with strong interest in programming, problem-solving and web development.
            I build responsive, modern and professional websites
            using Html, CSS, JavaScript, React, Next.js and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Hire Me Button */}
            <a
              href="https://github.com/ankit8597286"
              target="_blank"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 px-8 py-3 rounded-xl font-semibold text-center"
            >
              GitHub
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 px-8 py-3 rounded-xl font-semibold text-center"
            >
              View Resume
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.4)]">

            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}