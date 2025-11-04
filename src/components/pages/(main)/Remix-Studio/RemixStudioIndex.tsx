"use client";

import MainSidebar from "../Sidebar/Sidebar";
import RemixStudio from "./RemixStudio";

export default function RemixStudioIndex() {
  return (
    <div className="h-screen flex">
      <MainSidebar />
      <div className="flex-1 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        <RemixStudio />
      </div>
    </div>
  );
}