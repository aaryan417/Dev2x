import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', mobilenumber: '', projectDetails: '' });
    const [popup, setPopup] = useState({ show: false, type: '', message: '' });

    const showPopup = (type, message) => {
        setPopup({ show: true, type, message });
        setTimeout(() => {
            setPopup({ show: false, type: '', message: '' });
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("https://script.google.com/macros/s/AKfycbyE344HkjHoj64iXNLoUs0Isr0_BWJnE0cWL8Y1BXPZi1ONbw5fHNCIubV0Ddu8Sad8Fg/exec", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.mobilenumber,
                    message: formData.projectDetails,
                }),
            });
            showPopup('success', 'Message sent successfully! We will get back to you soon.');
        } catch (error) {
            console.error("Error sending message:", error);
            showPopup('error', 'Failed to send message. Please try again later.');
        }

        setFormData({ name: '', mobilenumber: '', projectDetails: '' });
    };

    return (
        <section id="contact" className="py-24 relative bg-background overflow-hidden">
            {/* Background gradients */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-0 w-[40%] h-[60%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-[-10%] w-[30%] h-[40%] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 bg-surfaceLight/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                    {/* Left Info Side */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Let's build your <br /><span className="text-gradient">next big thing.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-textMuted text-lg mb-10 max-w-md"
                        >
                            Whether you need to launch an MVP or scale an existing SaaS, our team is ready to bring your vision to life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <button onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })} className="button-primary flex items-center justify-center gap-2 group">
                                Get a Quote <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                            <a href="tel:+917725061185" className="button-secondary flex items-center justify-center gap-2 group">
                                Book a Call <Phone size={18} className="transition-transform group-hover:rotate-12" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Form Side */}
                    <div className="bg-surface/80 backdrop-blur-md p-10 lg:p-16 border-l border-white/5 relative z-10">
                        <motion.form
                            id="contactForm"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-surfaceLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                                    placeholder="your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Phone  Number</label>
                                <input
                                    type="number"
                                    required
                                    value={formData.mobilenumber}
                                    onChange={(e) => setFormData({ ...formData, mobilenumber: e.target.value })}
                                    className="w-full bg-surfaceLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all"
                                    placeholder="your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Project Details</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.projectDetails}
                                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                    className="w-full bg-surfaceLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="button-primary w-full mt-4" >
                                Send Message
                            </button>
                        </motion.form>
                    </div>

                </div>
            </div>

            {/* Custom Popup Notification */}
            <AnimatePresence>
                {popup.show && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100] px-6 py-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-4 backdrop-blur-xl border ${
                            popup.type === 'success' 
                                ? 'bg-green-500/10 border-green-500/30 text-green-50' 
                                : 'bg-red-500/10 border-red-500/30 text-red-50'
                        }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                             popup.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                            {popup.type === 'success' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                        <p className="font-semibold text-sm tracking-wide">{popup.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
