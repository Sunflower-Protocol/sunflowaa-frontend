"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";

interface NavItem {
  name: string;
  link: string;
}

interface ResizableNavbarProps {
  logo?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function ResizableNavbar({
  logo = "Sunflowaa",
  navItems = [
    { name: "Features", link: "#features" },
    { name: "Benefits", link: "#benefits" },
    { name: "Pricing", link: "#pricing" },
    { name: "About", link: "#about" },
  ],
  ctaText = "Launch App",
  ctaHref = "/app",
  className = "",
}: ResizableNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Navbar className={`fixed top-3 left-0 right-0 z-50 ${className}`}>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Assets/Logo/sunflowaa.png"
            alt="Sunflowaa Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="text-xl font-bold text-gray-800 tracking-tight">
            {logo}
          </div>
        </div>

        {/* Navigation Items */}
        <NavItems items={navItems} onItemClick={closeMenu} />

        {/* CTA Button */}
        <NavbarButton href={ctaHref} variant="dark">
          {ctaText}
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/Assets/Logo/sunflowaa.png"
              alt="Sunflowaa Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <div className="text-2xl font-bold text-gray-800 tracking-tight">
              {logo}
            </div>
          </div>

          {/* Mobile Toggle */}
          <MobileNavToggle isOpen={isOpen} onClick={toggleMenu} />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} onClose={closeMenu}>
          <div className="space-y-4 w-full">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <NavbarButton 
                href={ctaHref} 
                variant="dark" 
                className="w-full text-center"
                onClick={closeMenu}
              >
                {ctaText}
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}