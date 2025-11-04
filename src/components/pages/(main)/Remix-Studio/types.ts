export interface Stem {
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

export interface TimelineTrack {
  id: string;
  stem: Stem;
  startTime: number;
  volume: number;
  muted: boolean;
  solo: boolean;
}

export interface StemType {
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface StudioState {
  selectedStems: Stem[];
  timelineTracks: TimelineTrack[];
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  tempo: number;
  searchQuery: string;
  selectedType: string;
  isLooping: boolean;
  isRecording: boolean;
  showPreview: boolean;
  isMinting: boolean;
}

export interface StudioHeaderProps {
  totalRoyalty: number;
  isMinting: boolean;
  canMint: boolean;
  onMint: () => void;
}

export interface StemLibraryProps {
  stems: Stem[];
  searchQuery: string;
  selectedType: string;
  onSearchChange: (query: string) => void;
  onTypeChange: (type: string) => void;
  onStemSelect: (stem: Stem) => void;
}

export interface StemCardProps {
  stem: Stem;
  onClick: () => void;
}

export interface TransportControlsProps {
  isPlaying: boolean;
  isRecording: boolean;
  isLooping: boolean;
  volume: number;
  tempo: number;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onStop: () => void;
  onRecord: () => void;
  onLoop: () => void;
  onVolumeChange: (volume: number) => void;
  onTempoChange: (tempo: number) => void;
}

export interface TimelineProps {
  tracks: TimelineTrack[];
  onTrackUpdate: (trackId: string, property: keyof TimelineTrack, value: unknown) => void;
  onTrackRemove: (trackId: string) => void;
}

export interface TrackItemProps {
  track: TimelineTrack;
  onUpdate: (property: keyof TimelineTrack, value: unknown) => void;
  onRemove: () => void;
}

export interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}