import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-24 relative bg-background overflow-hidden">
            {/* Expanded background elements */}
            <div className="absolute inset-0 w-full h-full bg-surfaceLight/30 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none z-0 rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-4xl text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            <span className="text-gradient">About Us</span>
                        </h2>
                        <p className="text-textMuted text-lg md:text-xl mb-6 leading-relaxed">
                            Dev2x is a modern SaaS development agency focused on helping startups and businesses build scalable, high-performance web applications and MVPs.
                        </p>
                        <p className="text-textMuted text-lg md:text-xl mb-6 leading-relaxed">
                            We specialize in turning ideas into real, functional products using modern technologies like React (Vite), Django, and MongoDB. Our goal is to deliver fast, reliable, and user-friendly solutions that are built to scale.
                        </p>
                        <p className="text-textMuted text-lg md:text-xl mb-10 leading-relaxed">
                            From concept to deployment, we work closely with clients to ensure smooth execution, clean architecture, and high-quality results.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="glass-panel px-5 py-3 rounded-full border border-primary/20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> React / Vite
                            </div>
                            <div className="glass-panel px-5 py-3 rounded-full border border-secondary/20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Django
                            </div>
                            <div className="glass-panel px-5 py-3 rounded-full border border-primary/20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span> MongoDB
                            </div>
                            <div className="glass-panel px-5 py-3 rounded-full border border-secondary/20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Tailwind CSS
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
