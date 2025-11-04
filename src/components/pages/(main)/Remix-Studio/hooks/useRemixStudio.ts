"use client";

import { useState } from "react";
import { Stem, TimelineTrack, StudioState } from "../types";
import { DEFAULT_STUDIO_STATE } from "../constants";

export function useRemixStudio() {
  const [state, setState] = useState<StudioState>(DEFAULT_STUDIO_STATE);

  const updateState = (updates: Partial<StudioState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const addStemToTimeline = (stem: Stem) => {
    const newTrack: TimelineTrack = {
      id: `track_${Date.now()}`,
      stem,
      startTime: 0,
      volume: 80,
      muted: false,
      solo: false,
    };
    setState(prev => ({
      ...prev,
      timelineTracks: [...prev.timelineTracks, newTrack],
    }));
  };

  const removeTrackFromTimeline = (trackId: string) => {
    setState(prev => ({
      ...prev,
      timelineTracks: prev.timelineTracks.filter(track => track.id !== trackId),
    }));
  };

  const updateTrackProperty = (
    trackId: string,
    property: keyof TimelineTrack,
    value: unknown
  ) => {
    setState(prev => ({
      ...prev,
      timelineTracks: prev.timelineTracks.map(track =>
        track.id === trackId ? { ...track, [property]: value } : track
      ),
    }));
  };

  const calculateTotalRoyalty = () => {
    return state.timelineTracks.reduce((total, track) => {
      return total + track.stem.license.royalty;
    }, 0);
  };

  const handleMint = async () => {
    updateState({ isMinting: true });
    setTimeout(() => {
      updateState({ isMinting: false, showPreview: true });
    }, 3000);
  };

  const handlePlayPause = () => {
    updateState({ isPlaying: !state.isPlaying });
  };

  const handleStop = () => {
    updateState({ isPlaying: false, currentTime: 0 });
  };

  const handleRecord = () => {
    updateState({ isRecording: !state.isRecording });
  };

  const handleLoop = () => {
    updateState({ isLooping: !state.isLooping });
  };

  const handleVolumeChange = (volume: number) => {
    updateState({ volume });
  };

  const handleTempoChange = (tempo: number) => {
    updateState({ tempo });
  };

  const handleSearchChange = (searchQuery: string) => {
    updateState({ searchQuery });
  };

  const handleTypeChange = (selectedType: string) => {
    updateState({ selectedType });
  };

  const closeSuccessModal = () => {
    updateState({ showPreview: false });
  };

  return {
    ...state,
    totalRoyalty: calculateTotalRoyalty(),
    canMint: state.timelineTracks.length > 0,
    addStemToTimeline,
    removeTrackFromTimeline,
    updateTrackProperty,
    handleMint,
    handlePlayPause,
    handleStop,
    handleRecord,
    handleLoop,
    handleVolumeChange,
    handleTempoChange,
    handleSearchChange,
    handleTypeChange,
    closeSuccessModal,
  };
}