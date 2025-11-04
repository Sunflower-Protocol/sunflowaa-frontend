"use client";

import { useState, useRef, useMemo } from "react";
import { Button as BaseButton } from "../../../ui/button";
import { FlowButton } from "../../../ui/flow-button";
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
  // eslint-disable-next-line react-hooks/refs
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Generate deterministic values to avoid Math.random() issues
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particleData = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      background: i % 2 === 0 ? '#ec4899' : '#f472b6',
      xDirection: (i % 2 ? 1 : -1) * (30 + i * 5),
      yDirection: -(30 + i * 3),
    })), []
  );

  return (
    <AnimatePresence>
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full z-50"
          style={{ 
            left: centerX, 
            top: centerY,
            background: particle.background
          }}
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [0, 1.5, 0],
            x: [0, particle.xDirection],
            y: [0, particle.yDirection],
          }}
          transition={{
            duration: 0.8,
            delay: particle.id * 0.05,
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
  onClick,
  ...props 
}: MainButtonProps) {
  const buttonClass = cn(
    "rounded-full font-medium transition-all duration-200 hover:scale-105 cursor-pointer",
    className
  );

  if (withParticles) {
    return (
      <FlowButton onClick={onClick}>
        {children}
      </FlowButton>
    );
  }

  return (
    <BaseButton
      variant={variant}
      className={buttonClass}
      onClick={onClick}
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