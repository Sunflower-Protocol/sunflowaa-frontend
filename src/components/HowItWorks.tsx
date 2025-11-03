'use client'

import Lottie from "lottie-react";
import recordMusicAnimation from "../../public/Assets/Animation/record-music.json";
import remixMusicAnimation from "../../public/Assets/Animation/remix-music.json";
import earnMoneyAnimation from "../../public/Assets/Animation/earn-money.json";

const steps = [
  {
    id: 1,
    title: "Create & Register",
    description: "Record your music and register it as intellectual property",
    animation: recordMusicAnimation,
  },
  {
    id: 2,
    title: "Remix & Collaborate",
    description: "Transform existing tracks and collaborate with artists worldwide",
    animation: remixMusicAnimation,
  },
  {
    id: 3,
    title: "Monetize & Earn",
    description: "Generate revenue from your original compositions and remixes",
    animation: earnMoneyAnimation,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-linear-to-br from-blue-50 via-blue-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your musical creativity into a sustainable income stream through our innovative platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="flex flex-col items-center text-center">
                {/* <div className="w-40 h-40 mb-8 flex items-center justify-center bg-gray-50 rounded-3xl group-hover:bg-gray-100 transition-colors duration-300"> */}
                  <div className="w-28 h-28">
                    <Lottie 
                      animationData={step.animation} 
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                {/* </div> */}
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-16 h-px bg-gray-300 transform translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}