"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const frontendSkills = [
  { img: "/skills/html.png", name: "HTML" },
  { img: "/skills/css.png", name: "CSS" },
  { img: "/skills/js.png", name: "JavaScript" },
  { img: "/skills/react.png", name: "React" },
  { img: "/skills/nextjs.png", name: "Next.js" },
  { img: "/skills/tailwind.png", name: "Tailwind CSS" },
];

const backendSkills = [
  { img: "/skills/nodejs.png", name: "Node.js" },
  { img: "/skills/express.png", name: "Express.js" },
  { img: "/skills/mongodb.svg", name: "MongoDB" },
];

const languageSkills = [
  { img: "/skills/c.png", name: "C" },
  { img: "/skills/cpp.png", name: "C++" },
  { img: "/skills/python.png", name: "Python" },
];

const toolsSkills = [
  { img: "/skills/git.png", name: "Git" },
  { img: "/skills/github.png", name: "GitHub" },
  { img: "/skills/vscode.png", name: "VS Code" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            Technical Skills
          </h2>

          <p className="text-slate-400 mt-4 text-sm sm:text-lg">
            Technologies I work with
          </p>

        </div>

        {/* Frontend */}
        <SkillCategory
          title="Frontend"
          skills={frontendSkills}
        />

        {/* Backend */}
        <SkillCategory
          title="Backend"
          skills={backendSkills}
        />

        {/* Programming Languages */}
        <SkillCategory
          title="Programming Languages"
          skills={languageSkills}
        />

        {/* Tools */}
        <SkillCategory
          title="Other Tools"
          skills={toolsSkills}
        />

      </div>
    </section>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="mb-20 sm:mb-24">

      {/* Category Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-8 sm:mb-12">
        {title}
      </h3>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">

        {skills.map((skill, index) => (

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
              rotateX: 8,
              rotateY: -8,
              scale: 1.05,
            }}
            className="group relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[220px] md:h-[250px] rounded-[24px] bg-gradient-to-br from-[#020617] to-[#0f172a] border border-slate-800 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]"></div>

            {/* Icon */}
            <div className="relative w-[55px] h-[55px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] mb-4 sm:mb-6">

              <Image
                src={skill.img}
                alt={skill.name}
                fill
                sizes="100px"
                className="object-contain object-center transition-all duration-500 group-hover:scale-110"
              />

            </div>

            {/* Skill Name */}
            <h4 className="text-white text-sm sm:text-lg md:text-xl font-semibold tracking-wide text-center px-2">
              {skill.name}
            </h4>

          </motion.div>

        ))}

      </div>

    </div>
  );
}