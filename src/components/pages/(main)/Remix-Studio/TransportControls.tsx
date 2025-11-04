"use client";

import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  SpeakerWaveIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { TransportControlsProps } from "./types";

export function TransportControls({
  isPlaying,
  isRecording,
  isLooping,
  volume,
  tempo,
  currentTime,
  duration,
  onPlayPause,
  onStop,
  onRecord,
  onLoop,
  onVolumeChange,
  onTempoChange,
}: TransportControlsProps) {
  const formatTime = (time: number) => {
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 border-b border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onPlayPause}
              className="w-12 h-12 bg-gray-600/80 hover:bg-gray-700/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
            >
              {isPlaying ? (
                <PauseIcon className="h-5 w-5" />
              ) : (
                <PlayIcon className="h-5 w-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={onStop}
              className="w-10 h-10 bg-gray-100/80 dark:bg-neutral-700/80 hover:bg-gray-200/80 dark:hover:bg-neutral-600/80 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm"
            >
              <StopIcon className="h-4 w-4" />
            </button>

            <button
              onClick={onRecord}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm ${
                isRecording
                  ? "bg-red-600/90 text-white shadow-lg"
                  : "bg-gray-100/80 dark:bg-neutral-700/80 hover:bg-gray-200/80 dark:hover:bg-neutral-600/80 text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className="w-3 h-3 bg-current rounded-full"></div>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SpeakerWaveIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                className="w-24 h-2 bg-gray-200/60 dark:bg-neutral-600/60 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gray-600 dark:[&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                {volume}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                BPM:
              </span>
              <input
                type="number"
                min="60"
                max="200"
                value={tempo}
                onChange={(e) => onTempoChange(Number(e.target.value))}
                className="w-16 px-3 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
              />
            </div>

            <button
              onClick={onLoop}
              className={`p-2 rounded transition-colors ${
                isLooping
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
              }`}
            >
              <ArrowPathIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
}