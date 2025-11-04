"use client";

import { BarChart, TrendingUp, Music, Users, DollarSign, Calendar, Star, Zap } from "lucide-react";
import { MainButton } from "../_components/Button";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Tracks",
      value: "24",
      change: "+3 from last month",
      emoji: "🎵",
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800"
    },
    {
      title: "Total Earnings",
      value: "$2,847",
      change: "+12% from last month",
      emoji: "💰",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800"
    },
    {
      title: "Collaborations",
      value: "8",
      change: "+2 this week",
      emoji: "🤝",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800"
    },
    {
      title: "Monthly Plays",
      value: "12.4K",
      change: "+18% from last month",
      emoji: "📈",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
    }
  ];

  const recentActivity = [
    {
      action: "New track uploaded",
      track: "Summer Vibes Remix",
      time: "2 hours ago",
      emoji: "🎵"
    },
    {
      action: "Collaboration request",
      track: "Electronic Dreams",
      time: "4 hours ago",
      emoji: "🤝"
    },
    {
      action: "Royalty payment received",
      track: "Midnight Jazz",
      time: "1 day ago",
      emoji: "💰"
    },
    {
      action: "Track registered as IP",
      track: "Ocean Waves",
      time: "2 days ago",
      emoji: "📝"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here&apos;s what&apos;s happening with your music.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6 hover:border-pink-300 dark:hover:border-pink-700 transition-all hover:shadow-lg group cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {stat.emoji}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              📅 Recent Activity
            </h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center text-sm shrink-0">
                  {activity.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.track}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              📊 Performance Overview
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  🎵 Monthly Plays
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  12.4K
                </span>
              </div>
              <div className="w-full bg-pink-100 dark:bg-pink-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-3 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  💰 Earnings Growth
                </span>
                <span className="text-sm font-bold text-green-600">
                  +12%
                </span>
              </div>
              <div className="w-full bg-green-100 dark:bg-green-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  🤝 Collaboration Rate
                </span>
                <span className="text-sm font-bold text-purple-600">
                  8 Active
                </span>
              </div>
              <div className="w-full bg-purple-100 dark:bg-purple-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-2xl border-2 border-pink-200 dark:border-pink-800 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Ready to create something amazing?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Upload new tracks, collaborate with artists, or explore the remix library
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <MainButton
              size="lg"
              withParticles
            >
              Upload Track
            </MainButton>
            <MainButton
              variant="pinkOutline"
              size="lg"
            >
              Explore Remixes
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}