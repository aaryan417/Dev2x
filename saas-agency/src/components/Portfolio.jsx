import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Green Leaf E-Commerce",
            category: "E-Commerce Platform",
            description: "A modern, responsive e-commerce platform showcasing organic products and healthy nuts with seamless shopping cart integration.",
            image: "/greenleaf-demo2.png",
            tags: ["React", "E-Commerce", "Tailwind CSS", "Responsive Design"],
            demoLink: "https://greenleafco.in/"
        },
        {
            title: "IndiaCakes E-Commerce",
            category: "Online Bakery Platform",
            description: "A comprehensive cake delivery platform featuring flavor categorization, varied cake themes, and real-time order tracking.",
            image: "/greenleaf-demo.png",
            tags: ["Next.js", "E-Commerce", "Tailwind CSS", "Payment Gateway"],
            demoLink: "https://www.indiacakes.com/"
        }
    ];

    return (
        <section id="work" className="py-24 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold mb-4"
                        >
                            Featured <span className="text-gradient">Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-textMuted text-lg"
                        >
                            Take a look at some of the recent SaaS products we've brought to life for our clients.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 md:mt-0"
                    >
                        <button className="button-secondary">
                            View All Projects
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-surface/80 backdrop-blur-md text-xs font-semibold rounded-full border border-white/10 shadow-lg">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 relative z-20 bg-surfaceLight/80 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-textMuted mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.demoLink || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary text-white py-2 rounded-lg transition-colors font-medium"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <button className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                                        <Github size={24} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
