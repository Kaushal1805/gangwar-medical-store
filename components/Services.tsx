"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Pill, 
  Baby, 
  Droplet, 
  HeartPulse, 
  Briefcase, 
  Sparkles, 
  Smile, 
  SmilePlus, 
  Flower2, 
  PlusCircle, 
  ShoppingBag,
  Venus
} from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <FileText className="h-6 w-6 text-emerald-500" />,
      title: "Prescription Medicines",
      desc: "All doctor-prescribed therapeutics stocked and dispensed with precise safety checks.",
    },
    {
      icon: <Pill className="h-6 w-6 text-brand-green" />,
      title: "OTC Medicines",
      desc: "Wide range of safe Over-The-Counter medicines for common symptoms like fever, cold, etc.",
    },
    {
      icon: <Baby className="h-6 w-6 text-brand-blue" />,
      title: "Baby Care Products",
      desc: "Premium baby foods, sensitive skin lotions, diapers, and baby hygiene essentials.",
    },
    {
      icon: <Droplet className="h-6 w-6 text-red-500" />,
      title: "Diabetes Care Products",
      desc: "Glucometers, test strips, insulin syringe supplies, sugar-free supplements, and monitors.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-rose-500" />,
      title: "Blood Pressure Products",
      desc: "Automatic digital BP monitors, cuffs, stethoscopes, and tracking logs.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-slate-500" />,
      title: "Surgical Items",
      desc: "Dressings, bandages, thermometers, support braces, sterile gloves, and instruments.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-amber-500" />,
      title: "Health Supplements",
      desc: "Multivitamins, protein powders, calcium tablets, and wellness nutrition supplements.",
    },
    {
      icon: <Smile className="h-6 w-6 text-violet-500" />,
      title: "Personal Care Products",
      desc: "Daily personal hygiene items, oral care, shampoos, soaps, and deodorants.",
    },
    {
      icon: <Flower2 className="h-6 w-6 text-pink-400" />,
      title: "Skin Care Products",
      desc: "Dermatologist-recommended moisturizers, sunscreens, acne treatments, and serums.",
    },
    {
      icon: <Venus className="h-6 w-6 text-fuchsia-500" />,
      title: "Women's Healthcare Products",
      desc: "Maternal nutrition, feminine hygiene, wellness supplements, and personal care.",
    },
    {
      icon: <PlusCircle className="h-6 w-6 text-red-600" />,
      title: "First Aid Essentials",
      desc: "Antiseptics, band-aids, cotton rolls, medical tapes, and complete first aid kits.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-indigo-500" />,
      title: "Daily Healthcare Needs",
      desc: "A one-stop solution for all standard family healthcare utilities and wellness products.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-gray-light dark:bg-background relative">
      {/* Decorative gradient background elements */}
      <div className="absolute top-1/4 left-10 -z-10 w-96 h-96 bg-brand-green/2 dark:bg-brand-green/1 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 -z-10 w-96 h-96 bg-brand-blue/2 dark:bg-brand-blue/1 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Our Services</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Complete Pharmacy & Healthcare Solutions
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card p-6 rounded-2xl border border-gray-150 dark:border-slate-800 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-lg"
            >
              {/* Icon Container */}
              <div className="p-3 bg-gray-50 dark:bg-slate-850 rounded-xl w-fit border border-gray-100 dark:border-slate-800 mb-4 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              {/* Service Details */}
              <h3 className="font-heading text-base font-bold text-brand-gray-dark dark:text-white mb-2 leading-snug group-hover:text-brand-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
