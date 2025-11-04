"use client";

import Image from "next/image";
import { Loader } from "lucide-react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";
import { logoStory } from "../../../../../public/Assets";
import { MusicDetails } from "./MusicDetails";
import { LicenseSetup } from "./LicenseSetup";
import { OwnershipSection } from "./OwnershipSection";
import { SuccessModal } from "./SuccessModal";
import { useIPRegister } from "./hooks/useIPRegister";

export default function IPRegister() {
  const {
    formData,
    isRegistering,
    showSuccess,
    updateFormData,
    handleRegister,
    closeSuccessModal,
  } = useIPRegister();

  return (
    <main>
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                IP Register
              </h1>
              <p className="text-black dark:text-white mt-2 flex items-center justify-center gap-2">
                Register your music as an IP Asset on Story Protocol
                <Image
                  src={logoStory}
                  alt="Story Protocol"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </p>
            </div>

            <div className="space-y-6">
              <MusicDetails formData={formData} onUpdate={updateFormData} />
              <LicenseSetup formData={formData} onUpdate={updateFormData} />
              <OwnershipSection formData={formData} onUpdate={updateFormData} />

              <div className="flex justify-center">
                <MainButton
                  onClick={handleRegister}
                  size="lg"
                  className="flex items-center justify-center gap-3 px-8 py-4"
                  disabled={isRegistering}
                >
                  {isRegistering ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span className="text-base font-medium">
                        Registering...
                      </span>
                    </>
                  ) : (
                    <>
                      <RocketLaunchIcon className="h-5 w-5" />
                      <span className="text-base font-medium">Register IP</span>
                    </>
                  )}
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal isVisible={showSuccess} onClose={closeSuccessModal} />
    </main>
  );
}
