"use client";

import { useState } from "react";
import { Loader } from "lucide-react";
import { 
  ShieldCheckIcon,
  ArrowUpTrayIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  PencilIcon,
  ClipboardDocumentListIcon,
  ScaleIcon,
  BanknotesIcon,
  ArrowPathIcon,
  UserIcon,
  WalletIcon,
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChartBarIcon,
  CheckIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";

interface FormData {
  title: string;
  description: string;
  genre: string;
  bpm: string;
  key: string;
  tags: string[];
  coverImage: File | null;
  audioFile: File | null;
  licenseType: string;
  royaltyPercentage: number;
  allowDerivatives: boolean;
  creatorWallet: string;
  coCreators: Array<{ wallet: string; percentage: number }>;
}

export default function IPRegister() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    genre: "",
    bpm: "",
    key: "",
    tags: [],
    coverImage: null,
    audioFile: null,
    licenseType: "open-remix",
    royaltyPercentage: 10,
    allowDerivatives: true,
    creatorWallet: "",
    coCreators: []
  });
  
  const [showPreview, setShowPreview] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'audio' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [type === 'audio' ? 'audioFile' : 'coverImage']: file
      }));
    }
  };


  const generatePreviewMetadata = () => {
    return {
      title: formData.title,
      description: formData.description,
      genre: formData.genre,
      bpm: formData.bpm,
      key: formData.key,
      tags: formData.tags,
      license: {
        type: formData.licenseType,
        royalty: `${formData.royaltyPercentage}%`,
        allowDerivatives: formData.allowDerivatives
      },
      creator: formData.creatorWallet,
      coCreators: formData.coCreators,
      // eslint-disable-next-line react-hooks/purity
      ipId: "ip_" + Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    };
  };

  const handleRegister = async () => {
    setIsRegistering(true);
    
    setTimeout(() => {
      setIsRegistering(false);
      setShowSuccess(true);
    }, 3000);
  };

  return (
    <main>
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">IP Register</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Register your music as an IP Asset on Story Protocol ✨
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center">
                    <ArrowUpTrayIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upload & Metadata</h2>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-pink-300 dark:border-pink-700 rounded-2xl p-8 text-center bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 hover:border-pink-400 transition-colors group">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 dark:from-pink-800 dark:to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MusicalNoteIcon className="h-8 w-8 text-pink-700 dark:text-pink-300" />
                    </div>
                    <label className="cursor-pointer">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
{formData.audioFile ? (
                          <div className="flex items-center justify-center gap-2">
                            <CheckIcon className="h-4 w-4 text-green-600" />
                            {formData.audioFile.name}
                          </div>
                        ) : (
                          "Drop your music here or click to browse"
                        )}
                      </span>
                      <input
                        type="file"
                        accept="audio/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'audio')}
                      />
                    </label>
                  </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <MusicalNoteIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <MicrophoneIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Genre"
                    value={formData.genre}
                    onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3">
                  <PencilIcon className="h-5 w-5 text-gray-500" />
                </div>
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <MusicalNoteIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="BPM"
                    value={formData.bpm}
                    onChange={(e) => setFormData(prev => ({ ...prev, bpm: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <MusicalNoteIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Key"
                    value={formData.key}
                    onChange={(e) => setFormData(prev => ({ ...prev, key: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">License Setup</h2>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <ScaleIcon className="h-5 w-5 text-gray-500" />
                </div>
                <select
                  value={formData.licenseType}
                  onChange={(e) => setFormData(prev => ({ ...prev, licenseType: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-pink-400 transition-colors"
                >
                  <option value="open-remix">🆓 Open Remix (Free)</option>
                  <option value="commercial-remix">💼 Commercial Remix</option>
                  <option value="private">🔒 Private / Restricted</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center justify-center gap-2">
<BanknotesIcon className="h-4 w-4" />
                    Royalty Percentage
                  </label>
                  <div className="bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-xl p-4">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      value={formData.royaltyPercentage}
                      onChange={(e) => setFormData(prev => ({ ...prev, royaltyPercentage: Number(e.target.value) }))}
                      className="w-full accent-pink-500"
                    />
                    <div className="text-2xl font-bold text-pink-600 mt-2">{formData.royaltyPercentage}%</div>
                  </div>
                </div>

                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center justify-center gap-2">
<ArrowPathIcon className="h-4 w-4" />
                    Allow Derivatives
                  </label>
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl p-4">
                    <label className="flex items-center justify-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.allowDerivatives}
                        onChange={(e) => setFormData(prev => ({ ...prev, allowDerivatives: e.target.checked }))}
                        className="w-5 h-5 accent-purple-500 rounded"
                      />
                      <span className="text-lg font-semibold text-purple-600">
{formData.allowDerivatives ? (
                          <div className="flex items-center gap-1">
                            <CheckIcon className="h-4 w-4" />
                            Yes
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <XMarkIcon className="h-4 w-4" />
                            No
                          </div>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full flex items-center justify-center">
                <UserIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Ownership & Attribution</h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <WalletIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Creator Wallet Address (0x...)"
                  value={formData.creatorWallet}
                  onChange={(e) => setFormData(prev => ({ ...prev, creatorWallet: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 dark:border-pink-700 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white font-mono text-sm focus:border-pink-400 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <MainButton
              onClick={() => setShowPreview(!showPreview)}
              variant="pinkOutline"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
<EyeIcon className="h-4 w-4" />
              Preview Metadata
            </MainButton>

            <MainButton
              onClick={handleRegister}
              size="lg"
              className="flex items-center justify-center gap-2"
              disabled={isRegistering}
              withParticles
            >
              {isRegistering ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
<RocketLaunchIcon className="h-4 w-4" />
                  Register to Story Protocol
                </>
              )}
            </MainButton>
          </div>

            {showPreview && (
              <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
<ClipboardDocumentListIcon className="h-5 w-5" />
                  Metadata Preview
                </h3>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl p-4">
                  <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-auto max-h-96">
                    {JSON.stringify(generatePreviewMetadata(), null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <SparklesIcon className="h-10 w-10 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Your music is now an IP Asset! ✨
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Successfully registered on Story Protocol 🚀
            </p>
            <div className="space-y-3">
              <MainButton
                onClick={() => setShowSuccess(false)}
                size="lg"
                className="w-full"
                withParticles
              >
<MusicalNoteIcon className="h-4 w-4" />
                Add to Remix Library
              </MainButton>
              <MainButton
                onClick={() => setShowSuccess(false)}
                variant="pinkOutline"
                size="lg"
                className="w-full"
              >
<ChartBarIcon className="h-4 w-4" />
                View in Dashboard
              </MainButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}