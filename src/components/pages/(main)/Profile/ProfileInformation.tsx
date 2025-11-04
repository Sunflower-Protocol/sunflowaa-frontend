"use client";

import { UserIcon, PencilIcon, MapPinIcon, GlobeAltIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";
import { UserProfile } from "./types";

interface ProfileInformationProps {
  profileData: UserProfile;
  editData: UserProfile;
  isEditing: boolean;
  onToggleEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onUpdateProfile: (field: keyof UserProfile, value: unknown) => void;
}

export function ProfileInformation({
  profileData,
  editData,
  isEditing,
  onToggleEdit,
  onCancel,
  onSave,
  onUpdateProfile,
}: ProfileInformationProps) {
  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <UserIcon className="h-5 w-5" />
          Profile Information
        </h2>
        <MainButton
          onClick={isEditing ? onCancel : onToggleEdit}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.username}
                onChange={(e) => onUpdateProfile("username", e.target.value)}
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
                onChange={(e) => onUpdateProfile("email", e.target.value)}
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
              onChange={(e) => onUpdateProfile("bio", e.target.value)}
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
                onChange={(e) => onUpdateProfile("location", e.target.value)}
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
                onChange={(e) => onUpdateProfile("website", e.target.value)}
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
              onClick={onSave}
              className="flex-1"
              withParticles
            >
              <ClipboardIcon className="h-4 w-4" />
              Save Changes
            </MainButton>
            <MainButton
              onClick={onCancel}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </MainButton>
          </div>
        )}
      </div>
    </div>
  );
}