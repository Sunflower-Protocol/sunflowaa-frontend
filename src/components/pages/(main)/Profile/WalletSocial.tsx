"use client";

import { WalletIcon, CheckIcon, ClipboardIcon, LinkIcon } from "@heroicons/react/24/outline";
import { UserProfile } from "./types";

interface WalletSocialProps {
  profileData: UserProfile;
  copiedWallet: boolean;
  onCopyWallet: () => void;
}

export function WalletSocial({ profileData, copiedWallet, onCopyWallet }: WalletSocialProps) {
  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <WalletIcon className="h-5 w-5" />
        Wallet & Social
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Wallet Address
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-4 py-3 bg-gray-50/60 dark:bg-neutral-700/60 rounded-2xl text-gray-900 dark:text-white font-mono text-sm backdrop-blur-sm">
              {profileData.walletAddress}
            </div>
            <button
              onClick={onCopyWallet}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {copiedWallet ? (
                <CheckIcon className="h-4 w-4 text-green-600" />
              ) : (
                <ClipboardIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Twitter
            </label>
            <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
              {profileData.twitter}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Instagram
            </label>
            <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
              {profileData.instagram}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}