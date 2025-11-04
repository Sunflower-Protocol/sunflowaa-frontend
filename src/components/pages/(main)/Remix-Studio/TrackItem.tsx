"use client";

import { XMarkIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";
import { TrackItemProps } from "./types";
import { STEM_TYPES } from "./constants";

export function TrackItem({ track, onUpdate, onRemove }: TrackItemProps) {
  const Icon =
    STEM_TYPES.find((t) => t.type === track.stem.type)?.icon ||
    MusicalNoteIcon;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              {track.stem.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {track.stem.artist}
            </div>
          </div>
          <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
            {track.stem.license.royalty}% to {track.stem.license.creator}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdate("muted", !track.muted)}
            className={`px-3 py-1 rounded text-xs font-medium ${
              track.muted
                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
            }`}
          >
            {track.muted ? "Muted" : "Mute"}
          </button>

          <button
            onClick={() => onUpdate("solo", !track.solo)}
            className={`px-3 py-1 rounded text-xs font-medium ${
              track.solo
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
            }`}
          >
            {track.solo ? "Solo" : "Solo"}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={track.volume}
            onChange={(e) => onUpdate("volume", Number(e.target.value))}
            className="w-16"
          />

          <button
            onClick={onRemove}
            className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="h-16 bg-gray-50 dark:bg-neutral-700 rounded flex items-end gap-0.5 px-2 overflow-hidden">
        {track.stem.waveform.map((height, index) => (
          <div
            key={index}
            className="bg-purple-400 dark:bg-purple-500 rounded-t"
            style={{
              height: `${(height / 100) * 100}%`,
              width: "2px",
              minHeight: "2px",
            }}
          />
        ))}
      </div>
    </div>
  );
}