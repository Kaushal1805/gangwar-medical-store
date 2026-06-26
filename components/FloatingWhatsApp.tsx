"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Interactive text tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-card px-4 py-2 rounded-xl shadow-lg border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs pointer-events-auto flex items-center gap-2 max-w-[220px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Drx. Sunil (B.Pharm) is Online!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white ml-1 font-bold text-[10px] focus:outline-none"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/918394894546?text=Hello%20Gangwar%20Medical%20Store,%20I%20have%20a%20medicine%2520inquiry%2520regarding..."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center pointer-events-auto relative group shadow-emerald-500/20 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing glow ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:hidden" />
        
        {/* WhatsApp Icon */}
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.004 0C5.372 0 0 5.373 0 12c0 2.115.548 4.103 1.512 5.836L.055 24l6.347-1.666A11.93 11.93 0 0 0 12.004 24c6.63 0 12.003-5.373 12.003-12s-5.372-12-12.003-12zm.003 21.993a9.92 9.92 0 0 1-5.074-1.39l-.364-.216-3.774.99.1-1.008.908-2.613-.238-.378a9.923 9.923 0 0 1-1.573-5.378c.004-5.485 4.469-9.95 9.954-9.95 5.483 0 9.948 4.465 9.948 9.95-.003 5.486-4.467 9.953-9.957 9.953zm5.456-7.464c-.299-.15-1.769-.873-2.043-.973-.274-.1-.474-.15-.673.15-.2.3-.773.973-.948 1.173-.174.2-.349.224-.648.075-.3-.15-1.265-.466-2.41-1.487-.89-.794-1.492-1.775-1.667-2.074-.174-.3-.019-.462.13-.611.135-.135.3-.349.449-.523.149-.174.2-.3.299-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.62-1.222-2.94-.536-1.288-1.077-1.114-1.472-1.133-.273-.013-.572-.015-.871-.015-.3 0-.773.112-1.173.55-.4.436-1.521 1.488-1.521 3.63s1.558 4.212 1.777 4.512c.22.3 3.067 4.683 7.429 6.565 1.037.447 1.848.714 2.479.914 1.042.33 1.991.283 2.741.17.836-.124 1.77-.723 2.019-1.385.249-.66.249-1.222.175-1.38-.075-.158-.274-.258-.573-.408z" />
        </svg>
      </motion.a>
    </div>
  );
}
