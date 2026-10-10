"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: "storefront",
      title: "Store Front View",
      category: "Exterior",
      src: "/gangwar-storefront.jpeg",
      desc: "Main entrance of Gangwar Medical Store at Rajghat, Aurangabaad, Nawabganj, Bareilly.",
    },
    {
      id: "interior",
      title: "Interior View",
      category: "Interior",
      src: "/gangwar-interior.jpeg",
      desc: "Inside our organized store with a wide range of medicines and healthcare products.",
    },
    {
      id: "shelves",
      src: "/sunil-pharmacist.jpeg",
      title: "Our Pharmacist",
      category: "Pharmacist",
      desc: "Drx. Sunil Kumar, B.Pharm, is here to guide you with medicine queries.",
    },
    {
      id: "counter",
      src: "/gangwar-sign.jpeg",
      title: "Store Signboard",
      category: "Contact",
      desc: "Contact Gangwar Medical Store at 8394894546 for availability and guidance.",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Our Facility</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark leading-tight">
            Store Image Gallery
          </p>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Take a virtual tour of our clean, organized, and professional medical facility
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-55px" }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl border border-gray-150 shadow-md group h-80 flex flex-col justify-between bg-gray-50 cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-brand-green shadow-sm">
                {item.category}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-gray-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                <div className="p-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="h-5 w-5" />
                </div>
                <span className="text-xs text-gray-300 font-bold uppercase tracking-widest mt-1">
                  Expand Photo
                </span>
              </div>

              {/* Title Overlay Info (visible by default at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <h3 className="font-heading font-bold text-lg tracking-tight mb-1">{item.title}</h3>
                <p className="text-xs text-gray-205 leading-normal font-semibold">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
