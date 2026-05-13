import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBasket, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/regenerated_image_1778614858975.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img src={logo} alt="Nahar Foods Logo" className="h-12 w-auto bg-white p-1 transition-transform group-hover:scale-110" />
                <div className="absolute -inset-1 border border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-serif font-bold tracking-tight text-white">NAHAR FOODS</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">Live Bakery & Kitchen</p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all hover:text-brand-accent relative group ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-gray-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-8">
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <ShoppingBasket size={20} />
              <span className="absolute -top-2 -right-2 text-[9px] font-bold bg-brand-accent text-brand-dark w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark">0</span>
            </button>
            <Link to="/contact" className="hidden lg:block border border-brand-accent text-brand-accent px-6 py-2.5 hover:bg-brand-accent hover:text-brand-dark transition-all text-xs font-bold uppercase tracking-widest">
              Get Started
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-500 hover:text-brand-red transition-colors"
              >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
              <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-[10px] uppercase tracking-widest font-bold ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
