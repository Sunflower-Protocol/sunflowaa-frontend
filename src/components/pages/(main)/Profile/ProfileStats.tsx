"use client";

import Image from "next/image";
import { ChartBarIcon, MusicalNoteIcon, TrophyIcon, UsersIcon } from "@heroicons/react/24/outline";
import { usdcLogo } from "../../../../../public/Assets";
import { UserStats } from "./types";

interface ProfileStatsProps {
  stats: UserStats;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number | string;
  label: string;
}

function UsdcIcon({ className }: { className?: string }) {
  return (
    <Image 
      src={usdcLogo} 
      alt="USDC" 
      width={32} 
      height={32} 
      className={className}
    />
  );
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  const isRoyalties = label === 'Total Royalties';
  
  return (
    <div className="text-center p-4 bg-gradient-to-br from-gray-50/60 to-gray-100/60 dark:from-neutral-800/40 dark:to-neutral-700/40 rounded-2xl backdrop-blur-sm">
      {!isRoyalties && <Icon className="h-8 w-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />}
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {isRoyalties ? (
          <div className="flex items-center justify-center gap-2">
            <span>${value}</span>
            <Image src={usdcLogo} alt="USDC" width={24} height={24} className="h-6 w-6" />
          </div>
        ) : (
          value
        )}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  const statsConfig = [
    {
      icon: MusicalNoteIcon,
      value: stats.totalTracks,
      label: "Total Tracks"
    },
    {
      icon: TrophyIcon,
      value: stats.ipAssets,
      label: "IP Assets"
    },
    // {
    //   icon: UsersIcon,
    //   value: stats.totalCollaborations,
    //   label: "Collaborations"
    // },
    {
      icon: UsdcIcon,
      value: stats.totalRoyalties,
      label: "Total Royalties"
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-neutral-800/80 rounded-3xl border border-gray-200/40 dark:border-neutral-700/40 p-6 backdrop-blur-md">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <ChartBarIcon className="h-5 w-5" />
        Stats
      </h2>

      <div className="space-y-4">
        {statsConfig.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}