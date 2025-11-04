"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
        <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
        No stems found
      </h3>
      <p className="text-gray-400 dark:text-gray-500">
        Try adjusting your search or explore different stem types
      </p>
    </div>
  );
}