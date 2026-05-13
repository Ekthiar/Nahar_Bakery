import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/regenerated_image_1778614742745.jpg';
import chairmanImg from '../assets/images/input_file_2.png';
import journalImg1 from '../assets/images/regenerated_image_1778617185242.jpg';
import journalImg2 from '../assets/images/regenerated_image_1778616841290.jpg';

const featuredProducts = [
  { id: 1, name: 'Sourdough Bread', price: '৳540', category: 'Breads', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Chocolate Croissant', price: '৳390', category: 'Pastries', image: 'https://images.unsplash.com/photo-1509339022327-1e1e25ef61a7?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Artisan Baguette', price: '৳330', category: 'Breads', image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80&w=600' },
];

export default function Home() {
  return (
    <div className="w-full bg-brand-bg">
      {/* Hero Section - Full Background Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Nahar Foods Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 lg:px-24 py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-8 block drop-shadow-sm">Est. 2022</span>
            <h1 className="text-7xl lg:text-[140px] font-serif leading-[0.8] mb-12 text-white font-bold tracking-tight drop-shadow-xl">
              NAHAR <br />
              <span className="text-brand-accent italic font-medium">FOODS</span> <br />
              
            </h1>
            <p className="text-lg text-white/90 mb-12 max-w-xl mx-auto leading-relaxed font-light drop-shadow">
              We define the standard of live baking. Every loaf is a performance, every pastry a masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/menu" className="group flex items-center gap-4 bg-brand-accent text-brand-dark px-12 py-6 text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:scale-105 shadow-2xl">
                The Menu <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link to="/about" className="flex items-center gap-4 border border-white/40 text-white px-12 py-6 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-dark transition-all backdrop-blur-md">
                The Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Highlights - Recipe 1 style but warmer */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-brand-border h-auto md:h-80 bg-white">
        {[
          { num: '01', title: 'Live Kitchen', desc: 'Watch your goods come to life in our open theater bakery.' },
          { num: '02', title: 'Pure Flour', desc: 'Stone-ground organic flour sourced from the finest mills.' },
          { num: '03', title: 'Daily Craft', desc: 'Small-batch production ensuring unmatched freshness every morning.' }
        ].map((item, idx) => (
          <div key={idx} className="p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-border last:border-r-0 hover:bg-brand-bg transition-colors group">
            <span className="text-[10px] uppercase tracking-widest font-black text-brand-accent opacity-30 group-hover:opacity-100 transition-opacity">{item.num}</span>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-brand-dark font-bold italic">{item.title}</h3>
              <p className="text-xs text-brand-body leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy - Big Type */}
      <section className="py-40 px-12 lg:px-24 bg-brand-dark text-white overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-white/[0.02] -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-5xl relative z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-12 block">Philosophy</span>
          <h2 className="text-5xl lg:text-[90px] font-serif leading-[1.1] mb-16 tracking-tighter">
            We believe that <span className="italic text-gray-500">true taste</span> resides in the hands of the artisan.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Our live bakery is more than a shop—it's a commitment to transparency. We don't hide our process; we celebrate it. From the first stir of the sourdough starter to the moment it leaves the oven golden brown.
            </p>
            <div className="flex flex-col justify-end">
               <Link to="/about" className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent border-b border-brand-accent/30 self-start pb-2 hover:border-brand-accent transition-all">
                 Read Our Manifesto
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Archive - NEW SECTION */}
      <section className="py-32 bg-white px-12 lg:px-24">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Visual Journal</span>
            <h2 className="text-5xl font-serif font-bold italic text-brand-dark tracking-tighter">Atmosphere.</h2>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed italic">
            "Capturing the fleeting moments of steam, heat, and the golden crust."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[1000px] md:h-[600px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-4 h-full relative overflow-hidden bg-brand-bg border border-brand-border group"
          >
            <img src={journalImg1} className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
          </motion.div>
          
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="h-full relative overflow-hidden bg-brand-bg border border-brand-border group"
            >
              <img src={journalImg2} className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
            </motion.div>
            <div className="grid grid-rows-2 gap-6 h-full">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative overflow-hidden bg-brand-bg border border-brand-border group"
              >
                <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative overflow-hidden bg-brand-bg border border-brand-border group"
              >
                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Highlight - Re-styled */}
      <section className="py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative bg-brand-bg p-8 border border-brand-border"
              >
                <div className="absolute -inset-4 border border-brand-accent/20 -z-10"></div>
                <img 
                  src={chairmanImg} 
                  alt="Chairman" 
                  className="w-full h-auto grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="mt-8">
                  <p className="text-2xl font-serif text-brand-dark italic font-bold">Engr. Md Jasim Uddin (Jony)</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mt-2">Chairman / Visionary</p>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-3/5 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-serif font-bold italic mb-10 text-brand-dark tracking-tighter leading-tight">
                Pioneering the <br /> <span className="text-brand-accent not-italic">Live Standard.</span>
              </h2>
              <p className="text-xl text-brand-body mb-10 leading-relaxed font-light font-serif">
                "Our mission is to restore the integrity of baking. By bringing the ovens into the shop floor, we ensure that every customer experiences food at its absolute peak—hygienic, fresh, and uncompromising."
              </p>
              <div className="h-1 w-20 bg-brand-accent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
