"use client";
import { useEffect, useRef } from "react";
import FlowingMenu from "./FlowingMenu";

const menuItems = [
  { link: "#", text: "Stream Music", image: "/Assets/Logo/music-logo.png" },
  { link: "#", text: "Create & Remix", image: "/Assets/Logo/remix-logo.png" },
  {
    link: "#",
    text: "Monetize Your Music",
    image: "/Assets/Logo/monetize-logo.png",
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Discover amazing music experiences with Sunflowaa
        </h2>

        <div ref={menuRef} className="h-[60vh] relative">
          <FlowingMenu items={menuItems} />
        </div>
      </div>
    </section>
  );
}
