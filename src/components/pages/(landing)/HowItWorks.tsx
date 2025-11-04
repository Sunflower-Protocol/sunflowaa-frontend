"use client";

import Lottie from "lottie-react";
import { recordMusicAnimation, logoMusicAnimation, earnMoneyAnimation } from "../../../../public/Assets/index";
import { LiquidButton } from "../../ui/liquid-glass-button";

const steps = [
  {
    id: 1,
    title: "Register your music as IP",
    description: "Record your music and register it as IP",
    animation: recordMusicAnimation,
  },
  {
    id: 2,
    title: "Remix your music",
    description: "Transform tracks and collaborate with artists",
    animation: logoMusicAnimation,
  },
  {
    id: 3,
    title: "Monetize & Earn",
    description: "Generate revenue from compositions and remixes",
    animation: earnMoneyAnimation,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-8 sm:py-12 md:py-20 lg:py-32 bg-linear-to-br from-blue-50 via-blue-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4 md:mb-6 px-2">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Transform your musical creativity into a sustainable income stream
            through our innovative platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <LiquidButton
                variant="default"
                size="xxl"
                className="w-full h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[400px] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex-col"
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                    <Lottie
                      animationData={step.animation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 text-center">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </LiquidButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
