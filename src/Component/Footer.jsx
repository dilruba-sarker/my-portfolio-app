import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import logo from "../assets/logo.png"; // ✅ Your project logo

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand/Intro */}
                <div>
                    <img src={logo} alt="Marigold Logo" className="w-12 mb-3" />
                    <h2 className="text-xl font-bold text-white mb-3">Dilruba Sarker</h2>
                    <p className="text-sm leading-relaxed">
                        I’m a Frontend Web Developer with solid skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I’ve worked on several projects that focus on responsive design, user-friendly interfaces, and performance optimization.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition">
                                About Me
                             </Link>
                        </li>
                        <li>
                            <Link to="/contract-me" className="hover:text-white transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            Email:{' '}
                            <a
                                href="mailto:dilrubasarkerseo@gmail.com"
                                className="hover:text-white transition"
                            >
                                dilrubasarkerseo@gmail.com
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a
                                href="https://github.com/dilruba-sarker"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                dilruba-sarker
                            </a>
                        </li>
                        <li>
                            LinkedIn:{' '}
                            <a
                                href="https://www.linkedin.com/in/dilruba-sarker-x20/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                LinkedIn Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Marigold Bill Management. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
