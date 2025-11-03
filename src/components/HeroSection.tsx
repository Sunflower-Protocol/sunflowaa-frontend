import Image from "next/image";
import ResizableNavbar from "./ResizableNavbar";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-blue-50 to-blue-50 p-6 flex flex-col">
      <ResizableNavbar />

      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="relative w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Assets/Background/Background-Hero.png"
              alt="Sunflowaa Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-br from-white-900/60 via-blue-900/40 to-white-900/60" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Transform How You
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="text-white-300">Create Music</span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed mb-8 font-semibold">
              Create, remix, and monetize music in{" "}
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                <Image
                  src="/Assets/Logo/logo-story.png"
                  alt="Story Protocol Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-white font-semibold">Story Protocol</span>
              </span>
            </p>

            <button className="bg-black cursor-pointer text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
