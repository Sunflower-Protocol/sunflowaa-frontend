"use client";

import { useState, useRef, useEffect } from "react";
import { MainButton } from "../_components/Button";
import { Loader } from "lucide-react";
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  SpeakerWaveIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  CurrencyDollarIcon,
  UsersIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  XMarkIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

interface Stem {
  id: string;
  name: string;
  artist: string;
  type: "vocals" | "drums" | "bass" | "synth" | "fx";
  duration: number;
  bpm: number;
  key: string;
  license: {
    type: string;
    royalty: number;
    creator: string;
  };
  ipAssetId: string;
  waveform: number[];
}

interface TimelineTrack {
  id: string;
  stem: Stem;
  startTime: number;
  volume: number;
  muted: boolean;
  solo: boolean;
}

const STEM_TYPES = [
  { type: "vocals", icon: MicrophoneIcon, color: "pink" },
  { type: "drums", icon: MusicalNoteIcon, color: "red" },
  { type: "bass", icon: MusicalNoteIcon, color: "blue" },
  { type: "synth", icon: MusicalNoteIcon, color: "purple" },
  { type: "fx", icon: BoltIcon, color: "green" }
] as const;

const MOCK_STEMS: Stem[] = [
  {
    id: "stem_1",
    name: "Smooth Vocals",
    artist: "@Loren",
    type: "vocals",
    duration: 45,
    bpm: 120,
    key: "C",
    license: { type: "Commercial", royalty: 10, creator: "@Loren" },
    ipAssetId: "ip_abc123",
    waveform: Array.from({ length: 100 }, () => Math.random() * 100)
  },
  {
    id: "stem_2",
    name: "Deep Bass Line",
    artist: "@BassMaster",
    type: "bass",
    duration: 60,
    bpm: 120,
    key: "C",
    license: { type: "Non-Commercial", royalty: 5, creator: "@BassMaster" },
    ipAssetId: "ip_def456",
    waveform: Array.from({ length: 100 }, () => Math.random() * 80)
  },
  {
    id: "stem_3",
    name: "Crisp Drums",
    artist: "@DrumKing",
    type: "drums",
    duration: 30,
    bpm: 120,
    key: "C",
    license: { type: "Commercial", royalty: 8, creator: "@DrumKing" },
    ipAssetId: "ip_ghi789",
    waveform: Array.from({ length: 100 }, () => Math.random() * 120)
  }
];

