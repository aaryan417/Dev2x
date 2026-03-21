import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients & Floating Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -60, 0],
                    y: [0, -40, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]"
            />

            {/* Particle highlights */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-secondary animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white/50 animate-float" style={{ animationDelay: '4s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/40 bg-primary/20 backdrop-blur-md shadow-[0_0_20px_rgba(79,70,229,0.3)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    <span className="text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Premium SaaS Agency
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl leading-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        We build products
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="block text-gradient mt-2 py-2 drop-shadow-[0_0_30px_rgba(147,51,234,0.4)]"
                    >
                        that scale globally.
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl md:text-2xl text-textMuted mb-12 max-w-3xl leading-relaxed"
                >
                    Launch your MVP in 7–14 days. We transform your ideas into high-converting, scalable applications.
                </motion.p>
                <br />
                <br />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="button-primary w-full sm:w-auto">
                            Book a Call
                        </button>
                    </Link>
                    <Link to="services" smooth={true} duration={500}>
                        <button className="button-secondary w-full sm:w-auto">
                            Get a Quote
                        </button>
                    </Link>
                </motion.div>
            </div>
            <br />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <Link to="services" smooth={true} duration={500}>
                    <div className="flex flex-col items-center text-textMuted hover:text-white transition-colors">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <ChevronDown className="animate-bounce" size={24} />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
