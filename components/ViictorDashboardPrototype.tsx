'use client';

import { useState } from 'react';

export default function ViictorDashboardPrototype() {
  const [ignoredChallenge, setIgnoredChallenge] = useState(false);
  const [acceptedChallenge, setAcceptedChallenge] = useState(false);

  const matches = [
    { id: 1, name: 'Carlos Mendez', result: 'W', time: '2 hours ago' },
    { id: 2, name: 'Armand Barrow', result: 'L', time: '1 day ago' },
    { id: 3, name: 'Diego Bartley', result: 'L', time: '3 days ago' },
  ];

  return (
    <div className="flex justify-center">
      {/* Mobile frame container */}
      <div className="relative w-[402px] bg-white shadow-lg overflow-hidden rounded-2xl border border-gray-200">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white text-xs font-semibold">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header with user info */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
            <div className="text-left">
              <p className="font-bold text-sm text-gray-900">John Doe</p>
              <p className="text-xs text-gray-600">Perth, WA</p>
            </div>
          </div>
          <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-full transition">
            ⋮
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="h-[446px] overflow-y-auto bg-gradient-to-b from-[#f6f9f6] to-white">
          <div className="px-3 py-4 space-y-6">
            {/* Ranking Stats Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">RANKING</p>
                  <p className="text-lg font-bold text-[#35df5a] mt-1">#327</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">TIER</p>
                  <p className="text-sm font-bold text-[#d97706] mt-1">Tier 4</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">EARNINGS</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">$0.0</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Win Rate</p>
                  <p className="text-sm font-semibold text-gray-900">$10+</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Points</p>
                  <p className="text-sm font-semibold text-gray-900">247</p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#35df5a] rounded-lg p-4 text-white font-bold text-sm transition hover:bg-[#2bc44a] active:scale-95">
                <div className="text-center">
                  <p className="text-xs opacity-90 mb-1">PLAY</p>
                  <p className="font-extrabold">HEAD 2 HEAD</p>
                </div>
              </button>
              <button className="bg-gray-900 rounded-lg p-4 text-white font-bold text-sm transition hover:bg-black active:scale-95">
                <div className="text-center">
                  <p className="text-xs opacity-90 mb-1">JOIN</p>
                  <p className="font-extrabold">TOURNAMENTS</p>
                </div>
              </button>
            </div>

            {/* Incoming Challenges */}
            <div>
              <div className="flex items-center justify-between px-1 mb-3">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Incoming Challenges</h3>
                <a href="#" className="text-xs font-semibold text-[#35df5a] hover:underline">
                  See all
                </a>
              </div>
              {!ignoredChallenge && !acceptedChallenge && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                    <div className="text-left flex-1">
                      <p className="text-sm font-semibold text-gray-900">Marcus challenged you</p>
                      <p className="text-xs text-gray-500">Best of 1 - Singles</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIgnoredChallenge(true)}
                      className="flex-1 py-2 px-3 rounded border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition"
                    >
                      Ignore
                    </button>
                    <button
                      onClick={() => setAcceptedChallenge(true)}
                      className="flex-1 py-2 px-3 rounded bg-[#35df5a] text-white font-semibold text-sm hover:bg-[#2bc44a] transition"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              )}
              {ignoredChallenge && (
                <p className="text-xs text-gray-500 text-center py-4">Challenge ignored.</p>
              )}
              {acceptedChallenge && (
                <p className="text-xs text-[#35df5a] font-semibold text-center py-4">✓ Challenge accepted!</p>
              )}
            </div>

            {/* Recent Matches */}
            <div>
              <div className="flex items-center justify-between px-1 mb-3">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Recent Matches</h3>
                <a href="#" className="text-xs font-semibold text-[#35df5a] hover:underline">
                  See all
                </a>
              </div>
              <div className="space-y-2">
                {matches.map((match) => (
                  <div key={match.id} className="bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-between hover:shadow-sm transition">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-300" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">{match.name}</p>
                        <p className="text-xs text-gray-500">{match.time}</p>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded font-bold text-xs ${
                        match.result === 'W'
                          ? 'bg-[#d1fae5] text-[#047857]'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {match.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer for scrollable content */}
            <div className="h-4" />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around px-2 py-3 border-t border-gray-100 bg-white">
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-[#35df5a] hover:bg-gray-50 transition">
            <span className="text-lg">🏠</span>
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <span className="text-lg">🏆</span>
            <span className="text-xs font-semibold">Tournaments</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <span className="text-lg">👥</span>
            <span className="text-xs font-semibold">Players</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <span className="text-lg">📊</span>
            <span className="text-xs font-semibold">Ranking</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <span className="text-lg">👤</span>
            <span className="text-xs font-semibold">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
