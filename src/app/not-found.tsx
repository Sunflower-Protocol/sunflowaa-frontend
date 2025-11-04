"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import notFoundAnimation from "../../public/Assets/Animation/404-animation.json";
import { LiquidButton } from "../components/ui/liquid-glass-button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
          <Lottie
            animationData={notFoundAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            404
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Page Not Found
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <LiquidButton 
                variant="default" 
                size="lg"
              >
                Go Home
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}