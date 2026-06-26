"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Brands() {
  const brands = [
    { name: "Sun Pharma", label: "SUN", color: "text-amber-600 bg-amber-50 dark:bg-amber-950/20" },
    { name: "Cipla", label: "C", color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20" },
    { name: "Abbott", label: "A", color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20" },
    { name: "Mankind", label: "M", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20" },
    { name: "Zydus", label: "Z", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20" },
    { name: "Himalaya", label: "H", color: "text-green-600 bg-green-50 dark:bg-green-950/20" },
    { name: "Dabur", label: "D", color: "text-orange-600 bg-orange-50 dark:bg-orange-950/20" },
    { name: "Dr. Reddy's", label: "RDY", color: "text-red-600 bg-red-50 dark:bg-red-950/20" },
    { name: "Alkem", label: "ALK", color: "text-sky-600 bg-sky-50 dark:bg-sky-950/20" },
    { name: "Torrent Pharma", label: "T", color: "text-violet-600 bg-violet-50 dark:bg-violet-950/20" },
  ];

  return (
    <section id="brands" className="py-16 bg-brand-gray-light dark:bg-background border-t border-gray-150 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Authorized Retailer</h2>
          <p className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Popular Brands Available In-Store
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
            We source our stocks only from certified pharmaceutical giants
          </p>
          <div className="h-0.5 w-12 bg-brand-green mx-auto rounded-full mt-3" />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card py-6 px-4 rounded-2xl flex flex-col items-center justify-center border border-gray-150 dark:border-slate-800 text-center shadow-sm relative group hover:border-brand-green/20 transition-all duration-300"
            >
              {/* Brand Stylized Logo Mark */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-extrabold text-lg mb-3 ${brand.color} shadow-sm border border-black/5 dark:border-white/5`}>
                {brand.label}
              </div>

              {/* Brand Name */}
              <span className="font-heading text-sm font-extrabold text-brand-gray-dark dark:text-white group-hover:text-brand-green transition-colors">
                {brand.name}
              </span>

              {/* Trust Tick */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-brand-green/10 text-brand-green p-0.5 rounded-full">
                  <Check className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
