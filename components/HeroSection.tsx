"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-1 w-full text-center lg:text-left"
    >
      <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8 backdrop-blur-sm mx-auto lg:mx-0">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <span className="text-sm font-medium text-primary tracking-wide">
          {t("hero.badge")}
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight break-words w-full">
        <span className="block">{t("hero.titleLine1")}</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient pb-2">
          {t("hero.titleLine2")}
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
        {t("hero.description")}
        <span className="text-white font-medium">
          {" "}
          {t("hero.descriptionHighlight")}
        </span>{" "}
        {t("hero.descriptionSuffix")}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
        <a
          href="tel:+905448664224"
          className="group relative px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <Phone size={20} className="group-hover:rotate-12 transition-transform" />
          {t("hero.call")}
        </a>
        
        <a
          href="mailto:info@aydinsogutma.com"
          className="group relative px-8 py-4 bg-transparent text-white/80 font-bold border border-white/20 rounded-lg overflow-hidden hover:border-white/40 hover:text-white transition-all duration-300 w-full sm:w-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Mail size={20} />
            {t("hero.cta")}
          </span>
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </a>
      </div>
    </motion.div>
  );
}
