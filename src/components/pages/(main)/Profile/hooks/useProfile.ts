"use client";

import { useState } from "react";
import { UserProfile, ProfileEditData } from "../types";
import { DEFAULT_PROFILE } from "../constants";

export function useProfile() {
  const [profileData, setProfileData] = useState<UserProfile>(DEFAULT_PROFILE);
  const [editData, setEditData] = useState<ProfileEditData>(DEFAULT_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState(false);

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

  const copyWalletAddress = async () => {
    try {
      await navigator.clipboard.writeText(profileData.walletAddress);
      setCopiedWallet(true);
      setTimeout(() => setCopiedWallet(false), 2000);
    } catch (error) {
      console.error("Failed to copy wallet address:", error);
    }
  };

  const updateProfile = (field: keyof UserProfile, value: unknown) => {
    setEditData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
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
  };
}