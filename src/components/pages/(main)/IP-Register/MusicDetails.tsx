"use client";

import {
  ArrowUpTrayIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { FileUpload } from "./FileUpload";
import { MusicDetailsProps } from "./types";

export function MusicDetails({ formData, onUpdate }: MusicDetailsProps) {
  const handleFieldChange = (field: keyof typeof formData, value: unknown) => {
    onUpdate(field, value);
  };

  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <ArrowUpTrayIcon className="h-6 w-6 text-black dark:text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Upload your music
        </h2>
      </div>

      <div className="space-y-4">
        <FileUpload
          file={formData.audioFile}
          onFileChange={(file) => handleFieldChange("audioFile", file)}
          accept="audio/*"
          placeholder="Drop your music here or click to browse"
          icon={MusicalNoteIcon}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
              <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
              <MicrophoneIcon className="h-5 w-5 text-black dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="Genre"
              value={formData.genre}
              onChange={(e) => handleFieldChange("genre", e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-3 z-10 pointer-events-none">
            <PencilIcon className="h-5 w-5 text-black dark:text-white" />
          </div>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => handleFieldChange("description", e.target.value)}
            rows={3}
            className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
              <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="BPM"
              value={formData.bpm}
              onChange={(e) => handleFieldChange("bpm", e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
              <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="Key"
              value={formData.key}
              onChange={(e) => handleFieldChange("key", e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}