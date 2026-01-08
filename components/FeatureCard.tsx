"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  zIndex: number;
  className?: string;
  style?: any;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  x,
  y,
  rotateX,
  rotateY,
  zIndex,
  className = "",
  style = {},
}: FeatureCardProps) {
  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: zIndex, ...style }}
      className={`absolute w-full sm:w-72 p-6 sm:p-8 backdrop-blur-2xl border rounded-3xl shadow-2xl z-${zIndex} transform transition-transform hover:scale-105 duration-300 ${className}`}
    >
      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
