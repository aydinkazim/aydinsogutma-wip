"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Snowflake, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  // Mouse Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / 20); // Reduced sensitivity
    y.set((event.clientY - centerY) / 20);
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden text-white selection:bg-primary/30 selection:text-primary font-sans">
      <div className="noise-overlay" />

      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/assets/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-30 scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/95 via-bg-dark/70 to-bg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,255,0.1),transparent_50%)]" />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16 lg:gap-8">
          <HeroSection />

          {/* Visual Elements (Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full flex justify-center lg:justify-end relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] flex items-center justify-center">
              <FeatureCard
                icon={Snowflake}
                title={t("features.card1.title")}
                description={t("features.card1.description")}
                x={x}
                y={y}
                rotateX={rotateX}
                rotateY={rotateY}
                zIndex={50}
                className="top-0 right-0 sm:right-10 bg-gradient-to-br from-white/10 to-white/5 border-white/20"
              />

              <FeatureCard
                icon={ShieldCheck}
                title={t("features.card2.title")}
                description={t("features.card2.description")}
                x={useTransform(x, (val) => val * -0.5)}
                y={useTransform(y, (val) => val * -0.5)}
                rotateX={rotateX}
                rotateY={rotateY}
                zIndex={10}
                className="bottom-0 left-0 sm:left-10 bg-[#050a14]/90 border-primary/20"
              />

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-600 text-xs border-t border-white/5 backdrop-blur-sm">
        <p>
          &copy; 2025 {t("footer.copyright")}{" "}
          <a
            href="https://www.kazimaydin.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            kazimaydin.dev
          </a>
        </p>
      </footer>
    </div>
  );
}
