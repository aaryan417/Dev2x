import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Siddharth Jain",
            role: "Founder, Green Leaf",
            content: "Dev2x completely transformed our e-commerce presence. Our new store is blazing fast, and our online sales have doubled since the launch. Their execution was flawless.",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            name: "Riya Verma",
            role: "Director, IndiaCakes",
            content: "We needed a robust platform to handle complex delivery scheduling and sudden traffic spikes. They delivered beyond our expectations, building a beautiful and highly scalable system.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Rahul Desai",
            role: "CTO, TechVidyut SaaS",
            content: "Working with them felt like an extension of our own engineering team. Clear communication, fast iterations, and a beautifully designed final product. Highly recommended.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ];

    return (
        <section className="py-24 relative bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Client <span className="text-gradient">Success Stories</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-textMuted text-lg"
                    >
                        Don't just take our word for it. Here's what founders say about working with us.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-text italic mb-8">"{review.content}"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-white/20" />
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-sm text-textMuted">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
