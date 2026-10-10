"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-brand-green animate-pulse" />,
      title: "Call Store",
      value: "+91 83948 94546",
      href: "tel:8394894546",
      desc: "Tap to call chief pharmacist",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-emerald-500" />,
      title: "WhatsApp",
      value: "+91 83948 94546",
      href: "https://wa.me/918394894546?text=Hello%20Gangwar%20Medical%20Store",
      desc: "Send prescription / check stocks",
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-blue" />,
      title: "Email Support",
      value: "sunilgangwar4326@gmail.com",
      href: "mailto:sunilgangwar4326@gmail.com",
      desc: "Drop inquiries or partnerships",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Store Timings",
      value: "08:00 AM - 10:00 PM",
      desc: "Open Daily (Monday - Sunday)",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-gray-light dark:bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Get in Touch</h2>
          <p className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-gray-dark dark:text-white leading-tight">
            Contact Us & Find Directions
          </p>
          <div className="h-1 w-16 bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div className="glass-card p-6 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-md">
              <div className="flex gap-4">
                <div className="p-3 bg-brand-green/10 text-brand-green rounded-2xl h-fit shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-brand-gray-dark dark:text-white mb-1">
                    Store Location
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    Gangwar Medical Store<br />
                    GJ75+JMP, Rajghat, Aurangabad,<br />
                    Uttar Pradesh - 262406
                  </p>
                  <a
                    href="https://maps.app.goo.gl/WnBzQakgzkuJnN9j6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-green-dark mt-4 transition-colors group"
                  >
                    Get GPS Directions
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-brand-green/10 transition-colors"
                >
                  <div className="p-3 bg-gray-50 dark:bg-slate-850 rounded-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 dark:text-gray-550 block font-bold uppercase tracking-wider">
                      {info.title}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-heading font-extrabold text-base text-brand-gray-dark dark:text-white hover:text-brand-green transition-colors mt-0.5 block break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-heading font-extrabold text-base text-brand-gray-dark dark:text-white mt-0.5 block">
                        {info.value}
                      </span>
                    )}
                    <span className="text-[11px] text-gray-405 dark:text-gray-500 font-medium block mt-0.5 leading-none">
                      {info.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Form & Map Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Interactive Query Form */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-gray-dark dark:text-white mb-2 tracking-tight">
                  Send Quick Inquiry
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 font-medium">
                  Have a question about medicine availability? Drop your query here.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-650 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full text-sm bg-gray-50 dark:bg-slate-850 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 text-brand-gray-dark dark:text-white focus:outline-none focus:border-brand-green transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-650 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className="w-full text-sm bg-gray-50 dark:bg-slate-850 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 text-brand-gray-dark dark:text-white focus:outline-none focus:border-brand-green transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-650 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Message / Medicine List
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention the name or list of medicines required..."
                      className="w-full text-sm bg-gray-50 dark:bg-slate-850 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 text-brand-gray-dark dark:text-white focus:outline-none focus:border-brand-green transition-colors font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark disabled:bg-emerald-700 text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer mt-6"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        Send Query
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Success Toast */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-2xl flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>Inquiry simulated successfully! We will coordinate shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Map Embed Card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-150 dark:border-slate-800 shadow-lg min-h-[350px] md:min-h-0 bg-gray-100 dark:bg-slate-850">
              <iframe
                title="Gangwar Medical Store Google Maps Location"
                src="https://maps.google.com/maps?q=GJ75%2BJMP%20Gangwar%20Medical%20Store%2C%20Rajghat%2C%20Aurangabad%2C%20Uttar%20Pradesh%20262406&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0 absolute inset-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map Footer Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 p-3 rounded-2xl border border-white/10 shadow-lg flex items-center justify-between pointer-events-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider leading-none mb-0.5">Location Pin</span>
                  <span className="text-xs font-bold text-brand-gray-dark dark:text-white leading-tight">Gangwar Medical Store</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/WnBzQakgzkuJnN9j6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green hover:bg-brand-green-dark text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-md"
                >
                  Navigate
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
