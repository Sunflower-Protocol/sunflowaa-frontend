"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "../../../ui/sidebar";
import { 
  MusicalNoteIcon,
  DocumentTextIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { sunflowaaLogo } from "../../../../../public/Assets";

export default function MainSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Music Library",
      href: "/app/music",
      icon: (
        <MusicalNoteIcon className={`h-5 w-5 shrink-0 ${
          pathname === "/app/music" || pathname === "/app"
            ? "text-pink-600 dark:text-pink-400" 
            : "text-neutral-700 dark:text-neutral-200"
        }`} />
      ),
    },
    {
      label: "IP Registry",
      href: "/app/ip",
      icon: (
        <DocumentTextIcon className={`h-5 w-5 shrink-0 ${
          pathname === "/app/ip" 
            ? "text-pink-600 dark:text-pink-400" 
            : "text-neutral-700 dark:text-neutral-200"
        }`} />
      ),
    },
    {
      label: "Remix Studio",
      href: "/app/remix-studio",
      icon: (
        <AdjustmentsHorizontalIcon className={`h-5 w-5 shrink-0 ${
          pathname === "/app/remix-studio" 
            ? "text-pink-600 dark:text-pink-400" 
            : "text-neutral-700 dark:text-neutral-200"
        }`} />
      ),
    },
    {
      label: "Profile",
      href: "/app/profile",
      icon: (
        <UserIcon className={`h-5 w-5 shrink-0 ${
          pathname === "/app/profile" 
            ? "text-pink-600 dark:text-pink-400" 
            : "text-neutral-700 dark:text-neutral-200"
        }`} />
      ),
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <CustomSidebarLink key={idx} link={link} pathname={pathname} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Logout",
              href: "/logout",
              icon: (
                <ArrowRightOnRectangleIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

function CustomSidebarLink({ 
  link, 
  pathname 
}: { 
  link: { label: string; href: string; icon: React.ReactNode }; 
  pathname: string;
}) {
  const { open, animate } = useSidebar();
  const isActive = pathname === link.href || (link.href === "/app/music" && pathname === "/app");
  
  return (
    <Link
      href={link.href}
      className={`flex items-center justify-start gap-2 group/sidebar py-2 px-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? "bg-pink-100 dark:bg-pink-900/20" 
          : "hover:bg-gray-100 dark:hover:bg-neutral-700"
      }`}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={`text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ${
          isActive 
            ? "text-pink-600 dark:text-pink-400 font-medium" 
            : "text-neutral-700 dark:text-neutral-200"
        }`}
      >
        {link.label}
      </motion.span>
    </Link>
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
        className="h-8 w-8 shrink-0 rounded-full"
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