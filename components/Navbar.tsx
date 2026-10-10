"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Activity } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Categories", href: "#categories" },
  { name: "Medicines", href: "#medicines" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scrolling to add shadow/glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure dark mode is completely disabled and cleared on load
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="bg-brand-green text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-brand-green/20">
                <Activity className="h-6 w-6 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl leading-none text-brand-gray-dark dark:text-white tracking-tight">
                  Gangwar<span className="text-brand-green"> Medical</span>
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase mt-0.5">
                  Managed by Drx. Sunil Kumar (B.Pharm)
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 font-medium">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 relative ${
                    activeSection === item.href.substring(1)
                      ? "text-brand-green"
                      : "text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-green rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:8394894546"
                className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-brand-green/20 hover:shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800/80 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 lg:hidden glass-nav border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-150 ${
                    activeSection === item.href.substring(1)
                      ? "bg-brand-green/10 text-brand-green"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
                <a
                  href="tel:8394894546"
                  className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white py-3.5 rounded-xl font-bold shadow-md shadow-brand-green/20"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
