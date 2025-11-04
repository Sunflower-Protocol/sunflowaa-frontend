"use client";

import { useState } from "react";
import Image from "next/image";
import { MainButton } from "../_components/Button";
import {
  UserIcon,
  WalletIcon,
  PencilIcon,
  CameraIcon,
  MusicalNoteIcon,
  TrophyIcon,
  ChartBarIcon,
  UsersIcon,
  CalendarIcon,
  MapPinIcon,
  LinkIcon,
  GlobeAltIcon,
  ClipboardIcon,
  CheckIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { usdcLogo } from "../../../../../public/Assets";

interface UserProfile {
  username: string;
  email: string;
  walletAddress: string;
  bio: string;
  location: string;
  website: string;
  twitter: string;
  instagram: string;
  joinDate: string;
  avatar: string;
  stats: {
    totalTracks: number;
    totalCollaborations: number;
    totalRoyalties: number;
    ipAssets: number;
  };
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState(false);

  const [profileData, setProfileData] = useState<UserProfile>({
    username: "MusicCreator",
    email: "creator@sunflowaa.com",
    walletAddress: "0x1234...5678",
    bio: "Passionate music creator exploring the intersection of Web3 and creativity. Building the future of decentralized music through Story Protocol.",
    location: "San Francisco, CA",
    website: "https://musiccreator.com",
    twitter: "@musiccreator",
    instagram: "@musiccreator",
    joinDate: "March 2024",
    avatar: "",
    stats: {
      totalTracks: 42,
      totalCollaborations: 18,
      totalRoyalties: 1250.5,
      ipAssets: 15,
    },
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(profileData.walletAddress);
    setCopiedWallet(true);
    setTimeout(() => setCopiedWallet(false), 2000);
  };

  return (
    <main>
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage your account and creative identity
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      Profile Information
                    </h2>
                    <MainButton
                      onClick={() =>
                        isEditing ? handleCancel() : setIsEditing(true)
                      }
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      {isEditing ? (
                        <>Cancel</>
                      ) : (
                        <>
                          <PencilIcon className="h-4 w-4" />
                          Edit
                        </>
                      )}
                    </MainButton>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <MusicalNoteIcon className="h-12 w-12 text-gray-600 dark:text-gray-400" />
                        </div>
                        {isEditing && (
                          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg">
                            <CameraIcon className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {profileData.username}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Member since {profileData.joinDate}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Username
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.username}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                username: e.target.value,
                              }))
                            }
                            className="w-full px-4 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                          />
                        ) : (
                          <div className="px-4 py-3 bg-gray-50/60 dark:bg-neutral-700/60 rounded-2xl text-gray-900 dark:text-white backdrop-blur-sm">
                            {profileData.username}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editData.email}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="w-full px-4 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                          />
                        ) : (
                          <div className="px-4 py-3 bg-gray-50/60 dark:bg-neutral-700/60 rounded-2xl text-gray-900 dark:text-white backdrop-blur-sm">
                            {profileData.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Bio
                      </label>
                      {isEditing ? (
                        <textarea
                          rows={4}
                          value={editData.bio}
                          onChange={(e) =>
                            setEditData((prev) => ({
                              ...prev,
                              bio: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                          placeholder="Tell us about yourself..."
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
                          {profileData.bio}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4" />
                          Location
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.location}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                location: e.target.value,
                              }))
                            }
                            className="w-full px-4 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                          />
                        ) : (
                          <div className="px-4 py-3 bg-gray-50/60 dark:bg-neutral-700/60 rounded-2xl text-gray-900 dark:text-white backdrop-blur-sm">
                            {profileData.location}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <GlobeAltIcon className="h-4 w-4" />
                          Website
                        </label>
                        {isEditing ? (
                          <input
                            type="url"
                            value={editData.website}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                website: e.target.value,
                              }))
                            }
                            className="w-full px-4 py-2 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-700/80 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                          />
                        ) : (
                          <div className="px-4 py-3 bg-gray-50/60 dark:bg-neutral-700/60 rounded-2xl text-gray-900 dark:text-white backdrop-blur-sm">
                            {profileData.website}
                          </div>
                        )}
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-3 pt-4">
                        <MainButton
                          onClick={handleSave}
                          className="flex-1"
                          withParticles
                        >
                          <ClipboardIcon className="h-4 w-4" />
                          Save Changes
                        </MainButton>
                        <MainButton
                          onClick={handleCancel}
                          variant="outline"
                          className="flex-1"
                        >
                          Cancel
                        </MainButton>
                      </div>
                    )}
                  </div>
                </div>

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
                          onClick={copyWalletAddress}
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
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5" />
                    Stats
                  </h2>

                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 rounded-2xl backdrop-blur-sm">
                      <MusicalNoteIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.totalTracks}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Tracks
                      </div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 rounded-2xl backdrop-blur-sm">
                      <TrophyIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.ipAssets}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        IP Assets
                      </div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 rounded-2xl backdrop-blur-sm">
                      <UsersIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.totalCollaborations}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Collaborations
                      </div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 rounded-2xl backdrop-blur-sm">
                      <ChartBarIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${profileData.stats.totalRoyalties}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Royalties
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    Your Royalties
                  </h3>
                  <div className="space-y-4">
                    <MainButton size="sm" className="w-full gap-2" withParticles>
                      <WalletIcon className="h-4 w-4" />
                      Connect Wallet
                    </MainButton>
                    <MainButton size="sm" className="w-full gap-2" variant="outline" withParticles>
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
