import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MonitorSmartphone, Code2, ShoppingCart, Palette, LineChart, Video, Mic } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Bot size={40} className="text-primary mb-6" />,
            title: "AI Agent Development",
            description: "Build intelligent AI agents and chatbots to automate tasks and improve business workflows."
        },
        {
            icon: <Mic size={40} className="text-secondary mb-6" />,
            title: "AI Voice Agents",
            description: "Deploy conversational AI voice agents for 24/7 customer support, outbound calls, and instant booking."
        },
        {
            icon: <MonitorSmartphone size={40} className="text-primary mb-6" />,
            title: "Landing Page Development",
            description: "Design high-converting, fast-loading landing pages optimized for performance and user experience."
        },
        {
            icon: <Code2 size={40} className="text-secondary mb-6" />,
            title: "Full-Stack Web Development",
            description: "Develop scalable and secure web applications with modern frontend and backend technologies."
        },
        {
            icon: <ShoppingCart size={40} className="text-primary mb-6" />,
            title: "E-commerce Development",
            description: "Create powerful online stores with seamless user experience and secure payment integration."
        },
        {
            icon: <Palette size={40} className="text-secondary mb-6" />,
            title: "Graphic Design",
            description: "Design professional branding, logos, and creatives to enhance your brand identity."
        },
        {
            icon: <LineChart size={40} className="text-primary mb-6" />,
            title: "Data Analysis",
            description: "Analyze business data to generate insights and help in better decision-making."
        },
        {
            icon: <Video size={40} className="text-secondary mb-6" />,
            title: "Advertising Video Creation",
            description: "Create engaging promotional videos to boost brand visibility and conversions."
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-surface">
            <div className="absolute top-[10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-textMuted text-lg md:text-xl font-medium"
                    >
                        Everything You Need to Build & Scale Your Digital Business
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-panel p-8 rounded-3xl group border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)] flex flex-col items-start bg-surfaceLight/40 backdrop-blur-md"
                        >
                            <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 inline-block animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-wide">{service.title}</h3>
                            <p className="text-textMuted leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
