"use client";

import Image from "next/image";
import { MainButton } from "../_components/Button";
import { WalletIcon, CheckIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { usdcLogo } from "../../../../../public/Assets";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileInformation } from "./ProfileInformation";
import { WalletSocial } from "./WalletSocial";
import { ProfileStats } from "./ProfileStats";
import { useProfile } from "./hooks/useProfile";

export default function Profile() {
  const {
    profileData,
    editData,
    isEditing,
    showSuccess,
    copiedWallet,
    setIsEditing,
    setShowSuccess,
    handleSave,
    handleCancel,
    copyWalletAddress,
    updateProfile,
  } = useProfile();

  return (
    <main>
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <ProfileHeader profileData={profileData} isEditing={isEditing} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <ProfileInformation
                  profileData={profileData}
                  editData={editData}
                  isEditing={isEditing}
                  onToggleEdit={() => setIsEditing(!isEditing)}
                  onCancel={handleCancel}
                  onSave={handleSave}
                  onUpdateProfile={updateProfile}
                />

                <WalletSocial
                  profileData={profileData}
                  copiedWallet={copiedWallet}
                  onCopyWallet={copyWalletAddress}
                />
              </div>

              <div className="space-y-6">
                <ProfileStats stats={profileData.stats} />

                <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    Your Royalties
                  </h3>
                  <div className="space-y-4">
                    <MainButton size="sm" className="w-full gap-2">
                      <WalletIcon className="h-4 w-4" />
                      Connect Wallet
                    </MainButton>
                    <MainButton size="sm" className="w-full gap-2" variant="outline">
                      <Image src={usdcLogo} alt="USDC" width={16} height={16} className="h-4 w-4" />
                      Claim Royalties
                    </MainButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 dark:bg-neutral-800/90 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-8 max-w-md w-full text-center backdrop-blur-md">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <CheckIcon className="h-10 w-10 text-gray-600 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Profile Updated!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your profile information has been saved successfully.
            </p>
            <MainButton
              onClick={() => setShowSuccess(false)}
              size="lg"
              className="w-full"
              withParticles
            >
              <HandThumbUpIcon className="h-4 w-4" />
              Got it!
            </MainButton>
          </div>
        </div>
      )}
    </main>
  );
}
