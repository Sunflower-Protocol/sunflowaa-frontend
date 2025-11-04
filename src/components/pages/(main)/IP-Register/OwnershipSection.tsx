"use client";

import { UserIcon, WalletIcon } from "@heroicons/react/24/outline";
import { OwnershipSectionProps } from "./types";

export function OwnershipSection({ formData, onUpdate }: OwnershipSectionProps) {
  const handleFieldChange = (field: keyof typeof formData, value: unknown) => {
    onUpdate(field, value);
  };

  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <UserIcon className="h-6 w-6 text-black dark:text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Ownership & Attribution
        </h2>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <WalletIcon className="h-5 w-5 text-black dark:text-white" />
          </div>
          <input
            type="text"
            placeholder="Creator Wallet Address (0x...)"
            value={formData.creatorWallet}
            onChange={(e) => handleFieldChange("creatorWallet", e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white font-mono text-sm focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
          />
        </div>
      </div>
    </div>
  );
}