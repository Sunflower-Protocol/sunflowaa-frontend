import {
  MusicalNoteIcon,
  MicrophoneIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { Stem, StemType, StudioState } from "./types";

export const STEM_TYPES: StemType[] = [
  { type: "vocals", icon: MicrophoneIcon, color: "pink" },
  { type: "drums", icon: MusicalNoteIcon, color: "red" },
  { type: "bass", icon: MusicalNoteIcon, color: "blue" },
  { type: "synth", icon: MusicalNoteIcon, color: "purple" },
  { type: "fx", icon: BoltIcon, color: "green" },
];

export const MOCK_STEMS: Stem[] = [
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
    waveform: Array.from({ length: 100 }, () => Math.random() * 100),
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
    waveform: Array.from({ length: 100 }, () => Math.random() * 80),
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
    waveform: Array.from({ length: 100 }, () => Math.random() * 120),
  },
];

export const DEFAULT_STUDIO_STATE: StudioState = {
  selectedStems: [],
  timelineTracks: [],
  isPlaying: false,
  currentTime: 0,
  duration: 60,
  volume: 80,
  tempo: 120,
  searchQuery: "",
  selectedType: "all",
  isLooping: false,
  isRecording: false,
  showPreview: false,
  isMinting: false,
};