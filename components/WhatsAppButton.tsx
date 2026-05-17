"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = "905448664224";
  const message = encodeURIComponent("Merhaba, Aydın Soğutma web siteniz üzerinden ulaşıyorum.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 group"
      aria-label={t("hero.whatsapp")}
    >
      <MessageCircle size={32} fill="currentColor" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {t("hero.whatsapp")}
      </span>

      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-20" />
    </motion.a>
  );
}
