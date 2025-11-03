'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <Image
                src="/Assets/Logo/sunflowaa.png"
                alt="Sunflowaa Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-black">sunflowaa</h3>
          </div>
          
          <div>
            <h4 className="text-base font-medium text-black mb-4">Platform</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                Documentation
              </a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                Music Studio
              </a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                Support & Help
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium text-black mb-4">Community</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                Discord
              </a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                X (Twitter)
              </a>
              <a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            ©2024 sunflowaa.inc
          </p>
        </div>
      </div>
    </footer>
  );
}