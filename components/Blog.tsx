"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, User, X, Shield, Activity, Heart, Thermometer, Smile, Apple } from "lucide-react";

interface Article {
  id: string;
  icon: React.ReactNode;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
}

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "cold-remedies",
      icon: <Thermometer className="h-6 w-6 text-blue-500" />,
      title: "Common Cold and Cough Remedies",
      excerpt: "Understand how to manage common seasonal cold and cough symptoms safely with OTC remedies and home practices.",
      category: "Seasonal Health",
      date: "June 20, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Stay Hydrated: Drinking warm water, herbal teas, or warm broths helps thin mucus and soothe an irritated throat.",
        "Steam Inhalation: Inhaling steam from a bowl of hot water or using a vaporizer helps relieve nasal congestion.",
        "Salt Water Gargle: Dissolve half a teaspoon of salt in warm water and gargle 3-4 times a day to reduce throat swelling and irritation.",
        "Over-the-Counter Guidance: Drx. Sunil Kumar advises checking active ingredients in cold syrups. Avoid double-dosing on acetaminophen (paracetamol) when taking multi-symptom cold medicines.",
        "When to Consult: If a cough persists for more than 10 days, or is accompanied by high fever or shortness of breath, consult a medical practitioner immediately."
      ]
    },
    {
      id: "vitamin-d",
      icon: <Shield className="h-6 w-6 text-yellow-500" />,
      title: "The Essential Benefits of Vitamin D",
      excerpt: "Discover why Vitamin D is critical for bone health, immune function, and overall metabolic vitality.",
      category: "Supplements",
      date: "June 15, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Bone Density Support: Vitamin D plays a crucial role in helping your body absorb calcium and phosphorus, which are vital for building and maintaining strong bones.",
        "Immune Defense: It modulates cell growth and enhances immune cell responses, helping your body fight off bacterial and viral infections.",
        "Natural Sources: Sunlight exposure is the primary trigger. Dietary sources include fatty fish, egg yolks, fortified milk, and cereal.",
        "Identifying Deficiency: Symptoms like chronic fatigue, bone pain, muscle weakness, and frequent infections may indicate low Vitamin D levels.",
        "Supplementation Safety: Always check with Drx. Sunil Kumar at Gangwar Medical Store before starting high-dose Vitamin D3 supplements to find the correct dosage schema."
      ]
    },
    {
      id: "diabetes-care",
      icon: <Activity className="h-6 w-6 text-red-500" />,
      title: "Essential Diabetes Care & Control Tips",
      excerpt: "Practical lifestyle adjustments and monitoring guidelines for maintaining stable blood glucose levels.",
      category: "Chronic Care",
      date: "June 10, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Consistent Monitoring: Use a reliable digital glucometer to log fasting and post-prandial blood sugar levels at consistent times.",
        "Dietary Discipline: Focus on high-fiber foods, whole grains, lean proteins, and low-glycemic fruits. Control carbohydrate portions.",
        "Regular Physical Activity: At least 30 minutes of brisk walking or moderate exercise daily helps improve insulin sensitivity.",
        "Medication Adherence: Never skip prescribed oral hypoglycemic agents (like Metformin) or insulin doses. Take them at the same time daily.",
        "Foot & Skin Care: Diabetics should check feet daily for cuts or blisters, and apply moisturizer to prevent dry skin cracking."
      ]
    },
    {
      id: "bp-management",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Blood Pressure Management Strategies",
      excerpt: "How to read your blood pressure readings, and steps to keep hypertension controlled.",
      category: "Heart Health",
      date: "June 05, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Reduce Sodium Intake: Limit table salt and avoid highly processed foods, pickles, and canned items which contain high sodium levels.",
        "Adopt the DASH Diet: Emphasize dietary patterns rich in potassium, calcium, and magnesium, such as fresh vegetables, fruits, and low-fat dairy.",
        "Manage Stress Levels: Practice deep breathing, meditation, or light yoga to alleviate daily stress hormones that trigger spikes.",
        "Regular Monitoring: Measure blood pressure in a relaxed seated position. Avoid caffeine or smoking for 30 minutes before taking readings.",
        "Understand Prescriptions: Blood pressure drugs require precise timing. Ask our pharmacist if you experience side effects like dry cough or dizziness."
      ]
    },
    {
      id: "seasonal-health",
      icon: <Smile className="h-6 w-6 text-emerald-500" />,
      title: "Seasonal Health and Allergy Tips",
      excerpt: "Prepare your immune system for weather transitions and avoid common environmental allergens.",
      category: "Wellness",
      date: "May 28, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Identify Triggers: Keep track of when your allergies flare up (pollen seasons, dust transitions) to preemptively adjust your outdoor exposure.",
        "Air Quality Checks: Keep windows closed during high-pollen days and use air purifiers if you suffer from chronic asthma.",
        "Hydration & Hygiene: Wash your face, hands, and hair after spending extended time outdoors to remove pollen residues.",
        "Stock Essential OTCs: Antihistamines, nasal sprays, and eye drops should be kept ready. Consult Drx. Sunil for non-drowsy alternatives.",
        "Boost Ventilation: Maintain fresh air circulation in living areas to prevent indoor mold growth during humid seasonal shifts."
      ]
    },
    {
      id: "immunity-boosters",
      icon: <Apple className="h-6 w-6 text-orange-500" />,
      title: "Top Immunity Boosting Foods",
      excerpt: "A list of natural dietary ingredients rich in antioxidants to bolster your body's defenses.",
      category: "Nutrition",
      date: "May 22, 2026",
      author: "Drx. Sunil Kumar (B.Pharm)",
      content: [
        "Citrus Fruits: Oranges, lemons, and grapefruits are packed with Vitamin C, which increases white blood cell production.",
        "Ginger & Garlic: Rich in bioactive compounds like gingerol and allicin, which possess strong anti-inflammatory properties.",
        "Turmeric: Curcumin in turmeric acts as a powerful antioxidant and immune booster, traditionally consumed with warm milk.",
        "Green Tea: Loaded with flavonoids and epigallocatechin gallate (EGCG), which enhance immune T-cell functions.",
        "Almonds & Nuts: Excellent source of Vitamin E, a fat-soluble antioxidant that requires dietary fat for absorption."
      ]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Health Education</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Health & Wellness Blog
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Read professional guidelines curated by Drx. Sunil Kumar (B.Pharm) to manage daily health
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <motion.article
              key={art.id}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6 border border-gray-150 dark:border-slate-800 shadow-md flex flex-col justify-between hover:border-brand-green/20 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full uppercase">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{art.date}</span>
                  </div>
                </div>

                {/* Article Icon */}
                <div className="p-3 bg-gray-50 dark:bg-slate-850 rounded-2xl w-fit border border-gray-100 dark:border-slate-800 mb-4">
                  {art.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-brand-gray-dark dark:text-white mb-2 leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
                  {art.excerpt}
                </p>
              </div>

              {/* Bottom author and action */}
              <div className="border-t border-gray-100 dark:border-slate-850 pt-4 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                  <User className="h-3.5 w-3.5 text-brand-green" />
                  <span className="font-semibold">{art.author}</span>
                </div>

                <button
                  onClick={() => setActiveArticle(art)}
                  className="flex items-center gap-1 text-xs font-bold text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Read Tips
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Drawer Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card max-w-2xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-gray-100 dark:border-slate-800 pb-4 mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-wider text-brand-green uppercase mb-1">
                    {activeArticle.category}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-gray-dark dark:text-white leading-tight">
                    {activeArticle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-700 dark:hover:text-white rounded-full transition-colors"
                  aria-label="Close article modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="overflow-y-auto pr-2 space-y-4 my-2 flex-1 scrollbar-thin">
                {activeArticle.content.map((paragraph, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="h-5 w-5 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer info */}
              <div className="border-t border-gray-100 dark:border-slate-800 pt-4 mt-4 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5 text-brand-green" />
                  <span>Curated by: <strong>{activeArticle.author}</strong></span>
                </span>
                <span>Published: {activeArticle.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
