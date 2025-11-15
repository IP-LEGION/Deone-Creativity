import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DEONE CREATIVITY
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A modern tech studio building digital products and automation systems for individuals, startups, and small businesses. We merge software engineering, branding, and automation to create unique solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/2349117564724" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/chiemeriedan?t=5DOWmCAYU_tPUEAqnNt1Ww&s=09" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/IP-LEGION" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">deonecreativity.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+234 (911) 756-4724</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Remote & Global</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DEONE CREATIVITY. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
