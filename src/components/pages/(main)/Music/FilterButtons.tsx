"use client";

import { STEM_TYPES, FILTER_OPTIONS } from "./constants";

interface FilterButtonsProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterButtons({ filter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <button
          onClick={() => onFilterChange("all")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            filter === "all"
              ? "bg-gray-100/80 border-gray-300/50 text-gray-700 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
              : "bg-white/70 dark:bg-neutral-800/70 border-gray-200/40 dark:border-neutral-700/40 text-gray-600 dark:text-gray-400 hover:border-gray-300/60 dark:hover:border-neutral-600/60 hover:bg-white/90 dark:hover:bg-neutral-800/90"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">🎵</div>
            <div className="text-sm font-medium">All Stems</div>
          </div>
        </button>
        {STEM_TYPES.map(({ type, description, emoji }) => (
          <button
            key={type}
            onClick={() => onFilterChange(type)}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              filter === type
                ? "bg-gray-100/80 border-gray-300/50 text-gray-700 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                : "bg-white/70 dark:bg-neutral-800/70 border-gray-200/40 dark:border-neutral-700/40 text-gray-600 dark:text-gray-400 hover:border-gray-300/60 dark:hover:border-neutral-600/60 hover:bg-white/90 dark:hover:bg-neutral-800/90"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{emoji}</div>
              <div className="text-sm font-medium capitalize">{type}</div>
              <div className="text-xs opacity-75 mt-1">
                {description.split(" ").slice(0, 2).join(" ")}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {FILTER_OPTIONS.map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === filterType
                ? "bg-gray-100/80 text-gray-700 border border-gray-300/50 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                : "bg-gray-100/60 text-gray-600 hover:bg-gray-100/80 border border-transparent dark:bg-neutral-700/40 dark:text-gray-400 dark:hover:bg-neutral-700/60"
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}