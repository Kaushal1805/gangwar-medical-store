"use client";

import { motion } from "framer-motion";
import { Award, UserCheck, ShieldCheck, HeartPulse } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="h-5 w-5 text-brand-green" />,
      title: "B.Pharm Qualification",
      desc: "Qualified pharmaceutical consultant offering verified expert guidelines for safe usage.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-brand-blue" />,
      title: "Genuine Medicines Only",
      desc: "Zero tolerance for duplicates. We procure medicines strictly from leading official companies.",
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-pink-500" />,
      title: "Empathy & Patient Care",
      desc: "Treating clients like family, helping you find alternatives and proper schedules.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3 block">
              About Our Pharmacy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight mb-6">
              Your Health is Our Responsibility & Passion
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
              Gangwar Medical Store is committed to providing genuine medicines and healthcare products with trust and professionalism. Managed by **Drx. Sunil Kumar (B.Pharm)**, our pharmacy focuses on customer care, quality control, and clinical pharmaceutical guidance.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Our ultimate goal is to ensure better health and complete customer satisfaction in Bilaspur. We act as a reliable gateway between doctor prescriptions and patient healing, ensuring that you receive the exact brand, safe guidelines, and professional customer service every time you visit.
            </p>

            {/* Managed Box Card */}
            <div className="p-6 bg-gradient-to-r from-brand-green/5 to-brand-blue/5 rounded-3xl border border-brand-green/10 dark:border-brand-green/20 flex gap-4 items-start">
              <div className="p-3 bg-brand-green text-white rounded-xl shadow-md shrink-0">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-brand-gray-dark dark:text-white">
                  Drx. Sunil Kumar, B.Pharm
                </h4>
                <p className="text-xs text-brand-green dark:text-emerald-400 font-bold uppercase tracking-wider mt-0.5">
                  Chief Pharmacist & Store Manager
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed font-medium">
                  With professional degree training, Drx. Sunil Kumar provides consultations, cross-checks drug interactions, and guides patients with precise instructions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Column */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-gray-dark dark:text-white mb-2 tracking-tight">
                Our Healthcare Guidelines
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                We follow strict pharmacy standards to deliver absolute safety to our clients.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((val, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-6 rounded-2xl flex items-start gap-4 border border-gray-150 dark:border-slate-800 shadow-sm"
                >
                  <div className="p-3.5 bg-gray-50 dark:bg-slate-850 rounded-xl shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-brand-gray-dark dark:text-white mb-1">
                      {val.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Trust Seal Banner */}
            <div className="mt-2 text-center p-4 border border-dashed border-gray-200 dark:border-slate-800 rounded-2xl bg-gray-50/50 dark:bg-slate-900/50 flex items-center justify-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-ping" />
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                Licensed Pharmacy under UP Drug Control Authority
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
