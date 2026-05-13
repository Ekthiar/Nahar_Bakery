import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import logo from '../assets/images/regenerated_image_1778614741899.jpg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border py-12">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="Nahar Foods Logo" className="h-12 w-auto bg-white p-1" />
            <div className="h-8 w-[1px] bg-brand-border hidden md:block"></div>
            <div>
              <span className="text-lg font-serif font-bold tracking-tight text-brand-dark">NAHAR FOODS</span>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Live Bakery Experience</p>
            </div>
          </div>
          
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
            <Link to="/" className="hover:text-brand-accent transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link>
            <Link to="/contact" className="hover:text-brand-accent transition-colors">Wholesale</Link>
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1E9dqymUcV/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-border pt-8 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 space-y-4 md:space-y-0">
          <div>© {new Date().getFullYear()} Naharfoods International</div>
          <div className="flex gap-8">
            <span>Sustainably Sourced</span>
            <span>Lab Tested Purity</span>
            <span>Global Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
