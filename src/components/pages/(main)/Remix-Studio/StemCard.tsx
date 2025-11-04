"use client";

import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { StemCardProps } from "./types";
import { STEM_TYPES } from "./constants";

export function StemCard({ stem, onClick }: StemCardProps) {
  const stemType = STEM_TYPES.find((t) => t.type === stem.type);
  const Icon = stemType?.icon || MusicalNoteIcon;

  return (
    <div
      className="cursor-pointer bg-white/70 dark:bg-neutral-700/70 rounded-3xl p-4 border border-gray-200/30 dark:border-neutral-700/30 hover:border-gray-300/50 dark:hover:border-neutral-600/50 transition-all hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-neutral-900/20 hover:bg-white/90 dark:hover:bg-neutral-700/90 backdrop-blur-md"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white text-sm">
              {stem.name}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {stem.artist}
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {stem.duration}s
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
          <span>{stem.bpm} BPM</span>
          <span>Key: {stem.key}</span>
        </div>
        <div className="px-3 py-1 bg-gray-100/70 dark:bg-neutral-600/70 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm">
          {stem.license.royalty}% royalty
        </div>
      </div>
    </div>
  );
}