export default function RemixStudio() {
  const [selectedStems, setSelectedStems] = useState<Stem[]>([]);
  const [timelineTracks, setTimelineTracks] = useState<TimelineTrack[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [volume, setVolume] = useState(80);
  const [tempo, setTempo] = useState(120);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [isLooping, setIsLooping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const waveformRef = useRef<HTMLDivElement>(null);

  const filteredStems = MOCK_STEMS.filter(stem => {
    const matchesSearch = stem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         stem.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || stem.type === selectedType;
    return matchesSearch && matchesType;
  });

  const totalRoyalty = timelineTracks.reduce((total, track) => {
    return total + track.stem.license.royalty;
  }, 0);

  const addStemToTimeline = (stem: Stem) => {
    const newTrack: TimelineTrack = {
      // eslint-disable-next-line react-hooks/purity
      id: `track_${Date.now()}`,
      stem,
      startTime: 0,
      volume: 80,
      muted: false,
      solo: false
    };
    setTimelineTracks(prev => [...prev, newTrack]);
  };

  const removeTrackFromTimeline = (trackId: string) => {
    setTimelineTracks(prev => prev.filter(track => track.id !== trackId));
  };

  const updateTrackProperty = (trackId: string, property: keyof TimelineTrack, value: any) => {
    setTimelineTracks(prev => 
      prev.map(track => 
        track.id === trackId ? { ...track, [property]: value } : track
      )
    );
  };

  const handleMint = async () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setShowPreview(true);
    }, 3000);
  };

  return (
    <main className="h-screen flex flex-col bg-gray-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full flex items-center justify-center">
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Remix Studio</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create → Preview → Mint</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm">
              <CurrencyDollarIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300">Total Royalty: {totalRoyalty}%</span>
            </div>
            <MainButton
              onClick={handleMint}
              disabled={timelineTracks.length === 0 || isMinting}
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isMinting ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : (
                <>
<SparklesIcon className="h-4 w-4" />
                  Mint as Remix
                </>
              )}
            </MainButton>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Stem Library Panel */}
        <div className="w-80 bg-white dark:bg-neutral-800 border-r border-gray-200 dark:border-neutral-700 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <MusicalNoteIcon className="h-5 w-5" />
              Stem Library
            </h2>
            
            {/* Search & Filter */}
            <div className="space-y-3">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType("all")}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedType === "all"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                      : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
                  }`}
                >
                  All
                </button>
                {STEM_TYPES.map(({ type, icon: Icon }) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      selectedType === type
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stems List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredStems.map((stem) => {
              const stemType = STEM_TYPES.find(t => t.type === stem.type);
              const Icon = stemType?.icon || MusicalNoteIcon;
              
              return (
                <div
                  key={stem.id}
                  className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-3 border border-gray-200 dark:border-neutral-600 hover:border-purple-300 dark:hover:border-purple-600 transition-colors cursor-pointer"
                  onClick={() => addStemToTimeline(stem)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">{stem.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{stem.artist}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stem.duration}s</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <span>{stem.bpm} BPM</span>
                      <span>Key: {stem.key}</span>
                    </div>
                    <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                      {stem.license.royalty}% royalty
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Timeline Editor */}
        <div className="flex-1 flex flex-col">
          {/* Audio Controls */}
          <div className="bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5 ml-0.5" />}
                  </button>
                  
                  <button
                    onClick={() => setCurrentTime(0)}
                    className="w-8 h-8 bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <StopIcon className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isRecording 
                        ? "bg-red-600 text-white" 
                        : "bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <div className="w-3 h-3 bg-current rounded-full"></div>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SpeakerWaveIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-20"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-8">{volume}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">BPM:</span>
                    <input
                      type="number"
                      min="60"
                      max="200"
                      value={tempo}
                      onChange={(e) => setTempo(Number(e.target.value))}
                      className="w-16 px-2 py-1 border border-gray-300 dark:border-neutral-600 rounded bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm"
                    />
                  </div>
                  
                  <button
                    onClick={() => setIsLooping(!isLooping)}
                    className={`p-2 rounded transition-colors ${
                      isLooping
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
                    }`}
                  >
                    <ArrowPathIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              {timelineTracks.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MusicalNoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Drag stems from the library to start creating your remix</p>
                </div>
              ) : (
                timelineTracks.map((track) => {
                  const Icon = STEM_TYPES.find(t => t.type === track.stem.type)?.icon || MusicalNoteIcon;
                  
                  return (
                    <div key={track.id} className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{track.stem.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{track.stem.artist}</div>
                          </div>
                          <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
                            {track.stem.license.royalty}% to {track.stem.license.creator}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateTrackProperty(track.id, 'muted', !track.muted)}
                            className={`px-3 py-1 rounded text-xs font-medium ${
                              track.muted
                                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
                            }`}
                          >
                            {track.muted ? "Muted" : "Mute"}
                          </button>
                          
                          <button
                            onClick={() => updateTrackProperty(track.id, 'solo', !track.solo)}
                            className={`px-3 py-1 rounded text-xs font-medium ${
                              track.solo
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                : "bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-400"
                            }`}
                          >
                            {track.solo ? "Solo" : "Solo"}
                          </button>
                          
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={track.volume}
                            onChange={(e) => updateTrackProperty(track.id, 'volume', Number(e.target.value))}
                            className="w-16"
                          />
                          
                          <button
                            onClick={() => removeTrackFromTimeline(track.id)}
                            className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                          >
<XMarkIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Waveform visualization */}
                      <div className="h-16 bg-gray-50 dark:bg-neutral-700 rounded flex items-end gap-0.5 px-2 overflow-hidden">
                        {track.stem.waveform.map((height, index) => (
                          <div
                            key={index}
                            className="bg-purple-400 dark:bg-purple-500 rounded-t"
                            style={{
                              height: `${(height / 100) * 100}%`,
                              width: '2px',
                              minHeight: '2px'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Success Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-purple-200 dark:border-purple-800 p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <SparklesIcon className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
Remix Created Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
Your remix has been minted as a new IP Asset on Story Protocol
            </p>
            <div className="space-y-3">
              <MainButton
                onClick={() => setShowPreview(false)}
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                withParticles
              >
<ChartBarIcon className="h-4 w-4" />
                View in Dashboard
              </MainButton>
              <MainButton
                onClick={() => setShowPreview(false)}
                variant="outline"
                size="lg"
                className="w-full"
              >
<ArrowUpTrayIcon className="h-4 w-4" />
                Share Remix
              </MainButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}