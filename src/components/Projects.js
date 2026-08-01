"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hardware Shop Website",
    description:
      "Modern responsive Hardware & Furniture website built using Next.js and Tailwind CSS.",
    image: "/projects/project1.jpg",
    tech: ["Next.js", "Tailwind", "JavaScript"],
    live: "https://jk-ply-hardware-and-furniture-works-pi.vercel.app/",
    github: "Server error",
  },

  {
    title: "Wedding Studio",
    description:
      "Responsive Wedding Studio website with product pages.",
    image: "/projects/project2.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://vaishnavi-728.github.io/vashnavi/",
    github: "Server error",
  },

  {
    title: "TODO App",
    description:
      "ToDo appliction where you can add your daily task.",
    image: "/projects/todo.jpg",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    live: "https://todo-web-appliction.netlify.app/",
    github: "https://github.com/ankit8597286/ToDo-application",
  },
  {
    title: "Finance Tracker App",
    description:
      "Pernonal Finance tracker app help you to track your monthly expenses with graph",
    image: "/projects/finance.jpg",
    tech: ["JavaScript", "Next.js", "Tailwind CSS"],
    live: "https://personal-finance-trackerapp.netlify.app/",
    github: "https://github.com/ankit8597286/Finance-Tracker",
  },
  {
    title: "AI Study Assistant",
    description:
      "AI-powered study assistant to help students with their learning needs and exam preparation.",
    image: "/projects/ai-study2.jpg",
    tech: ["JavaScript", "Next.js", "MongoDB","GrokAI API"],
    live: "https://ai-study-manager.netlify.app/",
    github: "https://github.com/ankit8597286/Ai-study-assistant",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#0b1120]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 text-sm sm:text-lg">
            Some of my recent work
          </p>

        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative w-full sm:w-[420px] rounded-[28px] overflow-hidden border border-slate-800 bg-gradient-to-br from-[#020617] to-[#0f172a] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >

              {/* Image */}
              <div className="relative w-full h-[220px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-5 py-3 rounded-xl text-white font-semibold"
                  >
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 px-5 py-3 rounded-xl font-semibold"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}