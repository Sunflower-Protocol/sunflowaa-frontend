"use client";

import { MusicalNoteIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";

export function CallToAction() {
  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
            <MusicalNoteIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Ready to create your remix?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Upload your own stems or head to Remix Studio to start creating
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <MainButton size="lg" withParticles>
            Upload Stems
          </MainButton>
          <MainButton variant="pinkOutline" size="lg" className="gap-2">
            <AdjustmentsHorizontalIcon className="h-4 w-4" />
            Open Remix Studio
          </MainButton>
        </div>
      </div>
    </div>
  );
}