"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Users, Shield, Award, Sparkles } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let animationFrame = 0;
    let startedAt: number | null = null;
    const totalMilliseconds = duration * 1000;

    const animate = (timestamp: number) => {
      if (startedAt === null) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / totalMilliseconds, 1);
      setCount(Math.round(value * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-brand-green" />,
      number: 10000,
      suffix: "+",
      label: "Happy Customers Served",
      desc: "Delivering health & wellness daily",
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-blue" />,
      number: 100,
      suffix: "%",
      label: "Genuine Medicines",
      desc: "Procured directly from top manufacturers",
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      number: 15,
      suffix: "+",
      label: "Years of Trust",
      desc: "Dedicated to community care",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
      number: 10,
      suffix: "+",
      label: "Popular Brands Available",
      desc: "Top pharmaceuticals in stock",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/40 transition-colors"
            >
              <div className="p-3 bg-gray-50 dark:bg-slate-850 rounded-xl shadow-inner border border-gray-100 dark:border-slate-800 shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl font-extrabold text-brand-gray-dark dark:text-white leading-none">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200 mt-1.5 leading-snug">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-normal">
                  {stat.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
