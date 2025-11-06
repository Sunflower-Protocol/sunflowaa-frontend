"use client";

import { useRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FileUploadProps } from "./types";

export function FileUpload({
  file,
  onFileChange,
  accept,
  placeholder,
  icon: Icon,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileChange(selectedFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer border border-dashed border-gray-300/50 dark:border-neutral-600/50 rounded-3xl p-8 text-center bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 hover:border-gray-400/60 transition-colors group backdrop-blur-sm"
    >
      <div className="w-16 h-16 bg-linear-to-br from-gray-200/60 to-gray-300/60 dark:from-neutral-700/60 dark:to-neutral-600/60 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
        <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {file ? (
          <div className="flex items-center justify-center gap-2">
            <CheckIcon className="h-4 w-4 text-green-600" />
            {file.name}
          </div>
        ) : (
          placeholder
        )}
      </span>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}