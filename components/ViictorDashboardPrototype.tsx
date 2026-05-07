'use client';

import { useState } from 'react';

// ── Light mode assets ──────────────────────────────────────────────────────────
const imgFrame8        = "https://www.figma.com/api/mcp/asset/ce37f318-1b29-4fe0-9757-129f4a8815d6";
const imgImage42       = "/images/badge-tier.png";
const imgOutline       = "https://www.figma.com/api/mcp/asset/4b531337-af20-4952-8805-2c47d848db90";
const imgBatteryFill   = "https://www.figma.com/api/mcp/asset/34d95582-5453-4847-bf59-e96a8e7c46ff";
const imgWifi          = "https://www.figma.com/api/mcp/asset/bad4b303-05ed-4146-b6e2-dc769c09e8e2";
const imgSignal        = "https://www.figma.com/api/mcp/asset/de2b33fc-7a82-46bf-bb04-d36677439e54";
const imgMapPin        = "https://www.figma.com/api/mcp/asset/e5d5e8a7-1af3-413c-9f14-e9e0ae6e9bae";
const imgBell          = "https://www.figma.com/api/mcp/asset/80eb1388-8e95-411a-8806-14424e7e0515";
const imgArrowUp       = "https://www.figma.com/api/mcp/asset/77ad97e4-af0f-422e-b9da-8215c5dd56e7";
const imgArrowNE       = "https://www.figma.com/api/mcp/asset/4564997f-de2b-4816-9ab8-4b7af906bd22";
const imgDollar        = "https://www.figma.com/api/mcp/asset/5c2ac6ae-95ce-4015-9003-114fcacdfad7";
const imgShuffle       = "https://www.figma.com/api/mcp/asset/c6b71ff7-9de4-46a9-945b-93dcf88821b0";
const imgCalDot        = "https://www.figma.com/api/mcp/asset/183363f6-89c8-4d0d-8603-3a621e9cdef3";
const imgCalCheck      = "https://www.figma.com/api/mcp/asset/4bc915dc-e46c-4f75-9b76-292a17f4745f";
const imgUsers         = "https://www.figma.com/api/mcp/asset/db2dfac0-11cb-4189-b63a-c6d094d03c6f";
const imgNavHome       = "https://www.figma.com/api/mcp/asset/eddf6b74-92cf-41fe-830d-e4e4955e5e95";
const imgNavTrophy     = "https://www.figma.com/api/mcp/asset/9c930b46-ff76-4cb5-9e98-680989219244";
const imgNavPlayers    = "https://www.figma.com/api/mcp/asset/c8c066a7-a650-4829-9191-70be5856d689";
const imgNavRanking    = "https://www.figma.com/api/mcp/asset/f285d5e9-6716-43a1-944b-fab8ebdcea5a";
const imgNavAccount    = "https://www.figma.com/api/mcp/asset/68bd1a5f-f9ea-45a4-a2b8-2726ef48d6d5";
const imgH2HArrow      = "https://www.figma.com/api/mcp/asset/7469933c-4e20-4003-abb2-4120c336d3fb";
const imgTourneyArrow  = "https://www.figma.com/api/mcp/asset/f8085623-ae1a-459e-9ce8-daa3d3aa5cd6";
const imgBg            = "https://www.figma.com/api/mcp/asset/90ded153-0367-493f-a1a2-44301cbdf2e2";
const imgH2HBg         = "/images/head2head-bg.png";
const imgTourneyBg     = "/images/jointourna-bg.png";

