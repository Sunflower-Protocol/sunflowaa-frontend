"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MusicalNoteIcon, ChartBarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MainButton } from "../_components/Button";
import { logoStory } from "../../../../../public/Assets";
import { SuccessModalProps } from "./types";

export function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.5,
            }}
            className="bg-white/95 dark:bg-neutral-800/95 rounded-3xl border border-gray-200/50 dark:border-neutral-700/50 p-8 max-w-md w-full text-center backdrop-blur-xl shadow-2xl shadow-black/10 relative"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onClose}
              className="cursor-pointer absolute top-4 right-4 w-8 h-8 bg-gray-100/80 dark:bg-neutral-700/80 hover:bg-gray-200/80 dark:hover:bg-neutral-600/80 rounded-full flex items-center justify-center transition-colors group"
            >
              <XMarkIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
            </motion.button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
              className="w-20 h-20 bg-gradient-to-br from-pink-100/80 to-purple-100/80 dark:from-pink-900/40 dark:to-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-lg"
            >
              <span className="text-4xl">✨</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
            >
              Your music is now an IP Asset!
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <p className="text-gray-700 dark:text-gray-300">
                Successfully registered on Story Protocol
              </p>
              <Image src={logoStory} alt="Story Protocol" width={20} height={20} className="h-5 w-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <MainButton
                onClick={onClose}
                size="lg"
                className="w-full gap-2"
              >
                <MusicalNoteIcon className="h-4 w-4" />
                Add to Remix Library
              </MainButton>
              <MainButton
                onClick={onClose}
                variant="pinkOutline"
                size="lg"
                className="w-full gap-2"
              >
                <ChartBarIcon className="h-4 w-4" />
                View in Dashboard
              </MainButton>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}