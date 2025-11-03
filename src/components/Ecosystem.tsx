"use client";

import { Marquee } from "./ui/marquee";
import Image from "next/image";
import Lottie from "lottie-react";
import rocketAnimation from "../../public/Assets/Animation/rocket-animation.json";

const partnerLogos = [
  {
    name: "Story Protocol",
    logo: "/Assets/Logo/logo-story.jpg",
  },
  {
    name: "IP Token",
    logo: "/Assets/Logo/logo-ip.png",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center mb-10 flex">
          <h2 className="text-6xl md:text-7xl font-bold text-black">
            Ecosystem
          </h2>
          <div className="w-24 h-24 mt-[-14]">
            <Lottie animationData={rocketAnimation} loop={true} />
          </div>
        </div>

        <div className="w-full max-w-7xl">
          <Marquee className="py-8" pauseOnHover>
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 mx-8 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="w-full max-w-7xl">
          <Marquee className="py-8" pauseOnHover reverse>
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 mx-8 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
