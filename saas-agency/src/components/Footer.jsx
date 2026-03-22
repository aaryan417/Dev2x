import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surfaceLight pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
            <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-2">
                        <Link to="home" smooth={true} duration={500} className="inline-block cursor-pointer mb-6 transform transition-transform hover:scale-105">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-shimmer bg-[length:200%_auto]">
                                ApexSaaS.
                            </span>
                        </Link>
                        <p className="text-textMuted max-w-sm mb-6 leading-relaxed">
                            We design, build, and scale premium SaaS products. Transform your visionary ideas into market-leading software with our expert engineering team.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Twitter size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" },
                                { icon: <Github size={18} />, href: "#" },
                                { icon: <Mail size={18} />, href: "mailto:hello@apexsaas.com" }
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/5 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all text-textMuted"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Work', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        className="text-textMuted hover:text-primary transition-colors cursor-pointer text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-6">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-4">
                    <p className="text-textMuted text-sm mb-4 md:mb-0">
                        &copy; {currentYear} ApexSaaS Agency. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-textMuted">
                        <span>Built with <span className="text-red-500">♥</span> using React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
