"use client";

import { useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  EllipsisHorizontalIcon,
  MusicalNoteIcon,
  ArrowsRightLeftIcon,
  MicrophoneIcon,
  BoltIcon,
  SpeakerWaveIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { MainButton, LoveButton } from "../_components/Button";

interface Stem {
  id: string;
  name: string;
  artist: string;
  duration: string;
  type: "vocals" | "drums" | "bass" | "synth" | "fx";
  bpm: number;
  key: string;
  genre: string;
  isLiked: boolean;
  plays: number;
  usedInRemixes: number;
  license: {
    type: string;
    royalty: number;
  };
}

const STEM_TYPES = [
  {
    type: "vocals",
    icon: MicrophoneIcon,
    color: "pink",
    description: "Voice recordings and vocal melodies",
    emoji: "🎤",
  },
  {
    type: "drums",
    icon: MusicalNoteIcon,
    color: "red",
    description: "Drum beats and percussion patterns",
    emoji: "🥁",
  },
  {
    type: "bass",
    icon: SpeakerWaveIcon,
    color: "blue",
    description: "Bass lines and low-frequency sounds",
    emoji: "🎸",
  },
  {
    type: "synth",
    icon: AdjustmentsHorizontalIcon,
    color: "purple",
    description: "Synthesizer melodies and piano parts",
    emoji: "🎹",
  },
  {
    type: "fx",
    icon: BoltIcon,
    color: "green",
    description: "Sound effects, reverb, and ambient textures",
    emoji: "🎧",
  },
] as const;

export default function Music() {
  const [playingStem, setPlayingStem] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const stems: Stem[] = [
    {
      id: "1",
      name: "Smooth R&B Vocals",
      artist: "@VocalistPro",
      duration: "2:45",
      type: "vocals",
      bpm: 95,
      key: "C Major",
      genre: "R&B",
      isLiked: true,
      plays: 2850,
      usedInRemixes: 15,
      license: { type: "Commercial", royalty: 12 },
    },
    {
      id: "2",
      name: "Hip Hop Drum Loop",
      artist: "@BeatMaker",
      duration: "1:30",
      type: "drums",
      bpm: 140,
      key: "N/A",
      genre: "Hip Hop",
      isLiked: false,
      plays: 1920,
      usedInRemixes: 8,
      license: { type: "Non-Commercial", royalty: 0 },
    },
    {
      id: "3",
      name: "Deep House Bass",
      artist: "@BasslineKing",
      duration: "3:15",
      type: "bass",
      bpm: 124,
      key: "F Minor",
      genre: "House",
      isLiked: true,
      plays: 3200,
      usedInRemixes: 22,
      license: { type: "Commercial", royalty: 8 },
    },
    {
      id: "4",
      name: "Dreamy Synth Pad",
      artist: "@SynthWave",
      duration: "4:00",
      type: "synth",
      bpm: 110,
      key: "A Minor",
      genre: "Electronic",
      isLiked: false,
      plays: 1650,
      usedInRemixes: 12,
      license: { type: "Commercial", royalty: 10 },
    },
    {
      id: "5",
      name: "Ambient Texture",
      artist: "@SoundDesigner",
      duration: "2:20",
      type: "fx",
      bpm: 0,
      key: "N/A",
      genre: "Ambient",
      isLiked: true,
      plays: 980,
      usedInRemixes: 5,
      license: { type: "Creative Commons", royalty: 0 },
    },
    {
      id: "6",
      name: "Jazz Piano Melody",
      artist: "@PianoJazz",
      duration: "3:30",
      type: "synth",
      bpm: 120,
      key: "Bb Major",
      genre: "Jazz",
      isLiked: false,
      plays: 1420,
      usedInRemixes: 7,
      license: { type: "Commercial", royalty: 15 },
    },
  ];

  const handlePlayPause = (stemId: string) => {
    setPlayingStem(playingStem === stemId ? null : stemId);
  };

  const handleLike = (stemId: string) => {
    console.log("Liked stem:", stemId);
  };

  const handleRemix = (stemId: string) => {
    console.log("Remix stem:", stemId);
  };

  const filteredStems = stems.filter((stem) => {
    const matchesSearch =
      stem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stem.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      stem.type === filter ||
      (filter === "liked" && stem.isLiked) ||
      (filter === "trending" && stem.usedInRemixes > 10) ||
      stem.genre.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Explore Stems
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Discover and explore individual music components for your remixes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <MainButton size="lg" className="flex items-center gap-2">
            <MagnifyingGlassIcon className="h-4 w-4" />
            Explore All Stems
          </MainButton>
        </div>
      </div>

      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800 dark:text-gray-300 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Search stems by name, artist, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200/40 dark:border-neutral-700/40 rounded-2xl bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-300/60 dark:focus:border-neutral-600/60 transition-colors backdrop-blur-md"
          />
        </div>

        {/* Stem Type Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              filter === "all"
                ? "bg-gray-100/80 border-gray-300/50 text-gray-700 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                : "bg-white/70 dark:bg-neutral-800/70 border-gray-200/40 dark:border-neutral-700/40 text-gray-600 dark:text-gray-400 hover:border-gray-300/60 dark:hover:border-neutral-600/60 hover:bg-white/90 dark:hover:bg-neutral-800/90"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🎵</div>
              <div className="text-sm font-medium">All Stems</div>
            </div>
          </button>
          {STEM_TYPES.map(({ type, icon: Icon, description, emoji }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                filter === type
                  ? "bg-gray-100/80 border-gray-300/50 text-gray-700 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                  : "bg-white/70 dark:bg-neutral-800/70 border-gray-200/40 dark:border-neutral-700/40 text-gray-600 dark:text-gray-400 hover:border-gray-300/60 dark:hover:border-neutral-600/60 hover:bg-white/90 dark:hover:bg-neutral-800/90"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{emoji}</div>
                <div className="text-sm font-medium capitalize">{type}</div>
                <div className="text-xs opacity-75 mt-1">
                  {description.split(" ").slice(0, 2).join(" ")}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Additional Filters */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            "trending",
            "liked",
            "r&b",
            "hip hop",
            "house",
            "electronic",
            "ambient",
            "jazz",
          ].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === filterType
                  ? "bg-gray-100/80 text-gray-700 border border-gray-300/50 dark:bg-neutral-700/50 dark:border-neutral-600/50 dark:text-neutral-300"
                  : "bg-gray-100/60 text-gray-600 hover:bg-gray-100/80 border border-transparent dark:bg-neutral-700/40 dark:text-gray-400 dark:hover:bg-neutral-700/60"
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStems.map((stem) => {
          const stemType = STEM_TYPES.find((t) => t.type === stem.type);
          const Icon = stemType?.icon || MusicalNoteIcon;

          return (
            <div
              key={stem.id}
              className={`cursor-pointer bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/30 dark:border-neutral-700/30 p-6 hover:border-gray-300/50 dark:hover:border-neutral-600/50 transition-all hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-neutral-900/20 group backdrop-blur-md hover:bg-white/90 dark:hover:bg-neutral-800/90`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-10 w-10 text-gray-600 dark:text-gray-400" />
                  </div>
                  <button
                    onClick={() => handlePlayPause(stem.id)}
                    className="cursor-pointer absolute -bottom-2 -right-2 w-10 h-10 bg-gray-600/80 hover:bg-gray-700/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
                  >
                    {playingStem === stem.id ? (
                      <PauseIcon className="h-4 w-4" />
                    ) : (
                      <PlayIcon className="h-4 w-4 ml-0.5" />
                    )}
                  </button>

                  <div className="absolute -top-2 -left-2 px-2 py-1 bg-gray-100/70 dark:bg-neutral-700/70 text-gray-700 dark:text-neutral-300 rounded-full text-xs font-medium backdrop-blur-sm">
                    {stem.type.toUpperCase()}
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {stem.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {stem.artist}
                  </p>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span>{stem.duration}</span>
                    <span>•</span>
                    <span>{stem.bpm} BPM</span>
                    <span>•</span>
                    <span>{stem.key}</span>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <PlayIcon className="h-3 w-3" />
                      {stem.plays.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <ArrowsRightLeftIcon className="h-3 w-3" />
                      {stem.usedInRemixes} remixes
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-100/70 dark:bg-neutral-700/70 text-gray-700 dark:text-neutral-300 rounded-full backdrop-blur-sm">
                      {stem.license.type}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {stem.license.royalty}% royalty
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <LoveButton
                    isLiked={stem.isLiked}
                    onToggle={() => handleLike(stem.id)}
                  />

                  <MainButton
                    onClick={() => handleRemix(stem.id)}
                    size="sm"
                    className="flex-1"
                    withParticles
                  >
                    Use in Remix
                  </MainButton>

                  <button className="cursor-pointer p-2 rounded-lg bg-gray-100/60 hover:bg-gray-100/80 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/80 text-gray-600 dark:text-gray-400 transition-colors backdrop-blur-sm">
                    <EllipsisHorizontalIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredStems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
            No stems found
          </h3>
          <p className="text-gray-400 dark:text-gray-500">
            Try adjusting your search or explore different stem types
          </p>
        </div>
      )}

      <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100/60 to-gray-200/60 dark:from-neutral-700/60 dark:to-neutral-800/60 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MusicalNoteIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Ready to create your remix?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Upload your own stems or head to Remix Studio to start creating
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <MainButton size="lg" withParticles>
              Upload Stems
            </MainButton>
            <MainButton variant="pinkOutline" size="lg">
              <AdjustmentsHorizontalIcon className="h-4 w-4" />
              Open Remix Studio
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
