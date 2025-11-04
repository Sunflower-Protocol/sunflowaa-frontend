"use client";
import { useEffect, useRef } from "react";
import FlowingMenu from "@/components/FlowingMenu";
import { Play, Shuffle, DollarSign } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    link: "#",
    text: "Stream Music",
    image: "/Assets/Logo/music-logo.png",
    icon: <Play size={32} />,
  },
  {
    link: "#",
    text: "Create & Remix",
    image: "/Assets/Logo/remix-logo.png",
    icon: <Shuffle size={32} />,
  },
  {
    link: "#",
    text: "Monetize Your Music",
    image: "/Assets/Logo/monetize-logo.png",
    icon: <DollarSign size={32} />,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const menu = menuRef.current;

    if (!section || !menu) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menu.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 flex flex-col justify-center"
      id="features"
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-3">
          Discover amazing music experiences with
          <div className="flex items-center gap-2">
            <span>Sunflowaa</span>
            <Image
              src="/Assets/Logo/sunflowaa.png"
              alt="Sunflowaa Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
        </h2>

        <div ref={menuRef} className="h-[60vh] relative">
          <FlowingMenu items={menuItems} />
        </div>
      </div>
    </section>
  );
}
