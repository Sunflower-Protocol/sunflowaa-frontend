"use client";

import Lottie from "lottie-react";
import logoMusicAnimation from "../../public/Assets/Animation/logo-music.json";
import { CardContent } from "./ui/card";

export default function CTASection() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 p-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-0 bg-gray-50 rounded-2xl">
          <CardContent className="p-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-50 h-20 mb-6">
                <Lottie
                  animationData={logoMusicAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Ready to Start Your Music Journey?
              </h2>

              <p className="text-base text-gray-600 mb-8 max-w-lg leading-relaxed">
                Join thousands of artists transforming creativity into
                sustainable income.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  Get Started for Free
                </button>
                <button className="px-6 py-3 text-gray-700 rounded-lg font-medium text-sm hover:border-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </section>
  );
}
