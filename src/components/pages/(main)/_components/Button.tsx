"use client";

import { useState, useRef } from "react";
import { Button as BaseButton } from "../../../ui/button";
import { ParticleButton } from "../../../ui/particle-button";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "../../../ui/button";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MainButtonProps extends ButtonProps {
  withParticles?: boolean;
}

interface LoveButtonProps extends Omit<MainButtonProps, 'children'> {
  isLiked?: boolean;
  onToggle?: () => void;
}

function LoveParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full"
          style={{ 
            left: centerX, 
            top: centerY,
            background: i % 2 === 0 ? '#ec4899' : '#f472b6'
          }}
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [0, 1.5, 0],
            // eslint-disable-next-line react-hooks/purity
            x: [0, (i % 2 ? 1 : -1) * (Math.random() * 40 + 15)],
            // eslint-disable-next-line react-hooks/purity
            y: [0, -Math.random() * 40 - 15],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

export function MainButton({ 
  children, 
  withParticles = false, 
  className, 
  variant = "pink",
  ...props 
}: MainButtonProps) {
  const buttonClass = cn(
    "rounded-full font-medium transition-all duration-200 hover:scale-105 cursor-pointer",
    className
  );

  if (withParticles) {
    return (
      <ParticleButton
        variant={variant}
        className={buttonClass}
        {...props}
      >
        {children}
      </ParticleButton>
    );
  }

  return (
    <BaseButton
      variant={variant}
      className={buttonClass}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export function LoveButton({
  isLiked = false,
  onToggle,
  className,
  ...props
}: LoveButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!isLiked) {
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1000);
    }
    onToggle?.();
  };

  const buttonClass = cn(
    "rounded-lg font-medium transition-all duration-200 hover:scale-105 cursor-pointer flex-1 py-2 px-3 relative",
    isLiked 
      ? "bg-pink-100 text-pink-700 hover:bg-pink-200" 
      : "bg-gray-100 text-gray-600 hover:bg-gray-200",
    showParticles && "scale-95",
    className
  );

  return (
    <>
      {showParticles && <LoveParticles buttonRef={buttonRef} />}
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={buttonClass}
        {...props}
      >
        <Heart className={`h-4 w-4 mx-auto ${isLiked ? "fill-current" : ""}`} />
      </button>
    </>
  );
}