"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Phone, MapPin, Award, CheckCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-green-light/30 via-transparent to-transparent dark:from-brand-green/5 dark:via-transparent dark:to-transparent"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-brand-green/5 dark:bg-brand-green/2 blur-[80px] sm:blur-[120px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-brand-blue/5 dark:bg-brand-blue/2 blur-[60px] sm:blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pharmacist Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-green/10 dark:bg-brand-green/20 text-brand-green dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-brand-green/20"
            >
              <Award className="h-4.5 w-4.5" />
              <span>Managed by Drx. Sunil Kumar (B.Pharm)</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-gray-dark dark:text-white leading-[1.1] mb-6"
            >
              Gangwar <span className="text-brand-green">Medical Store</span>
            </motion.h1>

            {/* Tagline / Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed font-medium"
            >
              Providing Genuine Medicines and Healthcare Products with Professional Pharmaceutical Guidance. Your trusted local partner for a healthier life.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mb-10 text-sm font-semibold text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-5 w-5 text-brand-green" />
                <span>100% Genuine Medicines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-brand-green" />
                <span>B.Pharm Certified Pharmacist</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="tel:8394894546"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/918394894546?text=Hello%20Gangwar%20Medical%20Store,%20I%20have%20an%20inquiry%20regarding..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-700/80 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Custom inline SVG for WhatsApp */}
                <svg className="h-5 w-5 fill-emerald-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 1.977 14.1 1.933 12.01 1.93c-5.44 0-9.866 4.372-9.87 9.802 0 1.93.525 3.811 1.522 5.511l-.994 3.63 3.738-.98c1.552.847 3.125 1.261 4.651 1.261z" />
                </svg>
                WhatsApp Us
              </a>

              <a
                href="https://maps.app.goo.gl/5tBXyVL7PqqmYsMx6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue dark:text-sky-400 px-6 py-4 rounded-2xl font-bold transition-all duration-200"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Visual Background Cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-blue/20 rounded-3xl transform rotate-3 scale-102 -z-10 blur-sm" />
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-3xl transform -rotate-1.5 -z-10 border border-gray-100 dark:border-slate-800" />
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/pharmacy_hero.png"
                alt="Gangwar Medical Store Premium Pharmacy Interior"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Floating Trust Indicator */}
            <motion.div
              className="absolute -bottom-5 -left-5 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex max-w-[200px]"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="bg-brand-green text-white p-2 rounded-xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Quality Guarantee</span>
                <span className="text-sm font-bold text-brand-gray-dark dark:text-white">100% Authentic</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
