import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Services', to: 'services' },
        { name: 'Work', to: 'work' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="home" smooth={true} duration={500}>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Dev2x.
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="relative text-text hover:text-primary transition-colors cursor-pointer text-sm font-medium group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="button-primary text-sm py-2 px-5">
                                Book a Call
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-text focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-panel absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 shadow-xl border-t-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-text hover:text-primary transition-colors cursor-pointer text-base font-medium py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="button-primary w-full text-base py-3">
                            Book a Call
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
