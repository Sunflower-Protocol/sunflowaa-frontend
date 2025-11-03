import Image from 'next/image';

export default function FeaturesSection() {
  return (
      <section className="min-h-screen bg-gray-50 p-6 flex flex-col" id="features">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
            Discover amazing music experiences with Sunflowaa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#e6edf4]/45 rounded-4xl p-4 text-center hover:shadow-xl transition-shadow duration-300 h-120">
              <div className="mb-6 flex justify-center mt-20">
                <Image 
                  src="/Assets/Logo/music-logo.png" 
                  alt="Music icon" 
                  width={100} 
                  height={100}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Stream Music
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Listen to millions of songs from your favorite artists. High-quality streaming with no interruptions
              </p>
            </div>
            
            <div className="bg-[#e6edf4]/45 rounded-4xl p-4 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center mt-20">
                <Image 
                  src="/Assets/Logo/remix-logo.png" 
                  alt="Remix icon" 
                  width={100} 
                  height={100}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Create & Remix
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your own tracks and create amazing remixes with our powerful editing tools
              </p>
            </div>

            <div className="bg-[#e6edf4]/45 rounded-4xl p-4 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center mt-20">
                <Image 
                  src="/Assets/Logo/monetize-logo.png" 
                  alt="Monetize icon" 
                  width={100} 
                  height={100}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Monetize Your Music
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Earn revenue from your creations with our fair revenue sharing model for artists
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}