"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full px-6 py-6 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
        <div className="text-xl md:text-2xl font-extrabold tracking-widest text-white">
          {t("nav.brand")}
          <span className="text-primary drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
            {t("nav.brandSuffix")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("tr")}
            className={`text-sm font-bold transition-colors duration-300 ${
              language === "tr"
                ? "text-primary"
                : "text-gray-400 hover:text-white"
            }`}
          >
            TR
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`text-sm font-bold transition-colors duration-300 ${
              language === "en"
                ? "text-primary"
                : "text-gray-400 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
