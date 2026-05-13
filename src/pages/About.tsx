import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      {/* Editorial Introduction */}
      <section className="py-32 border-b border-brand-border bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="w-full md:w-[55%]">
              <span className="text-brand-accent text-[11px] uppercase tracking-[0.5em] font-bold mb-10 block">Our Heritage</span>
              <h1 className="text-7xl md:text-[110px] font-serif font-bold leading-[0.85] mb-12 text-brand-dark tracking-tighter">
                THE <br />
                <span className="text-brand-accent italic font-medium">SOUL</span> <br />
                OF FIRE.
              </h1>
              <p className="text-xl text-brand-body leading-relaxed mb-10 font-light font-serif">
                Nahar Foods began with a radical vision: to restore the theatricality of baking. We believe that the aroma of yeast and the roar of the oven are the true ingredients of a perfect morning.
              </p>
              <div className="flex items-center gap-8 border-t border-brand-border pt-10">
                <div className="h-px w-12 bg-brand-accent"></div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Est Chottogram, 2022</p>
              </div>
            </div>
            <div className="w-full md:w-[45%] relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="aspect-[4/5] overflow-hidden grayscale brightness-90 border border-brand-border"
               >
                 <img src="/input_file_1.png" className="w-full h-full object-cover" alt="Heritage" />
               </motion.div>
               <div className="absolute -bottom-8 -left-8 bg-brand-accent p-8 text-brand-dark hidden lg:block">
                 <p className="text-3xl font-serif italic font-bold">Live.</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Experience</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Minimal Grid */}
      <section className="py-40 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { icon: <ShieldCheck size={28} className="text-brand-accent" />, title: "Absolute Hygiene", desc: "Our live kitchen follows rigorous international safety protocols." },
              { icon: <Zap size={28} className="text-brand-accent" />, title: "Live Process", desc: "Transparency is our main ingredient. No hidden batches allowed." },
              { icon: <Heart size={28} className="text-brand-accent" />, title: "Artisan Hands", desc: "Every recipe is a masterclass in patience and technique." },
              { icon: <Users size={28} className="text-brand-accent" />, title: "Local Heart", desc: "We are a sanctuary for the neighborhood, one loaf at a time." }
            ].map((v, i) => (
              <div key={i} className="p-16 hover:bg-white/[0.03] transition-all flex flex-col justify-between min-h-[300px]">
                <div className="mb-12">{v.icon}</div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-4">{v.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section className="py-40 bg-white text-center border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-12">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-10 block">Community</span>
          <h2 className="text-5xl font-serif font-bold italic mb-8 text-brand-dark tracking-tighter">Follow Our Journey</h2>
          <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
            Join thousands of food lovers who experience the magic of live baking every day.
          </p>
          <a 
            href="https://www.facebook.com/share/1E9dqymUcV/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-16 py-6 bg-brand-dark text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-accent hover:text-brand-dark transition-all"
          >
            Our Facebook
          </a>
        </div>
      </section>
    </div>
  );
}
