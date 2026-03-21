import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, TestTube, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <Lightbulb size={24} className="text-primary" />,
            title: "1. Idea Discussion",
            description: "We start by understanding your vision, target audience, and business goals to outline the perfect MVP scope."
        },
        {
            icon: <PenTool size={24} className="text-secondary" />,
            title: "2. Design & Development",
            description: "Our team crafts user-centric designs and builds robust, scalable architecture using modern frameworks."
        },
        {
            icon: <TestTube size={24} className="text-primary" />,
            title: "3. QA & Testing",
            description: "Rigorous automated and manual testing ensures your product is bug-free, secure, and ready for real users."
        },
        {
            icon: <Rocket size={24} className="text-secondary" />,
            title: "4. Deployment & Scaling",
            description: "We deploy your application to production and set up monitoring to ensure smooth scaling as you grow."
        }
    ];

    return (
        <section className="py-24 relative bg-surface overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-[20%] left-[80%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Our Proven <span className="text-gradient">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-textMuted text-lg"
                    >
                        A streamlined approach from concept to production, designed to get you to market faster.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line Animated */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
                         <motion.div 
                             initial={{ y: "-100%" }}
                             whileInView={{ y: "0%" }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, ease: "easeOut" }}
                             className="w-full h-full bg-gradient-to-b from-primary via-secondary to-transparent" 
                         />
                    </div>

                    <div className="space-y-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`w-full md:w-1/2 flex ${index % 2 !== 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} mb-8 md:mb-0`}>
                                    <div className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-300 w-full max-w-md">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-textMuted">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full border-4 border-surface bg-surfaceLight shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10 animate-pulse-glow">
                                    {step.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
