"use client";

import { motion } from "framer-motion";
import { Pill, PhoneCall } from "lucide-react";
import Image from "next/image";

const medicines = [
  "Paracetamol 500",
  "Zerodol SP",
  "Zerodol P",
  "Zifi 200",
  "Pantop DSR",
  "Omez D",
  "Aciloc 150",
  "Aciloc 300",
  "Moxikind-CV 625",
  "Gudcef 200",
  "Vomikind MD 4",
  "Ibumax",
  "Mox 250",
  "Mox 500",
  "Vicks Action 500",
  "Dolo 500",
  "Dolo 650",
  "PregaNews",
  "Zenflox 200",
  "Zenflox OZ",
  "Zerodol MR",
  "Corex DX Syrup",
  "Solvincold Syrup",
];

export default function MedicineList() {
  return (
    <section id="medicines" className="py-20 bg-brand-green-light/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Available at our store</h2>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark leading-tight">Popular Medicines</h2>
          <p className="text-sm text-gray-600 mt-3 font-medium">
            Ask us about current availability. Prescription medicines are supplied only against a valid prescription where required.
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm mb-8">
          <Image
            src="/images/medicine-catalogue.png"
            alt="Assorted medicines available at Gangwar Medical Store"
            width={1920}
            height={1080}
            className="h-44 sm:h-56 w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/5 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-md items-center px-6 sm:px-10">
            <p className="text-lg sm:text-2xl font-heading font-extrabold text-brand-gray-dark">
              Everyday essentials, thoughtfully stocked.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {medicines.map((medicine, index) => (
            <motion.a
              key={medicine}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.03, 0.3) }}
              href={`https://wa.me/918394894546?text=${encodeURIComponent(`Hello Gangwar Medical Store, is ${medicine} available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-white border border-brand-green/10 px-4 py-3.5 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all"
            >
              <span className="p-2 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors"><Pill className="h-4 w-4" /></span>
              <span className="text-sm font-bold text-brand-gray-dark">{medicine}</span>
            </motion.a>
          ))}
        </div>

        <a
          href="https://wa.me/918394894546?text=Hello%20Gangwar%20Medical%20Store,%20I%20would%20like%20to%20check%20medicine%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 w-fit flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-brand-green/20 transition-all"
        >
          <PhoneCall className="h-4 w-4" /> Check medicine availability
        </a>
      </div>
    </section>
  );
}
