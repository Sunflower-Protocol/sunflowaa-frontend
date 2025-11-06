"use client";

import Image from "next/image";
import { MusicalNoteIcon, CameraIcon } from "@heroicons/react/24/outline";
import { penguLogo } from "../../../../../public/Assets";
import { UserProfile } from "./types";

interface ProfileHeaderProps {
  profileData: UserProfile;
  isEditing: boolean;
}

export function ProfileHeader({ profileData, isEditing }: ProfileHeaderProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your account and creative identity
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
            <Image 
              src={penguLogo} 
              alt="Pengu" 
              width={96} 
              height={96} 
              className="w-full h-full object-cover rounded-full"
            />
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
    </div>
  );
}