"use client";

import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { TimelineProps } from "./types";
import { TrackItem } from "./TrackItem";

export function Timeline({ tracks, onTrackUpdate, onTrackRemove }: TimelineProps) {
  if (tracks.length === 0) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <MusicalNoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Drag stems from the library to start creating your remix
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="space-y-4">
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            onUpdate={(property, value) => onTrackUpdate(track.id, property, value)}
            onRemove={() => onTrackRemove(track.id)}
          />
        ))}
      </div>
    </div>
  );
}