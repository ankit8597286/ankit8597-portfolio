"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { link } from "framer-motion/client";

const certifications = [
  {
    title: "HTML",
    issuer: "STP Computer",
    image: "/certificates/Html.jpg",
    link: "certificates/html.pdf",
  },

  {
    title: "Python for DataScience",
    issuer: "NPTEL",
    image: "/certificates/neptel.jpg",
    link: "/certificates/Python for Data Science.pdf",
  },

  {
    title: "C Basic",
    issuer: "SimplilearnSkilup",
    image: "/certificates/C programming.jpg",
    link: "/certificates/C programming.pdf",
  },

  {
    title: "Generative AI",
    issuer: "SimplilearnSkilup By Google",
    image: "/certificates/Generative AI.jpg",
    link: "/certificates/Generative AI.pdf",
  },

  {
    title: "Digital",
    issuer: "AICTE",
    image: "/certificates/digital.jpg",
    link: "/certificates/digital.jpg",
  },

  {
    title: "Data Science",
    issuer: "CISCO Academy",
    image: "/certificates/Data Science.jpg",
    link: "/certificates/Data Science.jpg",
  },

  {
    title: "Web Development",
    issuer: "Infosys and EduBridge",
    image: "/certificates/Web Development.jpg",
    link: "/certificates/Web Development.pdf",
  },

  {
    title: "IKS",
    issuer: "Bharat BoudhIKS",
    image: "/certificates/IKS.jpeg",
    link: "/certificates/IKS.jpeg",
  },

  {
    title: "JavaScript",
    issuer: "Saylor",
    image: "/certificates/JavaScript.jpg",
    link: "/certificates/JavaScript.pdf",
  },


];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            My <span className="text-cyan-400">Certifications</span>
          </h2>

          <p className="text-slate-400 mt-4 text-sm sm:text-lg">
            Courses and certifications I have completed
          </p>

        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {certifications.map((certificate, index) => (

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
                scale: 1.03,
              }}
              className="group relative w-full sm:w-[380px] rounded-[28px] overflow-hidden border border-slate-800 bg-gradient-to-br from-[#020617] to-[#0f172a] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >

              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden">

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <p className="text-cyan-400 mb-5">
                  Issued by {certificate.issuer}
                </p>

                {/* Button */}
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-5 py-3 rounded-xl text-white font-semibold"
                >
                  View Certificate
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}