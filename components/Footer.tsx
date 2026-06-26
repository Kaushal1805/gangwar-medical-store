"use client";

import { Activity, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
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

  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Categories", href: "#categories" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-150 dark:border-slate-800/80 pt-16 pb-8 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute -bottom-10 right-0 -z-10 w-96 h-96 bg-brand-green/2 dark:bg-brand-green/1 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Logo & Citation Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="bg-brand-green text-white p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md shadow-brand-green/10">
                <Activity className="h-5.5 w-5.5" />
              </div>
              <span className="font-heading font-extrabold text-xl leading-none text-brand-gray-dark dark:text-white tracking-tight">
                Gangwar<span className="text-brand-green"> Medical</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 max-w-sm">
              Your Trusted Partner for Genuine Medicines & Healthcare. Operating with a patient-first approach to provide local pharmaceutical consultations.
            </p>

          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-heading text-xs font-bold text-brand-gray-dark dark:text-white uppercase tracking-widest mb-6">
              Navigation Menu
            </h4>
            <ul className="space-y-3 font-semibold text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-500 hover:text-brand-green dark:text-gray-400 dark:hover:text-brand-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-heading text-xs font-bold text-brand-gray-dark dark:text-white uppercase tracking-widest mb-6">
              Store Details
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Rajghat, Aurangabaad, Nawabganj, Bareilly, Uttar Pradesh - 262401
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                <a href="tel:8394894546" className="hover:text-brand-green transition-colors">
                  +91 83948 94546
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                <a href="mailto:sunilgangwar4326@gmail.com" className="hover:text-brand-green transition-colors">
                  sunilgangwar4326@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-450 dark:text-gray-500 font-semibold font-mono">
            &copy; {currentYear} Gangwar Medical Store. All Rights Reserved.
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-450 dark:text-gray-500 font-semibold">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>for Gangwar Pharmacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
