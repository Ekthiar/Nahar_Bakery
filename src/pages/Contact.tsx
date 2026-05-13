import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <header className="mb-32">
          <span className="text-brand-accent text-[11px] uppercase tracking-[0.5em] font-bold mb-10 block">Connection</span>
          <h1 className="text-7xl lg:text-[120px] font-serif font-bold italic leading-[0.8] text-brand-dark tracking-tighter">
            LET'S <br />
            TALK.
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-24"
          >
            <div className="space-y-16">
              <div className="pb-12 border-b border-brand-border group">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-accent mb-6">Voice</h4>
                <p className="text-4xl font-serif text-brand-dark font-bold group-hover:text-brand-accent transition-colors">01818396660</p>
              </div>
              <div className="pb-12 border-b border-brand-border group">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-accent mb-6">Electronic</h4>
                <p className="text-4xl font-serif text-brand-dark font-bold group-hover:text-brand-accent transition-colors">info@naharfoods.com</p>
              </div>
              <div className="pb-12 border-b border-brand-border group">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-brand-accent mb-6">Location</h4>
                <p className="text-lg font-sans text-brand-body leading-relaxed max-w-[280px]">
                  Bashundhara RA, Block D, Road 3, Dhaka 1229, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex space-x-12">
              <a href="https://www.facebook.com/share/1E9dqymUcV/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-brand-dark hover:text-brand-accent transition-colors group">
                <Facebook size={20} />
                <span className="text-[10px] uppercase tracking-widest font-black">Meta</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-brand-dark hover:text-brand-accent transition-colors group">
                <Instagram size={20} />
                <span className="text-[10px] uppercase tracking-widest font-black">Insta</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 lg:p-20 border border-brand-border relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-full -z-10 opacity-20"></div>
            <h3 className="text-3xl font-serif font-bold mb-16 text-brand-dark italic tracking-tight">Direct Inquiry</h3>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 border-b border-brand-border focus-within:border-brand-accent transition-colors pb-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block px-1">Identity</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-0 focus:ring-0 text-lg font-serif p-1 text-brand-dark placeholder:text-gray-300"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="space-y-4 border-b border-brand-border focus-within:border-brand-accent transition-colors pb-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block px-1">Digits</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-0 focus:ring-0 text-lg font-serif p-1 text-brand-dark placeholder:text-gray-300"
                    placeholder="+880..."
                  />
                </div>
              </div>
              <div className="space-y-4 border-b border-brand-border focus-within:border-brand-accent transition-colors pb-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block px-1">Response At</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-0 focus:ring-0 text-lg font-serif p-1 text-brand-dark placeholder:text-gray-300"
                  placeholder="contact@domain.com"
                />
              </div>
              <div className="space-y-4 border-b border-brand-border focus-within:border-brand-accent transition-colors pb-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block px-1">Requirement</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-0 focus:ring-0 text-lg font-serif p-1 text-brand-dark placeholder:text-gray-300 resize-none"
                  placeholder="How can we serve you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-6 bg-brand-dark text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-accent hover:text-brand-dark transition-all"
              >
                Launch Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
