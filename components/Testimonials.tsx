"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Excellent service and genuine medicines. Drx. Sunil Kumar always cross-checks the doctor's prescription and provides the correct dosage advice. Very glad we have this medical store nearby.",
      name: "Rajesh Gangwar",
      role: "Local Resident, Bilaspur",
    },
    {
      stars: 5,
      text: "Professional guidance and affordable prices. Unlike other pharmacies, Drx. Sunil takes the time to explain generic options and medicine storage guidelines. Highly recommended for authentic care.",
      name: "Amit Sharma",
      role: "Frequent Customer",
    },
    {
      stars: 5,
      text: "Very reliable medical store. All major brands like Cipla and Sun Pharma are always in stock. You can also WhatsApp them beforehand to confirm availability, which saves a lot of time.",
      name: "Priyanka Verma",
      role: "Bilaspur Resident",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-gray-light dark:bg-background relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-brand-green/2 dark:bg-brand-green/1 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Customer Feedback</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            What Our Community Says
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-md relative flex flex-col justify-between hover:border-brand-green/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 text-gray-200/60 dark:text-slate-800/40 pointer-events-none">
                <Quote className="h-12 w-12 transform rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-650 dark:text-gray-300 italic leading-relaxed font-medium mb-6 relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-gray-150 dark:border-slate-800/80 pt-4 flex flex-col">
                <span className="font-heading text-base font-extrabold text-brand-gray-dark dark:text-white">
                  {rev.name}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mt-0.5 uppercase tracking-wide">
                  {rev.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
