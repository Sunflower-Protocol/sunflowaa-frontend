"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { FilterButtons } from "./FilterButtons";
import { StemCard } from "./StemCard";
import { CallToAction } from "./CallToAction";
import { EmptyState } from "./EmptyState";
import { MOCK_STEMS } from "./constants";
import { WalletConnect } from "../../../WalletConnect";

export default function Music() {
  const [playingStem, setPlayingStem] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlayPause = (stemId: string) => {
    setPlayingStem(playingStem === stemId ? null : stemId);
  };

  const handleLike = (stemId: string) => {
    console.log("Liked stem:", stemId);
  };

  const handleRemix = (stemId: string) => {
    console.log("Remix stem:", stemId);
  };

  const filteredStems = MOCK_STEMS.filter((stem) => {
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
        <div className="flex-shrink-0">
          <WalletConnect />
        </div>
      </div>

      <div className="space-y-4">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <FilterButtons
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStems.map((stem) => (
          <StemCard
            key={stem.id}
            stem={stem}
            playingStem={playingStem}
            onPlayPause={handlePlayPause}
            onLike={handleLike}
            onRemix={handleRemix}
          />
        ))}
      </div>

      {filteredStems.length === 0 && <EmptyState />}

      <CallToAction />
    </div>
  );
}
