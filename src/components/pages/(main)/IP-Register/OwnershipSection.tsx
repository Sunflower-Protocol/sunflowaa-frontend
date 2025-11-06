"use client";

import {
  UserIcon,
  WalletIcon,
  PlusIcon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { OwnershipSectionProps } from "./types";

export function OwnershipSection({ formData, onUpdate }: OwnershipSectionProps) {
  const handleFieldChange = (field: keyof typeof formData, value: unknown) => {
    onUpdate(field, value);
  };

  const addCoCreator = () => {
    const newCoCreators = [...formData.coCreators, { name: "", wallet: "", percentage: 0 }];
    handleFieldChange("coCreators", newCoCreators);
  };

  const updateCoCreator = (index: number, field: "name" | "wallet" | "percentage", value: string | number) => {
    const newCoCreators = [...formData.coCreators];
    newCoCreators[index] = { ...newCoCreators[index], [field]: value };
    handleFieldChange("coCreators", newCoCreators);
  };

  const removeCoCreator = (index: number) => {
    const newCoCreators = formData.coCreators.filter((_, i) => i !== index);
    handleFieldChange("coCreators", newCoCreators);
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
            <UserIcon className="h-5 w-5 text-black dark:text-white" />
          </div>
          <input
            type="text"
            placeholder="Creator Name"
            value={formData.creatorName}
            onChange={(e) => handleFieldChange("creatorName", e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
          />
        </div>

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

        {formData.coCreators.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Co-Creators</h4>
            {formData.coCreators.map((creator, index) => (
              <div key={index} className="border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl p-4 space-y-3 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Co-Creator #{index + 1}
                  </h5>
                  <button
                    type="button"
                    onClick={() => removeCoCreator(index)}
                    className="text-red-500 hover:text-red-600 p-1"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <UserIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Co-Creator Name"
                    value={creator.name || ""}
                    onChange={(e) => updateCoCreator(index, "name", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <WalletIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Wallet Address"
                    value={creator.wallet || ""}
                    onChange={(e) => updateCoCreator(index, "wallet", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <CurrencyDollarIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="number"
                    placeholder="Percentage"
                    value={creator.percentage || ""}
                    onChange={(e) => updateCoCreator(index, "percentage", parseInt(e.target.value) || 0)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={addCoCreator}
          className="w-full py-3 px-4 border border-dashed border-gray-300/60 dark:border-neutral-600/60 rounded-2xl text-gray-600 dark:text-gray-400 hover:border-gray-400/80 hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center justify-center gap-2 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm"
        >
          <PlusIcon className="h-4 w-4" />
          Add Co-Creator
        </button>
      </div>
    </div>
  );
}