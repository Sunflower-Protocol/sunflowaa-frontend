"use client";

import {
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { LicenseSetupProps } from "./types";
import { LICENSE_OPTIONS, ROYALTY_RANGE } from "./constants";

export function LicenseSetup({ formData, onUpdate }: LicenseSetupProps) {
  const handleFieldChange = (field: keyof typeof formData, value: unknown) => {
    onUpdate(field, value);
  };

  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
          <ShieldCheckIcon className="h-6 w-6 text-black dark:text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          License Setup
        </h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          {LICENSE_OPTIONS.map((license) => (
            <div
              key={license.value}
              onClick={() => handleFieldChange("licenseType", license.value)}
              className={`cursor-pointer p-5 rounded-3xl border transition-all duration-300 ${
                formData.licenseType === license.value
                  ? "border-gray-300/60 bg-gray-50/80 dark:bg-neutral-700/60 shadow-xl shadow-gray-200/30 dark:shadow-neutral-900/30 scale-[1.02]"
                  : "border-gray-200/30 dark:border-neutral-700/30 bg-white/70 dark:bg-neutral-800/70 hover:border-gray-300/40 dark:hover:border-neutral-600/40 hover:bg-white/90 dark:hover:bg-neutral-800/90 hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-neutral-900/20"
              } backdrop-blur-md`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{license.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {license.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {license.subtitle}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    formData.licenseType === license.value
                      ? "border-gray-500 bg-gray-500 shadow-lg"
                      : "border-gray-300/60 dark:border-neutral-600/60"
                  }`}
                >
                  {formData.licenseType === license.value && (
                    <div className="w-3 h-3 bg-white rounded-full animate-in zoom-in duration-200"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 dark:bg-neutral-800/60 rounded-3xl p-6 backdrop-blur-md border border-gray-200/30 dark:border-neutral-700/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100/80 dark:bg-neutral-700/80 rounded-2xl flex items-center justify-center">
                <BanknotesIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Royalty
              </h3>
            </div>
            <div className="space-y-4">
              <input
                type="range"
                min={ROYALTY_RANGE.MIN}
                max={ROYALTY_RANGE.MAX}
                value={formData.royaltyPercentage}
                onChange={(e) =>
                  handleFieldChange("royaltyPercentage", Number(e.target.value))
                }
                className="w-full h-2 bg-gray-200 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gray-600 dark:[&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formData.royaltyPercentage}%
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Revenue share
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-neutral-800/60 rounded-3xl p-6 backdrop-blur-md border border-gray-200/30 dark:border-neutral-700/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100/80 dark:bg-neutral-700/80 rounded-2xl flex items-center justify-center">
                <ArrowPathIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Derivatives
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.allowDerivatives}
                    onChange={(e) =>
                      handleFieldChange("allowDerivatives", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="relative w-14 h-8 bg-gray-200 dark:bg-neutral-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gray-600 dark:peer-checked:bg-gray-400"></div>
                </label>
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formData.allowDerivatives ? "Allowed" : "Restricted"}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.allowDerivatives
                    ? "Others can build upon this"
                    : "No modifications allowed"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}