// ── Dark mode assets ───────────────────────────────────────────────────────────
const imgDarkFrame8       = "https://www.figma.com/api/mcp/asset/a5f022c8-5e12-4fca-b9f8-2ba81833e4c4";
const imgDarkOutline      = "https://www.figma.com/api/mcp/asset/8c97231b-6276-4e5e-906b-655b5a88b8bc";
const imgDarkBatteryEnd   = "https://www.figma.com/api/mcp/asset/e91d53e1-27a2-4917-a0fc-0cd6a20ec4e3";
const imgDarkBatteryFill  = "https://www.figma.com/api/mcp/asset/b024d791-0d20-472b-b6f8-1c1ad0ed60c2";
const imgDarkWifi         = "https://www.figma.com/api/mcp/asset/d22a2ae8-90fa-4550-9e88-7ae7bd0f888d";
const imgDarkSignal       = "https://www.figma.com/api/mcp/asset/64c8ea43-a38c-4f99-8472-adca8f6093f2";
const imgDarkMapPin       = "https://www.figma.com/api/mcp/asset/9cc03152-a3c5-4f69-a66c-a658e2145e23";
const imgDarkBell         = "https://www.figma.com/api/mcp/asset/0934be2f-45b1-48e7-a96d-896a4ce845bb";
const imgDarkArrowUp      = "https://www.figma.com/api/mcp/asset/bc5e2583-a556-4778-9fdf-d703c7c30760";
const imgDarkArrowNE      = "https://www.figma.com/api/mcp/asset/e145aadd-5e8e-4491-ac48-44975ad5fb74";
const imgDarkDollar       = "https://www.figma.com/api/mcp/asset/1fdc5c13-c6e1-4308-9577-4ee8660679a3";
const imgDarkShuffle      = "https://www.figma.com/api/mcp/asset/324d0885-e919-4e16-8d7a-dc99fc23a326";
const imgDarkCalDot       = "https://www.figma.com/api/mcp/asset/1e2094df-c157-4e46-842c-6d8f0a946bda";
const imgDarkCalCheck     = "https://www.figma.com/api/mcp/asset/b3bc02a1-87b9-4cac-9b08-bd5b3bcda152";
const imgDarkUsers        = "https://www.figma.com/api/mcp/asset/d43efd10-596d-4adb-8fe6-7586dfd0a047";
const imgDarkNavHome      = "https://www.figma.com/api/mcp/asset/3fe80f28-509a-42ee-9d6b-4cb10640b5b8";
const imgDarkNavTrophy    = "https://www.figma.com/api/mcp/asset/99925dc2-3055-4e41-a515-50f4925dcf39";
const imgDarkNavPlayers   = "https://www.figma.com/api/mcp/asset/94318e33-aed0-4993-acfa-2c320e6b90e4";
const imgDarkNavRanking   = "https://www.figma.com/api/mcp/asset/f12deb59-68dd-4580-a968-d369dfa99ab1";
const imgDarkNavAccount   = "https://www.figma.com/api/mcp/asset/b5bd1b45-3dff-4935-8eca-06ae66d241e4";
const imgDarkH2HArrow     = "https://www.figma.com/api/mcp/asset/a265f9a7-f7f6-4e22-b06b-5be88a4eae03";
const imgDarkTourneyArrow = "https://www.figma.com/api/mcp/asset/0af6ea5a-25cf-49ae-a1ed-13accecc9082";

const matches = [
  { id: 1, name: 'Carlos Mendez',  type: 'Head 2 Head',       time: '3 days ago',   result: 'W', initials: 'CM' },
  { id: 2, name: 'Arnold Benitez', type: 'Monthly Knockout',  time: '6 days ago',   result: 'L', initials: 'AB' },
  { id: 3, name: 'Diego Santos',   type: 'Monthly Knockout',  time: '2 weeks ago',  result: 'L', initials: 'DS' },
];

