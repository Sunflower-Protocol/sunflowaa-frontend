"use client";

import {
  SparklesIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";
import { SuccessModalProps } from "./types";

export function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-purple-200 dark:border-purple-800 p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <SparklesIcon className="h-10 w-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Remix Created Successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your remix has been minted as a new IP Asset on Story Protocol
        </p>
        <div className="space-y-3">
          <MainButton
            onClick={onClose}
            size="lg"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            withParticles
          >
            <ChartBarIcon className="h-4 w-4" />
            View in Dashboard
          </MainButton>
          <MainButton
            onClick={onClose}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <ArrowUpTrayIcon className="h-4 w-4" />
            Share Remix
          </MainButton>
        </div>
      </div>
    </div>
  );
}