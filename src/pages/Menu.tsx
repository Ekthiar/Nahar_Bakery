import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingBasket, Plus } from 'lucide-react';

import menuHeaderImg from '../assets/images/regenerated_image_1778615569521.jpg';
import almondCroissantImg from '../assets/images/regenerated_image_1778615573568.jpg';
import cheeseCroissantImg from '../assets/images/regenerated_image_1778615571091.webp';
import redVelvetCupcakeImg from '../assets/images/regenerated_image_1778615572067.jpg';

const categories = ['All', 'Breads', 'Pastries', 'Cakes', 'Savories', 'Cookies'];

const menuItems = [
  { id: 1, name: 'Artisan Sourdough', price: '৳540', category: 'Breads', desc: 'Slow-fermented for 24 hours with organic flour.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Almond Croissant', price: '৳420', category: 'Pastries', desc: 'Flaky pastry filled with rich almond cream.', image: almondCroissantImg },
  { id: 3, name: 'Cinnamon Roll', price: '৳360', category: 'Pastries', desc: 'Soft dough swirled with spicy cinnamon and sugar.', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Whole Wheat Loaf', price: '৳480', category: 'Breads', desc: 'Dense and nutritious with a nutty crust.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Chocolate Fudge Cake', price: '৳3000', category: 'Cakes', desc: 'Rich, moist chocolate cake with dark ganache.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Cheese Croissant', price: '৳450', category: 'Savories', desc: 'Savory flakes with premium melted cheddar.', image: cheeseCroissantImg },
  { id: 7, name: 'Bagel Selection', price: '৳180', category: 'Breads', desc: 'Assorted fresh bagels: Sesame, Poppy, Plain.', image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80&w=600' },
  { id: 8, name: 'Red Velvet Cupcake', price: '৳420', category: 'Cakes', desc: 'Classic red velvet with cream cheese frosting.', image: redVelvetCupcakeImg },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen pt-32 pb-24 px-12 bg-brand-bg hover:selection:bg-brand-accent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row gap-20 items-end">
           <div className="flex-1">
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Seasonal Selection</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold italic mb-8 text-brand-black tracking-tighter leading-none">Our Menu</h1>
            <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed font-serif">
              "Every morning, our ovens release a new collection of artisanal wonders."
            </p>
           </div>
           <div className="w-full md:w-1/3 bg-white p-3 border border-brand-border">
              <img src={menuHeaderImg} className="w-full h-48 object-cover grayscale" alt="Baker Choice" />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest font-bold"></span>
                <span className="text-[9px] uppercase tracking-widest text-brand-accent font-bold">Chef's Special</span>
              </div>
           </div>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-6 mb-16 border-b border-brand-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-[10px] uppercase tracking-widest font-bold transition-all pb-2 border-b-2 ${
                activeTab === category 
                  ? 'text-brand-accent border-brand-accent' 
                  : 'text-gray-400 border-transparent hover:text-brand-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={item.id}
              className="group bg-white p-8 hover:bg-brand-bg transition-all h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-square mb-8 bg-brand-bg border border-brand-border p-2">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif font-bold text-xl text-brand-black">{item.name}</h3>
                  <span className="text-brand-accent font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-gray-400 text-[11px] uppercase tracking-wider leading-relaxed mb-6 h-12 overflow-hidden">{item.desc}</p>
              </div>
              <button className="w-full py-4 border border-brand-black text-brand-black text-[9px] uppercase tracking-widest font-bold hover:bg-brand-black hover:text-white transition-all">
                Add to Selection
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
