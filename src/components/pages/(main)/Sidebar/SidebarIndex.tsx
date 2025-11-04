"use client";

import MainSidebar from "./Sidebar";

export default function SidebarIndex() {
  return (
    <div className="h-screen flex">
      <MainSidebar />
      <div className="flex-1 p-8 bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Sidebar Demo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Music Library</h3>
              <p className="text-gray-600 dark:text-gray-400">Manage your music collection and IP registrations</p>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Earnings</h3>
              <p className="text-gray-600 dark:text-gray-400">Track your revenue from compositions and remixes</p>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Collaborations</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with other artists and remix tracks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}