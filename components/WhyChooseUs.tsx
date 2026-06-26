"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Award, Tag, HeartHandshake, Layers, Smile } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck className="h-7 w-7 text-emerald-500" />,
      title: "Genuine Medicines",
      desc: "100% authentic and trusted medicines sourced straight from licensed distributors. Quality is our highest priority.",
      bgClass: "from-emerald-500/10 to-transparent",
      borderClass: "hover:border-emerald-500/20",
    },
    {
      icon: <Award className="h-7 w-7 text-brand-green" />,
      title: "B.Pharm Qualified Pharmacist",
      desc: "Professional health advice and accurate dosage guidance provided directly by Drx. Sunil Kumar (B.Pharm).",
      bgClass: "from-brand-green/10 to-transparent",
      borderClass: "hover:border-brand-green/20",
    },
    {
      icon: <Tag className="h-7 w-7 text-brand-blue" />,
      title: "Affordable Prices",
      desc: "Get authentic medicines and daily wellness healthcare items at the most reasonable prices with regular discounts.",
      bgClass: "from-brand-blue/10 to-transparent",
      borderClass: "hover:border-brand-blue/20",
    },
    {
      icon: <HeartHandshake className="h-7 w-7 text-pink-500" />,
      title: "Trusted Healthcare Partner",
      desc: "We serve our local community in Bilaspur with genuine empathy, individual care, and total dedication to wellness.",
      bgClass: "from-pink-500/10 to-transparent",
      borderClass: "hover:border-pink-500/20",
    },
    {
      icon: <Layers className="h-7 w-7 text-violet-500" />,
      title: "Wide Range of Products",
      desc: "From prescription drugs and diabetes kits to surgical items, personal care, baby products, and health supplements.",
      bgClass: "from-violet-500/10 to-transparent",
      borderClass: "hover:border-violet-500/20",
    },
    {
      icon: <Smile className="h-7 w-7 text-amber-500" />,
      title: "Customer Satisfaction",
      desc: "A warm, supportive shopping environment with friendly staff ready to guide and support all your queries.",
      bgClass: "from-amber-500/10 to-transparent",
      borderClass: "hover:border-amber-500/20",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-brand-gray-light dark:bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Our Core Strengths</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Why People Trust Gangwar Medical Store
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card p-8 rounded-3xl transition-all duration-300 relative overflow-hidden group border border-gray-150 dark:border-slate-800 ${card.borderClass} shadow-md shadow-slate-100 dark:shadow-none hover:shadow-xl`}
            >
              {/* Background gradient hint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icon Container */}
              <div className="p-4 bg-gray-50 dark:bg-slate-850 rounded-2xl w-fit shadow-inner border border-gray-100 dark:border-slate-800 mb-6 group-hover:scale-115 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300">
                {card.icon}
              </div>

              {/* Card content */}
              <h3 className="font-heading text-xl font-bold text-brand-gray-dark dark:text-white mb-3 tracking-tight">
                {card.title}
              </h3>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
