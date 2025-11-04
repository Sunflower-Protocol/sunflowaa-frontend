"use client";

import { StudioHeader } from "./StudioHeader";
import { StemLibrary } from "./StemLibrary";
import { TransportControls } from "./TransportControls";
import { Timeline } from "./Timeline";
import { SuccessModal } from "./SuccessModal";
import { useRemixStudio } from "./hooks/useRemixStudio";
import { MOCK_STEMS } from "./constants";

export default function RemixStudio() {
  const {
    timelineTracks,
    isPlaying,
    currentTime,
    duration,
    volume,
    tempo,
    searchQuery,
    selectedType,
    isLooping,
    isRecording,
    showPreview,
    isMinting,
    totalRoyalty,
    canMint,
    addStemToTimeline,
    updateTrackProperty,
    removeTrackFromTimeline,
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
  } = useRemixStudio();

  const filteredStems = MOCK_STEMS.filter((stem) => {
    const matchesSearch =
      stem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stem.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || stem.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="h-screen flex flex-col bg-gray-50/80 dark:bg-neutral-900/80">
      <StudioHeader
        totalRoyalty={totalRoyalty}
        isMinting={isMinting}
        canMint={canMint}
        onMint={handleMint}
      />

      <div className="flex flex-1 overflow-hidden">
        <StemLibrary
          stems={filteredStems}
          searchQuery={searchQuery}
          selectedType={selectedType}
          onSearchChange={handleSearchChange}
          onTypeChange={handleTypeChange}
          onStemSelect={addStemToTimeline}
        />

        <div className="flex-1 flex flex-col">
          <TransportControls
            isPlaying={isPlaying}
            isRecording={isRecording}
            isLooping={isLooping}
            volume={volume}
            tempo={tempo}
            currentTime={currentTime}
            duration={duration}
            onPlayPause={handlePlayPause}
            onStop={handleStop}
            onRecord={handleRecord}
            onLoop={handleLoop}
            onVolumeChange={handleVolumeChange}
            onTempoChange={handleTempoChange}
          />

          <Timeline
            tracks={timelineTracks}
            onTrackUpdate={updateTrackProperty}
            onTrackRemove={removeTrackFromTimeline}
          />
        </div>
      </div>

      <SuccessModal isVisible={showPreview} onClose={closeSuccessModal} />
    </main>
  );
}
