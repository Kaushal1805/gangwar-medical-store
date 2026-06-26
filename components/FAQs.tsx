"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-150 dark:border-slate-800/80 last:border-b-0 py-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left py-2 font-heading font-bold text-base sm:text-lg text-brand-gray-dark dark:text-white hover:text-brand-green dark:hover:text-brand-green transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <div className="p-1.5 bg-gray-50 dark:bg-slate-850 rounded-lg text-gray-500 border border-gray-100 dark:border-slate-800">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 leading-relaxed font-medium pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Are all types of medicines available at your store?",
      answer: "Yes, a wide range of allopathic medicines, healthcare products, baby care items, and health supplements are available. If a rare medicine is out of stock, we can order and arrange it for you within 24 to 48 hours.",
    },
    {
      question: "Is there a qualified pharmacist available to guide me?",
      answer: "Absolutely. Gangwar Medical Store is managed directly by Drx. Sunil Kumar, who holds a professional B.Pharm qualification. He is available in the store to review prescriptions, discuss dosage directions, and answer clinical questions.",
    },
    {
      question: "What are the store timings?",
      answer: "Our pharmacy is open every day (Monday to Sunday) from 08:00 AM to 10:00 PM. These timings are editable if business hours change during local festivals or emergency rules.",
    },
    {
      question: "Are prescription medicines available, and do I need to bring my prescription?",
      answer: "Yes, prescription medicines are fully stocked. Under regulatory guidelines, you must present a valid physical or digital prescription from a registered medical practitioner for schedule-controlled drugs.",
    },
    {
      question: "Can customers contact the store through WhatsApp?",
      answer: "Yes! We encourage local customers to query medicine availability by uploading prescriptions on WhatsApp. Save our number +91 8394894546 or click our floating WhatsApp chat button to check availability instantly.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HelpCircle className="h-8 w-8 text-brand-green mx-auto mb-3 animate-bounce" />
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Common Questions</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Frequently Asked Questions
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* FAQ List */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-lg">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
