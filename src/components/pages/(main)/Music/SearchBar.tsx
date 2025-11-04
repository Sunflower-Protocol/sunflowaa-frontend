"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800 dark:text-gray-300 z-10 pointer-events-none" />
      <input
        type="text"
        placeholder="Search stems by name, artist, or genre..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
      />
    </div>
  );
}