"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../../ui/sidebar";
import { UserCog, Settings, LogOut, Music, FileText, Sliders } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { sunflowaaLogo } from "../../../../../public/Assets";

export default function MainSidebar() {
  const links = [
    {
      label: "Music Library",
      href: "/app",
      icon: (
        <Music className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "IP Registry",
      href: "/app/ip",
      icon: (
        <FileText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Remix Studio",
      href: "/app/remix-studio",
      icon: (
        <Sliders className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/app/profile",
      icon: (
        <UserCog className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Logout",
              href: "/logout",
              icon: (
                <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/app"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={sunflowaaLogo}
        className="h-8 w-8 shrink-0 rounded-lg"
        width={32}
        height={32}
        alt="Sunflowaa Logo"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Sunflowaa
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/app"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={sunflowaaLogo}
        className="h-8 w-8 shrink-0 rounded-lg"
        width={32}
        height={32}
        alt="Sunflowaa Logo"
      />
    </Link>
  );
};