"use client";

import { useState } from "react";
import { Play, Pause, MoreHorizontal, Music2, Shuffle } from "lucide-react";
import { MainButton, LoveButton } from "../_components/Button";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  bpm: number;
  key: string;
  coverImage: string;
  isLiked: boolean;
  plays: number;
  remixes: number;
}

export default function Music() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const tracks: Track[] = [
    {
      id: "1",
      title: "Summer Dreams",
      artist: "You",
      duration: "3:24",
      genre: "Pop",
      bpm: 128,
      key: "C Major",
      coverImage: "🌸",
      isLiked: true,
      plays: 1250,
      remixes: 8
    },
    {
      id: "2", 
      title: "Midnight Vibes",
      artist: "You",
      duration: "4:12",
      genre: "Electronic",
      bpm: 120,
      key: "A Minor",
      coverImage: "🌙",
      isLiked: false,
      plays: 892,
      remixes: 5
    },
    {
      id: "3",
      title: "Ocean Waves",
      artist: "You",
      duration: "2:58",
      genre: "Ambient",
      bpm: 90,
      key: "F Major",
      coverImage: "🌊",
      isLiked: true,
      plays: 2100,
      remixes: 12
    },
    {
      id: "4",
      title: "City Lights",
      artist: "You",
      duration: "3:45",
      genre: "Hip Hop",
      bpm: 140,
      key: "G Minor",
      coverImage: "🏙️",
      isLiked: false,
      plays: 756,
      remixes: 3
    }
  ];

  const handlePlayPause = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const handleLike = (trackId: string) => {
    console.log("Liked track:", trackId);
  };

  const handleRemix = (trackId: string) => {
    console.log("Remix track:", trackId);
  };

  const filteredTracks = tracks.filter(track => {
    if (filter === "all") return true;
    if (filter === "liked") return track.isLiked;
    return track.genre.toLowerCase() === filter;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Music Library</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Your collection of stems and remixes
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <MainButton 
            size="lg" 
            className="flex items-center gap-2"
          >
            <Shuffle className="h-4 w-4" />
            Shuffle Play
          </MainButton>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {["all", "liked", "pop", "electronic", "ambient", "hip hop"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === filterType
                ? "bg-pink-100 text-pink-700 border-2 border-pink-300"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent"
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6 hover:border-pink-300 dark:hover:border-pink-700 transition-all hover:shadow-lg group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center text-3xl">
                  {track.coverImage}
                </div>
                <button
                  onClick={() => handlePlayPause(track.id)}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                >
                  {playingTrack === track.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                </button>
              </div>

              <div className="space-y-2 w-full">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {track.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {track.artist}
                </p>
                
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span>{track.duration}</span>
                  <span>•</span>
                  <span>{track.bpm} BPM</span>
                  <span>•</span>
                  <span>{track.key}</span>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Play className="h-3 w-3" />
                    {track.plays.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Music2 className="h-3 w-3" />
                    {track.remixes} remixes
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full">
                <LoveButton
                  isLiked={track.isLiked}
                  onToggle={() => handleLike(track.id)}
                />
                
                <MainButton
                  onClick={() => handleRemix(track.id)}
                  size="sm"
                  className="flex-1"
                  withParticles
                >
                  Remix
                </MainButton>

                <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTracks.length === 0 && (
        <div className="text-center py-12">
          <Music2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-500 mb-2">No tracks found</h3>
          <p className="text-gray-400">Try adjusting your filter or upload some music</p>
        </div>
      )}

      <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center">
              <Music2 className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Ready to create more music?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Upload new stems or start remixing existing tracks
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <MainButton
              size="lg"
              withParticles
            >
              Upload Music
            </MainButton>
            <MainButton
              variant="pinkOutline"
              size="lg"
            >
              Browse Remixes
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}