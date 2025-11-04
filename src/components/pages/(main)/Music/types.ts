export interface Stem {
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

export interface StemType {
  type: string;
  icon: any;
  color: string;
  description: string;
  emoji: string;
}