export default function ViictorDashboardPrototype() {
  const [challengeState, setChallengeState] = useState<'pending' | 'ignored' | 'accepted'>('pending');
  const [dark, setDark] = useState(false);

  // ── Theme tokens ─────────────────────────────────────────────────────────────
  const c = {
    bg:              dark ? 'linear-gradient(to bottom, #0f100f, #161918)' : 'linear-gradient(to bottom, #ffffff, #e8f5ed)',
    timeText:        dark ? '#ffffff' : '#262626',
    nameText:        dark ? '#ffffff' : '#0d1a10',
    locationText:    dark ? '#ffffff' : '#526058',
    rankLabel:       dark ? '#a3b1a8' : '#6a6a6a',
    rankHash:        dark ? '#a3b1a8' : '#6a6a6a',
    rankNum:         dark ? '#ffffff' : '#0d1a10',
    rankMeta:        dark ? '#a3b1a8' : '#6a6a6a',
    statsBorder:     dark ? '#262626' : '#ecf0ec',
    statsDivider:    dark ? '#262626' : '#ecf0ec',
    statsVal:        dark ? '#ffffff' : '#0d1a10',
    statsLabel:      dark ? '#a3b1a8' : '#6a6a6a',
    h2hBg:           dark ? '#029f24'  : '#35df5a',
    sectionHead:     dark ? '#e8ece8'  : '#262626',
    seeAll:          dark ? '#a3b1a8'  : '#757575',
    challengeCard:   dark ? '#161918'  : '#ffffff',
    challengeName:   dark ? '#e8ece8'  : '#262626',
    challengeMeta:   dark ? '#a3b1a8'  : '#6a6a6a',
    ignoreBg:        dark ? '#2a2b2a'  : '#ecf0ec',
    ignoreText:      dark ? '#a2bdae'  : '#202c23',
    acceptBg:        dark ? '#029f24'  : '#35df5a',
    acceptText:      dark ? '#000000'  : '#0d1a10',
    tourneyCard:     dark ? '#161918'  : '#ffffff',
    tier4Bg:         dark ? '#1c1405'  : '#ffedd2',
    tier4Text:       dark ? '#e8a020'  : '#c47800',
    openBg:          dark ? '#0e2115'  : '#d7ffdf',
    openText:        dark ? '#35df5a'  : '#006115',
    tourneyName:     dark ? '#ddeede'  : '#262626',
    tourneyFmt:      dark ? '#a3b1a8'  : '#6a6a6a',
    prizeAmt:        dark ? '#ddeede'  : '#262626',
    prizeLabel:      dark ? '#a3b1a8'  : '#6a6a6a',
    organizer:       dark ? '#a3b1a8'  : '#6a6a6a',
    divider:         dark ? '#262626'  : '#ecf0ec',
    detailIconBg:    dark ? '#1f2421'  : '#ecf0ec',
    detailLabel:     dark ? '#a3b1a8'  : '#6a6a6a',
    detailVal:       dark ? '#ddeede'  : '#262626',
    progressTrack:   dark ? '#1f2421'  : '#f0f4f0',
    progressFill:    dark ? '#e2e2e2'  : '#202c23',
    playerCount:     dark ? '#ffffff'  : '#262626',
    playerSub:       dark ? '#a3b1a8'  : '#6a6a6a',
    viewBg:          dark ? '#1f2421'  : '#ecf0ec',
    viewText:        dark ? '#8fa89a'  : '#202c23',
    joinBg:          dark ? '#029f24'  : '#35df5a',
    joinText:        dark ? '#0d1a10'  : '#0d1a10',
    matchName:       dark ? '#e8ece8'  : '#262626',
    matchMeta:       dark ? '#a3b1a8'  : '#6a6a6a',
    navBg:           dark ? '#161918'  : '#ffffff',
    navIndicator:    dark ? '#ffffff'  : '#262626',
    navActive:       dark ? '#ffffff'  : '#262626',
    navInactive:     dark ? '#4f5e52'  : '#a6a6a6',
    iosIndicator:    dark ? '#ffffff'  : '#1f1f1f',
  };

  // ── Asset switching ──────────────────────────────────────────────────────────
  const a = {
    frame8:      dark ? imgDarkFrame8      : imgFrame8,
    outline:     dark ? imgDarkOutline     : imgOutline,
    batteryFill: dark ? imgDarkBatteryFill : imgBatteryFill,
    wifi:        dark ? imgDarkWifi        : imgWifi,
    signal:      dark ? imgDarkSignal      : imgSignal,
    mapPin:      dark ? imgDarkMapPin      : imgMapPin,
    bell:        dark ? imgDarkBell        : imgBell,
    arrowUp:     dark ? imgDarkArrowUp     : imgArrowUp,
    arrowNE:     dark ? imgDarkArrowNE     : imgArrowNE,
    dollar:      dark ? imgDarkDollar      : imgDollar,
    shuffle:     dark ? imgDarkShuffle     : imgShuffle,
    calDot:      dark ? imgDarkCalDot      : imgCalDot,
    calCheck:    dark ? imgDarkCalCheck    : imgCalCheck,
    users:       dark ? imgDarkUsers       : imgUsers,
    navHome:     dark ? imgDarkNavHome     : imgNavHome,
    navTrophy:   dark ? imgDarkNavTrophy   : imgNavTrophy,
    navPlayers:  dark ? imgDarkNavPlayers  : imgNavPlayers,
    navRanking:  dark ? imgDarkNavRanking  : imgNavRanking,
    navAccount:  dark ? imgDarkNavAccount  : imgNavAccount,
    h2hArrow:    dark ? imgDarkH2HArrow    : imgH2HArrow,
    tourneyArrow:dark ? imgDarkTourneyArrow: imgTourneyArrow,
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Dark mode toggle */}
      <button
        onClick={() => setDark(d => !d)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all"
        style={{
          background:   dark ? '#161918' : '#f4f4f4',
          borderColor:  dark ? '#35df5a' : '#d1d5db',
          color:        dark ? '#e8ece8' : '#262626',
        }}
      >
        <div
          className="relative w-8 h-4 rounded-full transition-colors"
          style={{ background: dark ? '#35df5a' : '#d1d5db' }}
        >
          <div
            className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all"
            style={{ left: dark ? '18px' : '2px' }}
          />
        </div>
        <span className="text-[12px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
          Dark Mode
        </span>
      </button>

      {/* Phone frame */}
      <div
        className="relative overflow-hidden flex flex-col shadow-xl transition-all duration-300"
        style={{ width: 360, height: 720, borderRadius: 40, border: dark ? '1px solid #2a2e2b' : '1px solid #e5e7eb', background: c.bg }}
      >
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            alt=""
            className="absolute w-full h-full object-cover"
            src={dark ? "/images/bg-darkmode.png" : imgBg}
            style={{ opacity: dark ? 1 : 0.2 }}
          />
        </div>

        {/* Status Bar */}
        <div className="relative shrink-0 flex items-center justify-between px-6 py-4">
          <span className="text-[17px] font-semibold tracking-[-0.4px]" style={{ fontFamily: 'SF Pro Text, system-ui, sans-serif', color: c.timeText }}>
            9:41
          </span>
          <div className="flex items-center gap-2">
            <img src={a.signal}      alt="" className="h-3 w-[18px] object-contain" />
            <img src={a.wifi}        alt="" className="h-3 w-[17px] object-contain" />
            <div className="relative h-[13px] w-[27px]">
              <img src={a.outline}     alt="" className="absolute inset-0 w-full h-full object-contain" />
              <img src={a.batteryFill} alt="" className="absolute top-[2px] left-[2px] h-[9px] w-[15px] object-contain" />
              {dark && <img src={imgDarkBatteryEnd} alt="" className="absolute top-[4px] right-0 h-[4px] w-[1.4px] object-contain" />}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="relative shrink-0 flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <img src={a.frame8} alt="John Doe" className="absolute inset-0 w-[115%] h-[172%] object-cover -left-[6%] -top-[4%]" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-extrabold text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.nameText }}>
                John Doe
              </p>
              <div className="flex items-center gap-0.5">
                <img src={a.mapPin} alt="" className="w-3 h-3 object-contain shrink-0" />
                <p className="font-medium text-[10px] leading-[14px] tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.locationText }}>
                  Perth, WA
                </p>
              </div>
            </div>
          </div>
          <img src={a.bell} alt="Notifications" className="w-9 h-9 object-contain shrink-0" />
        </div>

        {/* Scrollable Content */}
        <div className="relative flex-1 overflow-y-auto px-3 pb-4 space-y-7" style={{ scrollbarWidth: 'none' }}>

          {/* Ranking + Stats + Action Cards */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="drop-shadow-[0px_0px_6px_rgba(22,105,38,0.05)] flex flex-col gap-4">
              {/* Rank row */}
              <div className="flex items-center justify-between pr-2">
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.rankLabel }}>
                    Tier 4 · Ranking
                  </p>
                  <div className="flex items-end gap-2">
                    <div className="flex items-start">
                      <span className="mt-2 font-medium text-[32px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif', color: c.rankHash }}>#</span>
                      <span className="font-bold text-[64px] leading-none tracking-[0.3px]"        style={{ fontFamily: 'Oswald, sans-serif', color: c.rankNum }}>327</span>
                    </div>
                    <div className="flex flex-col gap-0.5 pb-2">
                      <div className="flex items-center gap-0.5">
                        <img src={a.arrowUp} alt="" className="w-3 h-3 object-contain" />
                        <span className="font-normal text-[10px] leading-[1.4] text-[#35df5a] tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif' }}>12 places</span>
                      </div>
                      <p className="font-normal text-[10px] leading-[1.4] tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.rankMeta }}>out of 500</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-[80px] h-[72px] shrink-0">
                  <img src={imgImage42} alt="Tier 4 badge" className="absolute inset-0 w-full h-full object-contain" />
                </div>
              </div>

              {/* Stats bar */}
              <div className="flex border-t border-b" style={{ borderColor: c.statsBorder }}>
                <div className="flex-1 flex flex-col gap-3 py-3 px-3">
                  <p className="font-medium text-[16px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif', color: c.statsVal }}>77%</p>
                  <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif',   color: c.statsLabel }}>Win rate</p>
                </div>
                <div className="w-px self-stretch" style={{ background: c.statsDivider }} />
                <div className="flex-1 flex flex-col gap-3 py-3 px-3">
                  <p className="font-medium text-[16px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif', color: c.statsVal }}>230</p>
                  <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif',   color: c.statsLabel }}>Points</p>
                </div>
                <div className="w-px self-stretch" style={{ background: c.statsDivider }} />
                <div className="flex-1 flex flex-col gap-3 py-3 px-3">
                  <p className="font-medium text-[16px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif', color: c.statsVal }}>$250</p>
                  <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif',   color: c.statsLabel }}>Earnings</p>
                </div>
              </div>
            </div>

            {/* Action cards */}
            <div className="flex gap-2">
              <button
                className="relative flex-1 rounded-[6px] overflow-hidden flex flex-col justify-end p-4 min-h-0 active:scale-95 transition-transform"
                style={{ background: c.h2hBg }}
              >
                <img src={imgH2HBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
                <div className="relative flex items-start justify-between w-full">
                  <p className="font-bold text-[12px] leading-[1.2] text-[#0d1a10] tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif' }}>PLAY HEAD 2 HEAD</p>
                  <img src={a.h2hArrow} alt="" className="w-3.5 h-3.5 object-contain shrink-0" />
                </div>
              </button>
              <button
                className="relative flex-1 rounded-[6px] overflow-hidden flex flex-col justify-end p-4 min-h-0 active:scale-95 transition-transform"
                style={{ background: '#262626' }}
              >
                <img src={imgTourneyBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
                <div className="relative flex items-start justify-between w-full">
                  <p className="font-bold text-[12px] leading-[1.2] text-[#f6f9f6] tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif' }}>JOIN TOURNAMENTS</p>
                  <img src={a.tourneyArrow} alt="" className="w-3.5 h-3.5 object-contain shrink-0" />
                </div>
              </button>
            </div>
          </div>

          {/* Incoming Challenges */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium text-[12px] leading-none tracking-[0.3px] uppercase" style={{ fontFamily: 'Oswald, sans-serif', color: c.sectionHead }}>
                Incoming Challenges
              </p>
              <p className="font-normal text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.seeAll }}>See all</p>
            </div>

            {challengeState === 'pending' && (
              <div className="rounded-[8px] p-4 drop-shadow-[0px_0px_6px_rgba(22,105,38,0.05)] space-y-6" style={{ background: c.challengeCard }}>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#202c23] flex items-center justify-center shrink-0">
                        <span className="font-extrabold text-[6px] text-[#f6f9f6] tracking-[0.15px]" style={{ fontFamily: 'Sora, sans-serif' }}>MR</span>
                      </div>
                      <p className="font-extrabold text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.challengeName }}>
                        <span className="font-bold">Marcus</span> challenged you
                      </p>
                    </div>
                    <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.challengeMeta }}>
                      Tier 4 · #320 · Expires in 22 hrs
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.challengeMeta }}>View details</p>
                    <img src={a.arrowNE} alt="" className="w-3 h-3 object-contain" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setChallengeState('ignored')}
                    className="flex-1 py-3 px-3 rounded-full font-semibold text-[12px] tracking-[0.3px] transition active:scale-95"
                    style={{ fontFamily: 'Inter, sans-serif', background: c.ignoreBg, color: c.ignoreText }}
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => setChallengeState('accepted')}
                    className="flex-1 py-3 px-3 rounded-full font-semibold text-[12px] tracking-[0.3px] transition active:scale-95"
                    style={{ fontFamily: 'Inter, sans-serif', background: c.acceptBg, color: c.acceptText }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            )}
            {challengeState === 'ignored' && (
              <div className="rounded-[8px] p-4 drop-shadow-[0px_0px_6px_rgba(22,105,38,0.05)] text-center" style={{ background: c.challengeCard }}>
                <p className="font-normal text-[12px]" style={{ fontFamily: 'Inter, sans-serif', color: c.challengeMeta }}>Challenge ignored.</p>
              </div>
            )}
            {challengeState === 'accepted' && (
              <div className="rounded-[8px] p-4 drop-shadow-[0px_0px_6px_rgba(22,105,38,0.05)] text-center" style={{ background: c.challengeCard }}>
                <p className="font-semibold text-[12px] text-[#35df5a]" style={{ fontFamily: 'Inter, sans-serif' }}>✓ Challenge accepted!</p>
              </div>
            )}
          </div>

          {/* Recommended Tournament */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium text-[12px] leading-none tracking-[0.3px] uppercase" style={{ fontFamily: 'Oswald, sans-serif', color: c.sectionHead }}>
                Recommended Tournament
              </p>
              <p className="font-normal text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.seeAll }}>See all</p>
            </div>
            <div className="rounded-[8px] p-4 space-y-6" style={{ background: c.tourneyCard }}>
              {/* Title row */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full leading-[14px] tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', background: c.tier4Bg, color: c.tier4Text }}>
                      Tier 4
                    </span>
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full leading-[14px] tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', background: c.openBg, color: c.openText }}>
                      Open
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-[16px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Oswald, sans-serif',  color: c.tourneyName }}>PERTH BOX LEAGUE 49</p>
                    <p className="font-normal text-[10px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.tourneyFmt }}>Knockout · Male singles</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-extrabold text-[20px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.prizeAmt }}>$40</p>
                  <p className="font-normal text-[10px] leading-none tracking-[0.3px]"   style={{ fontFamily: 'Inter, sans-serif',   color: c.prizeLabel }}>PRIZE POOL</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#202c23] flex items-center justify-center shrink-0">
                  <span className="font-extrabold text-[6px] text-[#f6f9f6] tracking-[0.15px]" style={{ fontFamily: 'Sora, sans-serif' }}>MR</span>
                </div>
                <p className="font-normal text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.organizer }}>Marcus Reid</p>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: c.divider }} />

              {/* Details grid */}
              <div className="flex flex-col gap-4">
                {[
                  [{ icon: a.dollar, label: 'Entry fee', value: '$40' }, { icon: a.shuffle, label: 'Format', value: 'Monthly' }],
                  [{ icon: a.calDot, label: 'Closes',    value: 'Apr 29' }, { icon: a.calCheck, label: 'Starts', value: 'March 20' }],
                ].map((row, ri) => (
                  <div key={ri} className="flex gap-4">
                    {row.map((item) => (
                      <div key={item.label} className="flex flex-1 items-center gap-2">
                        <div className="w-9 h-9 rounded flex items-center justify-center shrink-0" style={{ background: c.detailIconBg }}>
                          <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="font-normal text-[10px] leading-none tracking-[0.3px]"   style={{ fontFamily: 'Inter, sans-serif',   color: c.detailLabel }}>  {item.label}</p>
                          <p className="font-extrabold text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.detailVal }}>   {item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Player count */}
              <div className="flex items-center gap-2">
                <img src={a.users} alt="" className="w-3 h-3 object-contain shrink-0" />
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: c.progressTrack }}>
                  <div className="h-full rounded-full" style={{ width: '75%', background: c.progressFill }} />
                </div>
                <p className="text-[10px] tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <span className="font-bold"   style={{ color: c.playerCount }}>15</span>
                  <span className="font-normal" style={{ color: c.playerSub }}>/20 Players</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 py-3 px-6 rounded-full font-semibold text-[12px] tracking-[0.3px] transition active:scale-95" style={{ fontFamily: 'Inter, sans-serif', background: c.viewBg, color: c.viewText }}>
                  View
                </button>
                <button className="flex-1 py-3 px-3 rounded-full font-semibold text-[12px] tracking-[0.3px] transition active:scale-95" style={{ fontFamily: 'Inter, sans-serif', background: c.joinBg, color: c.joinText }}>
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Recent Matches */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium text-[12px] leading-none tracking-[0.3px] uppercase" style={{ fontFamily: 'Oswald, sans-serif', color: c.sectionHead }}>
                Recent Matches
              </p>
              <p className="font-normal text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Inter, sans-serif', color: c.seeAll }}>See all</p>
            </div>
            <div>
              {matches.map((match, idx) => (
                <div key={match.id}>
                  <div className="flex items-center gap-2 py-2">
                    <div className="w-9 h-9 rounded-full bg-[#202c23] flex items-center justify-center shrink-0">
                      <span className="font-extrabold text-[12px] text-[#f6f9f6] tracking-[0.3px]" style={{ fontFamily: 'Sora, sans-serif' }}>{match.initials}</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <p className="font-extrabold text-[12px] leading-none tracking-[0.3px]" style={{ fontFamily: 'Manrope, sans-serif', color: c.matchName }}>{match.name}</p>
                      <p className="font-normal text-[10px] leading-none tracking-[0.3px]"    style={{ fontFamily: 'Manrope, sans-serif', color: c.matchMeta }}>{match.type} · {match.time}</p>
                    </div>
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center shrink-0"
                      style={match.result === 'W'
                        ? { background: 'rgba(53,223,90,0.12)' }
                        : { background: 'rgba(200,60,60,0.12)' }
                      }
                    >
                      <span className="font-extrabold text-[12px]" style={{ fontFamily: 'Sora, sans-serif', color: match.result === 'W' ? '#35df5a' : '#e05555' }}>
                        {match.result}
                      </span>
                    </div>
                  </div>
                  {idx < matches.length - 1 && (
                    <div className="h-px w-full" style={{ background: c.divider }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="h-4" />
        </div>

        {/* Bottom Navigation */}
        <div className="relative shrink-0 drop-shadow-[0px_-1px_17px_rgba(26,122,52,0.05)] rounded-t-[8px] transition-colors" style={{ background: c.navBg }}>
          <div className="flex items-stretch">
            {[
              { icon: a.navHome,    label: 'Home',        active: true,  iconW: 28, iconH: 20 },
              { icon: a.navTrophy,  label: 'Tournaments', active: false, iconW: 20, iconH: 20 },
              { icon: a.navPlayers, label: 'Players',     active: false, iconW: 20, iconH: 20 },
              { icon: a.navRanking, label: 'Leaderboard', active: false, iconW: 20, iconH: 20 },
              { icon: a.navAccount, label: 'Account',     active: false, iconW: 20, iconH: 20 },
            ].map(({ icon, label, active, iconW, iconH }) => (
              <button key={label} className="relative flex flex-1 flex-col items-center justify-center gap-1 py-3">
                {active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[41px] h-1 rounded-b" style={{ background: c.navIndicator }} />
                )}
                <img src={icon} alt="" style={{ width: iconW, height: iconH }} className="object-contain" />
                <span className="text-[10px] tracking-[0.3px] leading-none font-semibold whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif', color: active ? c.navActive : c.navInactive }}>
                  {label}
                </span>
              </button>
            ))}
          </div>
          {/* iOS home indicator */}
          <div className="flex justify-center pb-2 pt-3">
            <div className="w-24 h-[5px] rounded-full transition-colors" style={{ background: c.iosIndicator }} />
          </div>
        </div>
      </div>
    </div>
  );
}
