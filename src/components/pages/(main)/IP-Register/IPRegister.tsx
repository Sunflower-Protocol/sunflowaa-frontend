"use client";

import { useState } from "react";
import { Loader } from "lucide-react";
import { 
  ShieldCheckIcon,
  ArrowUpTrayIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  PencilIcon,
  ScaleIcon,
  BanknotesIcon,
  ArrowPathIcon,
  UserIcon,
  WalletIcon,
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
              <p className="text-black dark:text-white mt-2">
                Register your music as an IP Asset on Story Protocol ✨
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ArrowUpTrayIcon className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upload & Metadata</h2>
                </div>

                <div className="space-y-4">
                  <div className="cursor-pointer border border-dashed border-gray-300/50 dark:border-neutral-600/50 rounded-3xl p-8 text-center bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 hover:border-gray-400/60 transition-colors group backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200/60 to-gray-300/60 dark:from-neutral-700/60 dark:to-neutral-600/60 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <MusicalNoteIcon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
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
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <MicrophoneIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Genre"
                    value={formData.genre}
                    onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 z-10 pointer-events-none">
                  <PencilIcon className="h-5 w-5 text-black dark:text-white" />
                </div>
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="BPM"
                    value={formData.bpm}
                    onChange={(e) => setFormData(prev => ({ ...prev, bpm: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <MusicalNoteIcon className="h-5 w-5 text-black dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Key"
                    value={formData.key}
                    onChange={(e) => setFormData(prev => ({ ...prev, key: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ShieldCheckIcon className="h-6 w-6 text-black dark:text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">License Setup</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: "open-remix", emoji: "🆓", title: "Open Remix", subtitle: "Free for everyone", color: "green" },
                  { value: "commercial-remix", emoji: "💼", title: "Commercial Remix", subtitle: "Business use allowed", color: "blue" },
                  { value: "private", emoji: "🔒", title: "Private / Restricted", subtitle: "Limited access", color: "orange" }
                ].map((license) => (
                  <div 
                    key={license.value}
                    onClick={() => setFormData(prev => ({ ...prev, licenseType: license.value }))}
                    className={`cursor-pointer p-5 rounded-3xl border transition-all duration-300 ${
                      formData.licenseType === license.value
                        ? "border-gray-300/60 bg-gray-50/80 dark:bg-neutral-700/60 shadow-xl shadow-gray-200/30 dark:shadow-neutral-900/30 scale-[1.02]"
                        : "border-gray-200/30 dark:border-neutral-700/30 bg-white/70 dark:bg-neutral-800/70 hover:border-gray-300/40 dark:hover:border-neutral-600/40 hover:bg-white/90 dark:hover:bg-neutral-800/90 hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-neutral-900/20"
                    } backdrop-blur-md`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{license.emoji}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{license.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{license.subtitle}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        formData.licenseType === license.value
                          ? "border-gray-500 bg-gray-500 shadow-lg"
                          : "border-gray-300/60 dark:border-neutral-600/60"
                      }`}>
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
                    <h3 className="font-medium text-gray-900 dark:text-white">Royalty</h3>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      value={formData.royaltyPercentage}
                      onChange={(e) => setFormData(prev => ({ ...prev, royaltyPercentage: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gray-600 dark:[&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                    />
                    <div className="text-center">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{formData.royaltyPercentage}%</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Revenue share</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 dark:bg-neutral-800/60 rounded-3xl p-6 backdrop-blur-md border border-gray-200/30 dark:border-neutral-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100/80 dark:bg-neutral-700/80 rounded-2xl flex items-center justify-center">
                      <ArrowPathIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Derivatives</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.allowDerivatives}
                          onChange={(e) => setFormData(prev => ({ ...prev, allowDerivatives: e.target.checked }))}
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
                        {formData.allowDerivatives ? "Others can build upon this" : "No modifications allowed"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                <UserIcon className="h-6 w-6 text-black dark:text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Ownership & Attribution</h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                  <WalletIcon className="h-5 w-5 text-black dark:text-white" />
                </div>
                <input
                  type="text"
                  placeholder="Creator Wallet Address (0x...)"
                  value={formData.creatorWallet}
                  onChange={(e) => setFormData(prev => ({ ...prev, creatorWallet: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white font-mono text-sm focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <MainButton
              onClick={handleRegister}
              size="lg"
              className="flex items-center justify-center gap-3 px-8 py-4"
              disabled={isRegistering}
              withParticles
            >
              {isRegistering ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span className="text-base font-medium">Registering...</span>
                </>
              ) : (
                <>
                  <RocketLaunchIcon className="h-5 w-5" />
                  <span className="text-base font-medium">Register to Story Protocol</span>
                </>
              )}
            </MainButton>
          </div>

          </div>
        </div>
      </div>
    </div>
      
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 dark:bg-neutral-800/90 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-8 max-w-md w-full text-center backdrop-blur-md">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <SparklesIcon className="h-10 w-10 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Your music is now an IP Asset! ✨
            </h3>
            <p className="text-black dark:text-white mb-6">
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