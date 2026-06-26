"use client";

import { motion } from "framer-motion";
import { Pill, Activity, ShieldAlert, Heart, Zap, Sparkles, Smile, Baby, PhoneCall } from "lucide-react";

export default function Categories() {
  const categoriesList = [
    {
      title: "Fever Medicines",
      icon: <Pill className="h-6 w-6 text-orange-500" />,
      tag: "Paracetamol, Analgesics, NSAIDs",
      desc: "Authentic fever reducers and pain relievers to manage symptoms quickly.",
    },
    {
      title: "Cold and Cough Medicines",
      icon: <ShieldAlert className="h-6 w-6 text-blue-500" />,
      tag: "Syrups, Lozenges, Decongestants",
      desc: "Antihistamines, cough drops, and syrups to clear respiratory pathways.",
    },
    {
      title: "Diabetes Medicines",
      icon: <Activity className="h-6 w-6 text-red-500" />,
      tag: "Metformin, Glimepiride, Insulin",
      desc: "Complete stock of blood sugar control and management therapeutics.",
    },
    {
      title: "Blood Pressure Medicines",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      tag: "Beta Blockers, ACE Inhibitors",
      desc: "Prescription cardiovascular drugs for maintaining stable pressure.",
    },
    {
      title: "Vitamins and Supplements",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      tag: "Multivitamins, Minerals, Calcium",
      desc: "Immunity and energy boosters to keep your daily vitals optimized.",
    },
    {
      title: "Children's Medicines",
      icon: <Baby className="h-6 w-6 text-indigo-500" />,
      tag: "Pediatric Drops, Syrups, Powders",
      desc: "Specially formulated gentle doses for children and baby healthcare.",
    },
    {
      title: "Women's Healthcare Products",
      icon: <Sparkles className="h-6 w-6 text-fuchsia-500" />,
      tag: "Feminine Hygiene, Calcium, Prenatal",
      desc: "Wellness products specifically tailored for women's nutritional needs.",
    },
    {
      title: "Skin Care Products",
      icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
      tag: "Dermatological Lotions, Creams",
      desc: "Authentic, skin-friendly, and clinically approved skincare.",
    },
    {
      title: "Personal Care Products",
      icon: <Smile className="h-6 w-6 text-teal-500" />,
      tag: "Oral Care, Body Hygiene, Soaps",
      desc: "Everyday grooming and personal cleanliness products for your family.",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Medicine Classifications</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Browse Medicine Categories
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Find the exact healthcare category you require under qualified supervision
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesList.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative rounded-3xl p-6 bg-gradient-to-b from-gray-50/50 to-white dark:from-slate-850/50 dark:to-slate-850/20 border border-gray-150 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/60 group-hover:scale-105 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase bg-gray-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full">
                    Pharmacy Stock
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-heading text-lg font-bold text-brand-gray-dark dark:text-white mb-1 group-hover:text-brand-green transition-colors">
                  {cat.title}
                </h3>
                
                <span className="text-[11px] font-bold text-brand-green dark:text-emerald-400 block mb-3 uppercase tracking-wider">
                  {cat.tag}
                </span>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
                  {cat.desc}
                </p>
              </div>

              {/* Action WhatsApp Inquire */}
              <a
                href={`https://wa.me/918394894546?text=Hello%20Gangwar%20Medical%20Store,%20do%20you%20have%20medicines%20available%20under%20the%20${encodeURIComponent(cat.title)}%20category?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-brand-green/10 dark:bg-slate-800 dark:hover:bg-brand-green/20 text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-emerald-400 py-3 rounded-2xl text-xs font-bold transition-all duration-200 border border-gray-100 dark:border-slate-800"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Check Availability
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
