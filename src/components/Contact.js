"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append("access_key", "63b6e8cc-19cd-4aa2-9eaa-1dd30ebc3a32");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Submitted Successfully ✅🎉");

            event.target.reset();

            setTimeout(() => {
                setResult("");
            }, 3000);
        } else {
            setResult("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#0b1120]"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
                        Contact <span className="text-cyan-400">Me</span>
                    </h2>

                    <p className="text-slate-400 mt-4 text-sm sm:text-lg">
                        Let’s build something amazing together
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)]"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Get In Touch
                            </h3>

                            <p className="text-slate-400 leading-8 mb-8">
                                Feel free to contact me for projects, collaborations, freelance
                                work or internship opportunities.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-cyan-400 font-semibold mb-1">Email</p>

                                    <p className="text-white break-all">ankit8597286@gmail.com</p>
                                </div>

                                <div>
                                    <p className="text-cyan-400 font-semibold mb-1">Mobile</p>

                                    <p className="text-white">+91 7903863590</p>
                                </div>

                                <div>
                                    <p className="text-cyan-400 font-semibold mb-1">Location</p>

                                    <p className="text-white">Greater Noida India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_40%)]"></div>

                        <div className="relative z-10">
                            {/* Name */}
                            <div className="mb-6">
                                <label className="block text-white mb-3">Your Name *</label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-[#111827]/80 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-6">
                                <label className="block text-white mb-3">Mobile Number *</label>

                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Enter mobile number"
                                    className="w-full bg-[#111827]/80 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label className="block text-white mb-3">Your Email *</label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-[#111827]/80 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label className="block text-white mb-3">Message</label>

                                <textarea
                                    rows="6"
                                    name="message"
                                    placeholder="Write your message..."
                                    className="w-full bg-[#111827]/80 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none resize-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading || result === "Submitted Successfully ✅🎉"}
                                className={`w-full transition-all duration-300 px-6 py-4 rounded-2xl text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]
  
                                       ${result === "Submitted Successfully ✅🎉"
                                        ? "bg-green-500 hover:bg-green-500"
                                        : "bg-cyan-500 hover:bg-cyan-600"
                                    }`}
                            >
                                {loading
                                    ? "Sending..."
                                    : result === "Submitted Successfully ✅🎉"
                                        ? "Submitted Successfully ✅🎉"
                                        : "Send Message"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
