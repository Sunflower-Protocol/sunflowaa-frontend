"use client";

import {
  PlayIcon,
  PauseIcon,
  EllipsisHorizontalIcon,
  MusicalNoteIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import { MainButton, LoveButton } from "../_components/Button";
import { Stem } from "./types";
import { STEM_TYPES } from "./constants";

interface StemCardProps {
  stem: Stem;
  playingStem: string | null;
  onPlayPause: (stemId: string) => void;
  onLike: (stemId: string) => void;
  onRemix: (stemId: string) => void;
}

export function StemCard({
  stem,
  playingStem,
  onPlayPause,
  onLike,
  onRemix,
}: StemCardProps) {
  const stemType = STEM_TYPES.find((t) => t.type === stem.type);
  const Icon = stemType?.icon || MusicalNoteIcon;

  return (
    <div className="cursor-pointer bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/30 dark:border-neutral-700/30 p-6 hover:border-gray-300/50 dark:hover:border-neutral-600/50 transition-all hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-neutral-900/20 group backdrop-blur-md hover:bg-white/90 dark:hover:bg-neutral-800/90">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="h-10 w-10 text-gray-600 dark:text-gray-400" />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlayPause(stem.id);
            }}
            className="cursor-pointer absolute -bottom-2 -right-2 w-10 h-10 bg-gray-600/80 hover:bg-gray-700/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
          >
            {playingStem === stem.id ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4 ml-0.5" />
            )}
          </button>

          <div className="absolute -top-2 -left-2 px-2 py-1 bg-gray-100/70 dark:bg-neutral-700/70 text-gray-700 dark:text-neutral-300 rounded-full text-xs font-medium backdrop-blur-sm">
            {stem.type.toUpperCase()}
          </div>
        </div>

        <div className="space-y-2 w-full">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            {stem.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {stem.artist}
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>{stem.duration}</span>
            <span>•</span>
            <span>{stem.bpm} BPM</span>
            <span>•</span>
            <span>{stem.key}</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <PlayIcon className="h-3 w-3" />
              {stem.plays.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <ArrowsRightLeftIcon className="h-3 w-3" />
              {stem.usedInRemixes} remixes
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="px-2 py-1 bg-gray-100/70 dark:bg-neutral-700/70 text-gray-700 dark:text-neutral-300 rounded-full backdrop-blur-sm">
              {stem.license.type}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              {stem.license.royalty}% royalty
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <LoveButton
            isLiked={stem.isLiked}
            onToggle={() => onLike(stem.id)}
          />

          <MainButton
            onClick={(e) => {
              e.stopPropagation();
              onRemix(stem.id);
            }}
            size="sm"
            className="flex-1"
            withParticles
          >
            Use in Remix
          </MainButton>

          <button
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer p-2 rounded-lg bg-gray-100/60 hover:bg-gray-100/80 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/80 text-gray-600 dark:text-gray-400 transition-colors backdrop-blur-sm"
          >
            <EllipsisHorizontalIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}