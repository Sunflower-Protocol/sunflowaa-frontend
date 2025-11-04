"use client";

import { Loader } from "lucide-react";
import {
  MusicalNoteIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";
import { StudioHeaderProps } from "./types";

export function StudioHeader({
  totalRoyalty,
  isMinting,
  canMint,
  onMint,
}: StudioHeaderProps) {
  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 border-b border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-3xl flex items-center justify-center backdrop-blur-sm">
            <MusicalNoteIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Remix Studio
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/70 dark:bg-neutral-700/70 rounded-2xl text-sm backdrop-blur-sm">
            <CurrencyDollarIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Total Royalty: {totalRoyalty}%
            </span>
          </div>
          <MainButton
            onClick={onMint}
            disabled={!canMint || isMinting}
            size="lg"
            withParticles
          >
            {isMinting ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                Minting...
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4" />
                Mint as Remix
              </>
            )}
          </MainButton>
        </div>
      </div>
    </div>
  );
}