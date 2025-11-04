"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Lottie from "lottie-react";
import { rocketAnimation }  from "../../../../public/Assets/index";

const partnerLogos = [
  {
    name: "Story Protocol",
    logo: "/Assets/Logo/logo-story.png",
  },
  {
    name: "IP Token",
    logo: "/Assets/Logo/logo-ip-token.png",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center mb-10 flex">
          <h2 className="text-6xl md:text-7xl font-bold text-black">
            Ecosystem
          </h2>
          <div className="w-24 h-24 mt-[-14]">
            <Lottie animationData={rocketAnimation} loop={true} />
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <Marquee className="py-8" pauseOnHover>
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 mx-8 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
