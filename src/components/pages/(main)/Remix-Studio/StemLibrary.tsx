"use client";

import {
  MusicalNoteIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { StemLibraryProps } from "./types";
import { STEM_TYPES } from "./constants";
import { StemCard } from "./StemCard";

export function StemLibrary({
  stems,
  searchQuery,
  selectedType,
  onSearchChange,
  onTypeChange,
  onStemSelect,
}: StemLibraryProps) {
  const filteredStems = stems.filter((stem) => {
    const matchesSearch =
      stem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stem.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || stem.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="w-80 bg-white/80 dark:bg-neutral-800/80 border-r border-gray-200/40 dark:border-neutral-700/40 flex flex-col backdrop-blur-md">
      <div className="p-6 border-b border-gray-200/40 dark:border-neutral-700/40">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <MusicalNoteIcon className="h-5 w-5" />
          Stem Library
        </h2>

        <div className="space-y-3">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stems..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTypeChange("all")}
              className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                selectedType === "all"
                  ? "bg-gray-100/80 text-gray-700 border border-gray-300/50 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                  : "bg-gray-100/60 text-gray-600 hover:bg-gray-100/80 border border-transparent dark:bg-neutral-700/40 dark:text-gray-400 dark:hover:bg-neutral-700/60"
              }`}
            >
              All
            </button>
            {STEM_TYPES.map(({ type, icon: Icon }) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-3 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition-colors ${
                  selectedType === type
                    ? "bg-gray-100/80 text-gray-700 border border-gray-300/50 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                    : "bg-gray-100/60 text-gray-600 hover:bg-gray-100/80 border border-transparent dark:bg-neutral-700/40 dark:text-gray-400 dark:hover:bg-neutral-700/60"
                }`}
              >
                <Icon className="h-3 w-3" />
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {filteredStems.map((stem) => (
          <StemCard
            key={stem.id}
            stem={stem}
            onClick={() => onStemSelect(stem)}
          />
        ))}
      </div>
    </div>
  );
}