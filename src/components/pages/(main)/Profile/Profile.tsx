"use client";

import { useState } from "react";
import { MainButton } from "../_components/Button";
import { 
  User, 
  Mail, 
  Wallet, 
  Edit3, 
  Camera,
  Music,
  Award,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Twitter,
  Instagram,
  Globe,
  Copy,
  Check
} from "lucide-react";

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
      totalRoyalties: 1250.50,
      ipAssets: 15
    }
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
            {/* Header */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                👤
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage your account and creative identity ✨
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Information
                    </h2>
                    <MainButton
                      onClick={() => isEditing ? handleCancel() : setIsEditing(true)}
                      variant="outline"
                      size="sm"
                    >
                      {isEditing ? (
                        <>Cancel</>
                      ) : (
                        <>
                          <Edit3 className="h-4 w-4" />
                          Edit
                        </>
                      )}
                    </MainButton>
                  </div>

                  <div className="space-y-6">
                    {/* Avatar Section */}
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center text-3xl">
                          🎵
                        </div>
                        {isEditing && (
                          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <Camera className="h-4 w-4" />
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

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Username
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.username}
                            onChange={(e) => setEditData(prev => ({ ...prev, username: e.target.value }))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
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
                            onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
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
                          onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          <MapPin className="h-4 w-4" />
                          Location
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.location}
                            onChange={(e) => setEditData(prev => ({ ...prev, location: e.target.value }))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
                            {profileData.location}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Website
                        </label>
                        {isEditing ? (
                          <input
                            type="url"
                            value={editData.website}
                            onChange={(e) => setEditData(prev => ({ ...prev, website: e.target.value }))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
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
                          💾 Save Changes
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

                {/* Wallet & Social */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-green-200 dark:border-green-800 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Wallet & Social
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Wallet Address
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white font-mono text-sm">
                          {profileData.walletAddress}
                        </div>
                        <button
                          onClick={copyWalletAddress}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {copiedWallet ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          Twitter
                        </label>
                        <div className="px-4 py-2 bg-gray-50 dark:bg-neutral-700 rounded-lg text-gray-900 dark:text-white">
                          {profileData.twitter}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <Instagram className="h-4 w-4" />
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

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-purple-200 dark:border-purple-800 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Stats
                  </h2>

                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                      <Music className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.totalTracks}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Tracks</div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                      <Award className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.ipAssets}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">IP Assets</div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                      <Users className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {profileData.stats.totalCollaborations}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Collaborations</div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${profileData.stats.totalRoyalties}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Royalties</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <MainButton size="sm" className="w-full" variant="outline">
                      📤 Export Data
                    </MainButton>
                    <MainButton size="sm" className="w-full" variant="outline">
                      🔒 Privacy Settings
                    </MainButton>
                    <MainButton size="sm" className="w-full" variant="outline">
                      📊 Download Report
                    </MainButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              ✅
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Profile Updated! ✨
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
              👍 Got it!
            </MainButton>
          </div>
        </div>
      )}
    </main>
  );
}