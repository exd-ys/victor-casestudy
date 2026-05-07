'use client';

import { useState } from 'react';

const challenges = [
  {
    id: 1,
    name: 'Marcus',
    initials: 'MR',
    tier: 'Tier 4',
    ranking: '#320',
    expiresIn: '22 hrs',
  },
];

const matches = [
  {
    id: 1,
    opponent: 'Carlos Mendez',
    initials: 'CM',
    type: 'Head 2 Head',
    daysAgo: '3 days ago',
    result: 'W',
    resultColor: '#028924',
  },
  {
    id: 2,
    opponent: 'Arnold Benitez',
    initials: 'AB',
    type: 'Monthly Knockout',
    daysAgo: '6 days ago',
    result: 'L',
    resultColor: '#890202',
  },
  {
    id: 3,
    opponent: 'Diego Santos',
    initials: 'DS',
    type: 'Monthly Knockout',
    daysAgo: '2 weeks ago',
    result: 'L',
    resultColor: '#890202',
  },
];

interface ButtonState {
  challengeIgnore: boolean;
  challengeAccept: boolean;
  tournamentView: boolean;
  tournamentJoin: boolean;
}

export default function ViictorDashboardPrototype() {
  const [buttonStates, setButtonStates] = useState<ButtonState>({
    challengeIgnore: false,
    challengeAccept: false,
    tournamentView: false,
    tournamentJoin: false,
  });

  const handleButtonClick = (key: keyof ButtonState) => {
    setButtonStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Mobile screen dimensions matching existing design (360x667)
  const SCREEN_WIDTH = 360;
  const SCREEN_HEIGHT = 667;
  const STATUS_BAR_HEIGHT = 44;
  const HEADER_HEIGHT = 76;
  const NAV_HEIGHT = 83;
  const SCROLLABLE_HEIGHT = SCREEN_HEIGHT - STATUS_BAR_HEIGHT - HEADER_HEIGHT - NAV_HEIGHT;

  return (
    <div className="flex justify-center bg-white p-2 sm:p-4">
      {/* Mobile Frame Container */}
      <div
        className="relative rounded-[40px] border-8 border-[#1a1a1a] bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{
          width: `${SCREEN_WIDTH}px`,
          height: `${SCREEN_HEIGHT}px`,
        }}
      >
        {/* Status Bar - Fixed */}
        <div
          className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between bg-white px-5 py-2 border-b border-[#e8e8e8]"
          style={{ height: `${STATUS_BAR_HEIGHT}px` }}
        >
          <div className="text-[13px] font-semibold text-[#262626]">9:41</div>
          <div className="flex gap-1 items-center">
            <svg className="h-3 w-3" viewBox="0 0 24 24">
              <path fill="#262626" d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="h-3 w-3" viewBox="0 0 24 24">
              <path fill="#262626" d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="h-3 w-3" viewBox="0 0 25 13">
              <rect x="1" y="1" width="20" height="11" rx="2" fill="none" stroke="#262626" strokeWidth="1" />
              <rect x="21" y="4" width="2" height="5" fill="#262626" />
              <rect x="2" y="2" width="18" height="9" fill="#262626" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Header - Fixed */}
        <div
          className="absolute top-[44px] left-0 right-0 z-40 flex items-center justify-between bg-white px-3 py-2 border-b border-[#e8e8e8]"
          style={{ height: `${HEADER_HEIGHT}px` }}
        >
          <div className="flex gap-3 items-center">
            {/* Avatar */}
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
            <div>
              <p className="text-[12px] font-extrabold text-[#0d1a10] leading-tight">John Doe</p>
              <div className="flex gap-1 items-center mt-0.5">
                <svg className="h-2.5 w-2.5 text-[#526058]" viewBox="0 0 12 12">
                  <path fill="currentColor" d="M6 1c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
                </svg>
                <p className="text-[9px] font-medium text-[#526058]">Perth, WA</p>
              </div>
            </div>
          </div>
          <div className="h-9 w-9 rounded-lg bg-[#f0f4f0] flex items-center justify-center text-[#35df5a] text-base flex-shrink-0">
            🔔
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          className="absolute overflow-y-auto scrollbar-thin scrollbar-thumb-[#d0d0d0] scrollbar-track-transparent"
          style={{
            top: `${STATUS_BAR_HEIGHT + HEADER_HEIGHT}px`,
            left: 0,
            right: 0,
            height: `${SCROLLABLE_HEIGHT}px`,
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {/* Ranking Stats Card */}
          <div className="mb-4 rounded-md bg-white p-3 shadow-sm border border-[#e8e8e8]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[9px] text-[#6a6a6a] font-normal tracking-[0.3px]">Ranking</p>
                <p className="text-[32px] font-bold text-[#0d1a10] leading-none mt-1" style={{ fontFamily: 'Oswald' }}>
                  #327
                </p>
              </div>
              <div className="bg-[#ffedd2] px-2 py-1 rounded-full flex-shrink-0">
                <p className="text-[9px] font-medium text-[#c47800]">Tier 4</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex gap-2">
              {[
                { label: 'Win rate', value: '77%' },
                { label: 'Points', value: '230' },
                { label: 'Earnings', value: '$250' },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 bg-[#f6f9f6] p-2.5 rounded-sm">
                  <p className="text-[14px] font-bold text-[#0d1a10] leading-none" style={{ fontFamily: 'Oswald' }}>
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-[#6a6a6a] font-normal mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex gap-2 mb-5">
            {/* Play Head 2 Head */}
            <div
              className="flex-1 rounded-sm bg-gradient-to-br from-[#35df5a] to-[#2acd49] p-3.5 min-h-[90px] flex flex-col justify-between shadow-sm hover:shadow-md active:shadow-lg transition-all cursor-pointer active:scale-95"
              onClick={() => handleButtonClick('challengeAccept')}
            >
              <p className="text-[11px] font-bold text-[#0d1a10]">PLAY HEAD 2 HEAD</p>
              <div className="text-base">→</div>
            </div>

            {/* Join Tournaments */}
            <div
              className="flex-1 rounded-sm bg-[#262626] p-3.5 min-h-[90px] flex flex-col justify-between shadow-sm hover:shadow-md active:shadow-lg transition-all cursor-pointer active:scale-95"
              onClick={() => handleButtonClick('tournamentJoin')}
            >
              <p className="text-[11px] font-bold text-[#f6f9f6]">JOIN TOURNAMENTS</p>
              <div className="text-base text-[#f6f9f6]">→</div>
            </div>
          </div>

          {/* Incoming Challenges */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-[#262626]" style={{ fontFamily: 'Oswald' }}>
                INCOMING CHALLENGES
              </p>
              <p className="text-[11px] text-[#757575]">See all</p>
            </div>

            <div className="bg-white rounded-lg p-3.5 shadow-sm border border-[#e8e8e8]">
              {challenges.map((challenge) => (
                <div key={challenge.id}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex gap-2 items-center flex-1 min-w-0">
                      <div className="h-5 w-5 rounded-full bg-[#202c23] flex items-center justify-center flex-shrink-0">
                        <p className="text-[5px] font-extrabold text-[#f6f9f6]">{challenge.initials}</p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-extrabold text-[#262626] truncate">
                          <span className="font-bold">Marcus</span> challenged you
                        </p>
                        <p className="text-[9px] text-[#6a6a6a] mt-0.5">
                          {challenge.tier} · {challenge.ranking} · Expires in {challenge.expiresIn}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleButtonClick('challengeIgnore')}
                      className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-semibold transition-all ${
                        buttonStates.challengeIgnore
                          ? 'bg-[#d0d0d0] text-[#202c23] scale-95'
                          : 'bg-[#ecf0ec] text-[#202c23] hover:bg-[#e0e8e0] active:scale-95'
                      }`}
                    >
                      Ignore
                    </button>
                    <button
                      onClick={() => handleButtonClick('challengeAccept')}
                      className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-semibold transition-all ${
                        buttonStates.challengeAccept
                          ? 'bg-[#28c64b] text-[#f6f9f6] scale-95'
                          : 'bg-[#35df5a] text-[#0d1a10] hover:bg-[#2acd49] active:scale-95'
                      }`}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tournament */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-[#262626]" style={{ fontFamily: 'Oswald' }}>
                RECOMMENDED TOURNAMENT
              </p>
              <p className="text-[11px] text-[#757575]">See all</p>
            </div>

            <div className="bg-white rounded-lg p-3.5 shadow-sm border border-[#e8e8e8]">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex gap-1.5 items-center mb-2">
                    <span className="bg-[#ffedd2] px-2 py-0.5 rounded-full text-[9px] font-medium text-[#c47800] flex-shrink-0">
                      Tier 4
                    </span>
                    <span className="bg-[#d7ffdf] px-2 py-0.5 rounded-full text-[9px] font-medium text-[#006115] flex-shrink-0">
                      Open
                    </span>
                  </div>
                  <p className="text-[14px] font-bold text-[#262626]" style={{ fontFamily: 'Oswald' }}>
                    PERTH BOX LEAGUE 49
                  </p>
                  <p className="text-[9px] text-[#6a6a6a] mt-0.5">Knockout · Male singles</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[18px] font-extrabold text-[#262626]">$40</p>
                  <p className="text-[8px] text-[#6a6a6a] font-normal">PRIZE POOL</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex gap-2 items-center mb-3 pb-3 border-b border-[#e8e8e8]">
                <div className="h-5 w-5 rounded-full bg-[#202c23] flex items-center justify-center flex-shrink-0">
                  <p className="text-[5px] font-extrabold text-[#f6f9f6]">MR</p>
                </div>
                <p className="text-[11px] text-[#6a6a6a]">Marcus Reid</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { icon: '💰', label: 'Entry fee', value: '$40' },
                  { icon: '🔀', label: 'Format', value: 'Monthly' },
                  { icon: '📅', label: 'Closes', value: 'Apr 29' },
                  { icon: '✓', label: 'Starts', value: 'March 20' },
                ].map((detail) => (
                  <div key={detail.label} className="bg-[#ecf0ec] p-2.5 rounded-sm">
                    <p className="text-[8px] text-[#6a6a6a] font-normal">{detail.label}</p>
                    <p className="text-[11px] font-extrabold text-[#262626] mt-1">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* Player Count */}
              <div className="flex gap-2 items-center mb-3 pb-3 border-b border-[#e8e8e8]">
                <span className="text-sm flex-shrink-0">👥</span>
                <div className="flex-1 h-1 bg-[#202c23] rounded-full" style={{ width: '60%' }} />
                <p className="text-[9px] text-[#262626] font-bold flex-shrink-0">15/20</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleButtonClick('tournamentView')}
                  className={`flex-1 py-1.5 px-3 rounded-full text-[11px] font-semibold transition-all ${
                    buttonStates.tournamentView
                      ? 'bg-[#d0d0d0] text-[#202c23] scale-95'
                      : 'bg-[#ecf0ec] text-[#202c23] hover:bg-[#e0e8e0] active:scale-95'
                  }`}
                >
                  View
                </button>
                <button
                  onClick={() => handleButtonClick('tournamentJoin')}
                  className={`flex-1 py-1.5 px-3 rounded-full text-[11px] font-semibold transition-all ${
                    buttonStates.tournamentJoin
                      ? 'bg-[#28c64b] text-[#f6f9f6] scale-95'
                      : 'bg-[#35df5a] text-[#0d1a10] hover:bg-[#2acd49] active:scale-95'
                  }`}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Recent Matches */}
          <div className="mb-2">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-[#262626]" style={{ fontFamily: 'Oswald' }}>
                RECENT MATCHES
              </p>
              <p className="text-[11px] text-[#757575]">See all</p>
            </div>

            <div className="space-y-2">
              {matches.map((match) => (
                <div key={match.id} className="bg-white rounded-sm p-3 shadow-sm border border-[#e8e8e8]">
                  <div className="flex gap-2.5 items-center">
                    {/* Avatar */}
                    <div className="h-8 w-8 rounded-full bg-[#202c23] flex items-center justify-center flex-shrink-0">
                      <p className="text-[10px] font-extrabold text-[#f6f9f6]">{match.initials}</p>
                    </div>

                    {/* Match Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-extrabold text-[#262626] truncate">{match.opponent}</p>
                      <p className="text-[9px] text-[#6a6a6a] mt-0.5">
                        {match.type} · {match.daysAgo}
                      </p>
                    </div>

                    {/* Result */}
                    <div
                      className="h-8 w-8 rounded-sm flex items-center justify-center flex-shrink-0 text-white font-extrabold text-[11px]"
                      style={{
                        backgroundColor: match.result === 'W' ? 'rgba(2, 137, 36, 0.1)' : 'rgba(137, 2, 2, 0.1)',
                      }}
                    >
                      <span style={{ color: match.resultColor }}>{match.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Padding */}
          <div className="h-2" />
        </div>

        {/* Bottom Navigation - Fixed */}
        <div
          className="absolute bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-white border-t border-[#e8e8e8]"
          style={{ height: `${NAV_HEIGHT}px` }}
        >
          {[
            { icon: '🏠', label: 'Home', active: true },
            { icon: '🏆', label: 'Tournaments', active: false },
            { icon: '👥', label: 'Players', active: false },
            { icon: '📊', label: 'Leaderboard', active: false },
            { icon: '👤', label: 'Account', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 hover:bg-[#f6f9f6] transition-colors active:bg-[#ecf0ec]"
            >
              <span className="text-[18px]">{item.icon}</span>
              <p
                className={`text-[8px] font-semibold ${
                  item.active ? 'text-[#262626]' : 'text-[#a6a6a6]'
                }`}
              >
                {item.label}
              </p>
            </button>
          ))}
        </div>

        {/* iOS Home Indicator */}
        <div className="absolute bottom-0 left-0 right-0 bg-white h-[8px] flex justify-center pt-1 border-t border-[#e8e8e8]">
          <div className="h-1 w-28 bg-[#1f1f1f] rounded-full" />
        </div>
      </div>
    </div>
  );
}
