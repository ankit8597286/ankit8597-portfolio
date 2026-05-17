"use client";

import { motion } from "framer-motion";

const skills = [
  
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Next.js",
  "C",
  "C++",
  "DS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#050816] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-lg leading-8">
            Passionate frontend developer focused on creating
            modern, responsive and user-friendly websites.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-[#020617] to-[#0f172a] p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]"></div>

            <div className="relative z-10">

              <h3 className="text-3xl font-bold text-white mb-6">
                About Me
              </h3>

              <p className="text-slate-300 leading-8 text-[15px] sm:text-base">
                I am Ankit Kumar, currently pursuing a Bachelor of Computer
                Applications (BCA) at GNIOT, Greater Noida.
                I focus on building a strong foundation in programming,
                data structures and software development.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">

                {skills.map((skill, index) => (

                  <span
                    key={index}
                    className="px-5 py-2 rounded-full border border-slate-600 text-slate-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-[#020617] to-[#0f172a] p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%)]"></div>

            <div className="relative z-10">

              <h3 className="text-3xl font-bold text-white mb-6">
                What I Do
              </h3>

              <p className="text-slate-300 leading-8 text-[15px] sm:text-base">
                I work on programming, logical problem-solving and
                small projects using C, C++, Python and modern
                web technologies to improve my skills and build
                practical experience.
              </p>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-white/5 border border-slate-700 rounded-2xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-cyan-400">
                    4+
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Projects
                  </p>
                </div>

                <div className="bg-white/5 border border-slate-700 rounded-2xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-cyan-400">
                    BCA
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Student
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-[#020617] to-[#0f172a] p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.15),transparent_40%)]"></div>

            <div className="relative z-10">

              <h3 className="text-3xl font-bold text-white mb-6">
                Currently Learning
              </h3>

              <p className="text-slate-300 leading-8 text-[15px] sm:text-base">
                I am currently strengthening my knowledge of
                Data Structures, OOP concepts and modern
                web development frameworks to become a
                professional software developer.
              </p>

              {/* Learning Topics */}
              <div className="mt-10 space-y-4">
                
                <div className="bg-white/5 border border-slate-700 rounded-2xl px-5 py-4 text-slate-300">
                  Full Stack Development
                </div>

                 <div className="bg-white/5 border border-slate-700 rounded-2xl px-5 py-4 text-slate-300">
                  Object Oriented Programming
                </div>

                <div className="bg-white/5 border border-slate-700 rounded-2xl px-5 py-4 text-slate-300">
                  Data Structures & Algorithms
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}