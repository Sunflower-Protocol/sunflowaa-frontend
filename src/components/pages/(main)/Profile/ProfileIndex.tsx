"use client";

import MainSidebar from "../Sidebar/Sidebar";
import Profile from "./Profile";

export default function ProfileIndex() {
  return (
    <div className="h-screen flex">
      <MainSidebar />
      <div className="flex-1 bg-gray-50 dark:bg-neutral-900 overflow-auto">
        <div className="py-4 pl-2 pr-4 sm:py-6 sm:pl-4 sm:pr-6 md:py-8 md:pl-6 md:pr-8">
          <Profile />
        </div>
      </div>
    </div>
  );
}