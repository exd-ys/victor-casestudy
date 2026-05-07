"use client";

import { useState } from "react";

// ── Light mode assets (node 1608:3097) ─────────────────────────────────────────
const imgBell          = "https://www.figma.com/api/mcp/asset/a35200ac-cb5a-4d2b-a4da-015b4517f1e8";
const imgMapPin        = "https://www.figma.com/api/mcp/asset/eeb043c8-62da-4940-b314-c56639a43804";
const imgDollar        = "https://www.figma.com/api/mcp/asset/0b92460c-39db-4ae4-8c59-26b1b268cdbc";
const imgShuffle       = "https://www.figma.com/api/mcp/asset/9cca4ecb-28d9-4ce7-9dac-fd19de3fb1db";
const imgCalDot        = "https://www.figma.com/api/mcp/asset/29d71236-ee2e-4ddd-b8f3-16abd2e21f8a";
const imgCalCheck      = "https://www.figma.com/api/mcp/asset/91c55797-5249-4184-8920-71afe5bba791";
const imgUsers         = "https://www.figma.com/api/mcp/asset/9b5d6c92-e955-4077-af9c-cdfe67b6fe1d";
const imgSlidersH      = "https://www.figma.com/api/mcp/asset/21653f6a-ea11-479a-bbfe-1665c0c7a21c";
const imgNavHome       = "https://www.figma.com/api/mcp/asset/04a5c2ee-179e-40a3-bdf0-b745225a5397";
const imgNavTrophy     = "https://www.figma.com/api/mcp/asset/ec5abbe2-3c10-4cab-88df-41d7633d28fc";
const imgNavPlayers    = "https://www.figma.com/api/mcp/asset/fdb922ae-6424-4ac8-9a85-6298b6b22ffd";
const imgNavRanking    = "https://www.figma.com/api/mcp/asset/3d8f6868-830f-429d-9759-d6fda5a883b1";
const imgNavAccount    = "https://www.figma.com/api/mcp/asset/a2cd77b2-e2af-4567-a22f-2f652b21b24c";
const imgPlus          = "https://www.figma.com/api/mcp/asset/dc4b5241-a7a2-43a8-ab78-fa6c0a9ae1da";

// ── Dark mode assets (node 1691:494) ───────────────────────────────────────────
const imgDarkBell       = "https://www.figma.com/api/mcp/asset/44e7cdd7-0aec-4316-9da8-9a538c9a4d7e";
const imgDarkMapPin     = "https://www.figma.com/api/mcp/asset/1de4bda6-1377-41f3-8c3f-096735020215";
const imgDarkDollar     = "https://www.figma.com/api/mcp/asset/850cde74-61b3-443b-83b6-066ac093c136";
const imgDarkShuffle    = "https://www.figma.com/api/mcp/asset/affa14fe-c48d-4921-a57e-fcc55698afae";
const imgDarkCalDot     = "https://www.figma.com/api/mcp/asset/881aaf4e-0d00-4477-ab24-0cbd5f851301";
const imgDarkCalCheck   = "https://www.figma.com/api/mcp/asset/547153c3-6dd8-490d-8fc8-16a7ef0b584e";
const imgDarkUsers      = "https://www.figma.com/api/mcp/asset/24bc6529-85ad-481a-8d56-656b3be687fb";
const imgDarkSlidersH   = "https://www.figma.com/api/mcp/asset/3e3a1fac-b0a7-46ee-b032-cc567fb41763";
const imgDarkNavHome    = "https://www.figma.com/api/mcp/asset/b482291a-b558-4798-a9c9-629de651f8c4";
const imgDarkNavTrophy  = "https://www.figma.com/api/mcp/asset/3d925caf-08ce-4b9f-bf54-94a470aef779";
const imgDarkNavPlayers = "https://www.figma.com/api/mcp/asset/7c4052a5-7fba-4245-9ef5-bf2a8a966553";
const imgDarkNavRanking = "https://www.figma.com/api/mcp/asset/ad836bbf-75d4-4f41-ba54-0be95945e822";
const imgDarkNavAccount = "https://www.figma.com/api/mcp/asset/67f3bc11-9d67-4833-a108-4f6398f1c40a";
const imgDarkPlus       = "https://www.figma.com/api/mcp/asset/4ac7dcdf-5a40-47c4-8cb0-75ec718d8d1e";

// ── iOS status bar inline SVGs ─────────────────────────────────────────────────
function SignalIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill={color}>
      <rect x="0" y="9" width="3" height="3" rx="0.5" />
      <rect x="5" y="6" width="3" height="6" rx="0.5" />
      <rect x="10" y="3" width="3" height="9" rx="0.5" />
      <rect x="15" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

function WifiIcon({ color }: { color: string }) {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      <circle cx="8.5" cy="10.5" r="1.5" fill={color} />
      <path d="M4.8 7.2a5.2 5.2 0 0 1 7.4 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1.5 3.8a9.8 9.8 0 0 1 14 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BatteryIcon({ color }: { color: string }) {
  return (
    <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
      <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke={color} strokeOpacity="0.4" />
      <rect x="2" y="2" width="15" height="9" rx="2" fill={color} />
      <path d="M24 4.5v4a2 2 0 0 0 0-4Z" fill={color} fillOpacity="0.4" />
    </svg>
  );
}

// ── Data types ─────────────────────────────────────────────────────────────────
type Badge = { label: string; lightBg: string; lightColor: string; darkBg: string; darkColor: string };
type DetailItem = { icon: "dollar" | "shuffle" | "calDot" | "calCheck"; label: string; value: string };
type Tournament = {
  badges: Badge[];
  name: string;
  format: string;
  prizePool: string;
  organizerInitials: string;
  organizerName: string;
  details: DetailItem[][];
  progressWidth: string;
  playersText: string;
};

const tournaments: Tournament[] = [
  {
    badges: [
      { label: "Tier 4",  lightBg: "#ffedd2", lightColor: "#c47800", darkBg: "#1c1405", darkColor: "#e8a020" },
      { label: "Open",    lightBg: "#d7ffdf", lightColor: "#006115", darkBg: "#0e2115", darkColor: "#35df5a" },
    ],
    name: "PERTH BOX LEAGUE 49", format: "Knockout · Male singles",
    prizePool: "$40", organizerInitials: "MR", organizerName: "Marcus Reid",
    details: [
      [{ icon: "dollar",   label: "Entry fee", value: "$40"      },
       { icon: "shuffle",  label: "Format",    value: "Monthly"  }],
      [{ icon: "calDot",   label: "Closes",    value: "Apr 29"   },
       { icon: "calCheck", label: "Starts",    value: "March 20" }],
    ],
    progressWidth: "55%", playersText: "15/20 Players",
  },
  {
    badges: [
      { label: "Tier 3",  lightBg: "#dbf8ff", lightColor: "#005a6e", darkBg: "#06161c", darkColor: "#5bc8de" },
      { label: "Open",    lightBg: "#d7ffdf", lightColor: "#006115", darkBg: "#0e2115", darkColor: "#35df5a" },
    ],
    name: "SATURDAY KNOCKOUT SLAM", format: "Round robin · Mixed doubles",
    prizePool: "$300", organizerInitials: "OT", organizerName: "Oliver Tranzo",
    details: [
      [{ icon: "dollar",  label: "Entry fee", value: "$40"       },
       { icon: "shuffle", label: "Format",    value: "Box League"}],
      [{ icon: "calDot",  label: "Closes",    value: "Apr 29"   }],
    ],
    progressWidth: "55%", playersText: "15/20 Players",
  },
  {
    badges: [
      { label: "Tier 4",       lightBg: "#ffedd2", lightColor: "#c47800", darkBg: "#1c1405", darkColor: "#e8a020" },
      { label: "Closing Soon", lightBg: "#fff4ee", lightColor: "#c74600", darkBg: "#1f1205", darkColor: "#f07040" },
      { label: "2 spots left", lightBg: "#d7ffdf", lightColor: "#006115", darkBg: "#0e2115", darkColor: "#029f24" },
    ],
    name: "PERTH BOX LEAGUE 49", format: "Knockout · Male singles",
    prizePool: "$50", organizerInitials: "MR", organizerName: "Marcus Reid",
    details: [
      [{ icon: "dollar",   label: "Entry fee", value: "$40"       },
       { icon: "shuffle",  label: "Format",    value: "Box League"}],
      [{ icon: "calDot",   label: "Closes",    value: "Apr 29"    },
       { icon: "calCheck", label: "Starts",    value: "March 20"  }],
    ],
    progressWidth: "55%", playersText: "15/20 Players",
  },
];

// ── Theme (colors that differ between light and dark) ──────────────────────────
function buildTheme(dark: boolean) {
  return {
    timeText:           dark ? "#ffffff"  : "#262626",
    statusIconColor:    dark ? "#ffffff"  : "#262626",
    locationText:       dark ? "#9aaaa0"  : "#526058",
    titleText:          dark ? "#ddeede"  : "#262626",
    subText:            dark ? "#a3b1a8"  : "#6a6a6a",
    countBg:            dark ? "#1f2421"  : "#262626",
    countText:          dark ? "#ddeede"  : "#262626",
    filterBg:           dark ? "#1f2421"  : "#ecf0ec",
    filterActiveBg:     dark ? "#2c3430"  : "#ffffff",
    filterActiveText:   dark ? "#ddeede"  : "#262626",
    filterInactiveText: dark ? "#566a5d"  : "#505050",
    filterRadius:       dark ? "4px"      : "8px",
    cardBg:             dark ? "#161918"  : "#ffffff",
    tourneyName:        dark ? "#ddeede"  : "#262626",
    divider:            dark ? "#262626"  : "#ecf0ec",
    iconBg:             dark ? "#1f2421"  : "#ecf0ec",
    progressTrack:      dark ? "#1f2421"  : "#f0f4f0",
    progressFill:       dark ? "#e2e2e2"  : "#202c23",
    playerCount:        dark ? "#ffffff"  : "#262626",
    viewBg:             dark ? "#1f2421"  : "#ecf0ec",
    viewText:           dark ? "#8fa89a"  : "#202c23",
    joinBg:             dark ? "#029f24"  : "#35df5a",
    joinText:           "#0d1a10",
    navBg:              dark ? "#161918"  : "#ffffff",
    navIndicator:       dark ? "#ffffff"  : "#262626",
    navActive:          dark ? "#ffffff"  : "#262626",
    navInactive:        dark ? "#4f5e52"  : "#a5a5a5",
    fabBg:              dark ? "#029f24"  : "#35df5a",
    iosIndicator:       dark ? "#ffffff"  : "#1f1f1f",
  };
}

// ── Asset map (images that differ between light and dark) ──────────────────────
function buildAssets(dark: boolean) {
  return {
    bell:       dark ? imgDarkBell       : imgBell,
    mapPin:     dark ? imgDarkMapPin     : imgMapPin,
    dollar:     dark ? imgDarkDollar     : imgDollar,
    shuffle:    dark ? imgDarkShuffle    : imgShuffle,
    calDot:     dark ? imgDarkCalDot     : imgCalDot,
    calCheck:   dark ? imgDarkCalCheck   : imgCalCheck,
    users:      dark ? imgDarkUsers      : imgUsers,
    slidersH:   dark ? imgDarkSlidersH   : imgSlidersH,
    navHome:    dark ? imgDarkNavHome    : imgNavHome,
    navTrophy:  dark ? imgDarkNavTrophy  : imgNavTrophy,
    navPlayers: dark ? imgDarkNavPlayers : imgNavPlayers,
    navRanking: dark ? imgDarkNavRanking : imgNavRanking,
    navAccount: dark ? imgDarkNavAccount : imgNavAccount,
    plus:       dark ? imgDarkPlus       : imgPlus,
  };
}

// ── Tournament card ────────────────────────────────────────────────────────────
type Assets = ReturnType<typeof buildAssets>;

function TournamentCard({ t, dark, c, a }: {
  t: Tournament;
  dark: boolean;
  c: ReturnType<typeof buildTheme>;
  a: Assets;
}) {
  const iconMap: Record<DetailItem["icon"], string> = {
    dollar:   a.dollar,
    shuffle:  a.shuffle,
    calDot:   a.calDot,
    calCheck: a.calCheck,
  };

  return (
    <div className="rounded-[8px] p-4 flex flex-col gap-6" style={{ background: c.cardBg }}>
      {/* Header row */}
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 flex-wrap">
              {t.badges.map((b) => (
                <span
                  key={b.label}
                  className="px-2 py-1 rounded-full text-[10px] font-medium leading-[14px] tracking-[0.3px] whitespace-nowrap"
                  style={{ background: dark ? b.darkBg : b.lightBg, color: dark ? b.darkColor : b.lightColor, fontFamily: "Inter, sans-serif" }}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-medium tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Oswald, sans-serif", color: c.tourneyName }}>
                {t.name}
              </p>
              <p className="text-[10px] font-normal tracking-[0.3px] leading-none" style={{ fontFamily: "Manrope, sans-serif", color: c.subText }}>
                {t.format}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end leading-none">
            <p className="text-[20px] font-extrabold tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif", color: c.tourneyName }}>
              {t.prizePool}
            </p>
            <p className="text-[10px] font-normal tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", color: c.subText }}>
              PRIZE POOL
            </p>
          </div>
        </div>

        {/* Organizer */}
        <div className="flex gap-[6px] items-center">
          <div className="size-[20px] rounded-full flex items-center justify-center overflow-hidden shrink-0" style={{ background: "#202c23" }}>
            <span className="text-[6px] font-extrabold tracking-[0.15px] leading-none" style={{ fontFamily: "Sora, sans-serif", color: dark ? "#e2ede3" : "#f6f9f6" }}>
              {t.organizerInitials}
            </span>
          </div>
          <p className="text-[12px] font-normal tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", color: c.subText }}>
            {t.organizerName}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full shrink-0" style={{ background: c.divider }} />

      {/* Detail grid */}
      <div className="flex flex-col gap-4">
        {t.details.map((row, ri) => (
          <div key={ri} className="flex gap-4">
            {row.map((item) => (
              <div key={item.label} className="flex flex-1 gap-2 items-center min-w-0">
                <div className="size-[36px] rounded-[4px] flex items-center justify-center shrink-0" style={{ background: c.iconBg }}>
                  <img alt="" src={iconMap[item.icon]} className="size-4 object-contain" />
                </div>
                <div className="flex flex-col gap-[6px] leading-none">
                  <p className="text-[10px] font-normal tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", color: c.subText }}>
                    {item.label}
                  </p>
                  <p className="text-[12px] font-extrabold tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif", color: c.tourneyName }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="flex gap-2 items-center">
        <img alt="" src={a.users} className="size-3 shrink-0 object-contain" />
        <div className="flex-1 h-[6px] rounded-full overflow-hidden" style={{ background: c.progressTrack }}>
          <div className="h-full rounded-full" style={{ width: t.progressWidth, background: c.progressFill }} />
        </div>
        <p className="text-[10px] tracking-[0.3px] whitespace-nowrap leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>
          <span className="font-bold" style={{ color: c.playerCount }}>{t.playersText.split("/")[0]}</span>
          <span className="font-normal" style={{ color: c.subText }}>/{t.playersText.split("/")[1]}</span>
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button className="flex-1 py-3 rounded-full flex items-center justify-center" style={{ background: c.viewBg }}>
          <span className="text-[12px] font-semibold tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", color: c.viewText }}>
            View
          </span>
        </button>
        <button className="flex-1 py-3 rounded-full flex items-center justify-center" style={{ background: c.joinBg }}>
          <span className="text-[12px] font-semibold tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", color: c.joinText }}>
            Join
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function ViictorTournamentPrototype() {
  const [dark, setDark] = useState(false);
  const c = buildTheme(dark);
  const a = buildAssets(dark);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Dark mode toggle */}
      <button
        onClick={() => setDark(d => !d)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all"
        style={{ background: dark ? "#161918" : "#f4f4f4", borderColor: dark ? "#35df5a" : "#d1d5db", color: dark ? "#e8ece8" : "#262626" }}
      >
        <div className="relative w-8 h-4 rounded-full transition-colors" style={{ background: dark ? "#35df5a" : "#d1d5db" }}>
          <div className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all" style={{ left: dark ? "18px" : "2px" }} />
        </div>
        <span className="text-[12px] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Dark Mode</span>
      </button>

      {/* Phone frame */}
      <div
        className="relative flex flex-col overflow-hidden transition-all duration-300"
        style={{
          width: 360, height: 720, borderRadius: 40,
          border: dark ? "1px solid #2a2e2b" : "1px solid #e5e7eb",
          background: dark
            ? "linear-gradient(to bottom, #0f100f, #161918)"
            : "linear-gradient(to bottom, #ffffff, #e8f5ed)",
        }}
      >
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {dark && (
            <img alt="" className="absolute w-full h-full object-cover opacity-60" src="/images/bg-darkmode.png" />
          )}
        </div>

        {/* Status bar */}
        <div className="relative flex items-center justify-between px-6 py-4 shrink-0">
          <p className="text-[17px] font-semibold tracking-[-0.4px]" style={{ fontFamily: "SF Pro Text, sans-serif", color: c.timeText }}>
            9:41
          </p>
          <div className="flex items-center gap-[6px]">
            <SignalIcon color={c.statusIconColor} />
            <WifiIcon color={c.statusIconColor} />
            <BatteryIcon color={c.statusIconColor} />
          </div>
        </div>

        {/* Header */}
        <div className="relative flex items-start justify-between px-3 py-3 shrink-0">
          <div className="flex flex-col gap-2">
            <div className="flex gap-[2px] items-center">
              <img alt="" src={a.mapPin} className="size-3 shrink-0 object-contain" />
              <p className="text-[12px] font-medium tracking-[0.3px] leading-[14px] whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif", color: c.locationText }}>
                Perth, WA
              </p>
            </div>
            <p className="text-[24px] font-medium tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Oswald, sans-serif", color: c.titleText }}>
              TOURNAMENTS
            </p>
          </div>
          <img alt="Notifications" src={a.bell} className="w-9 h-9 object-contain shrink-0" />
        </div>

        {/* Filter tabs */}
        <div className="relative px-3 pb-4 shrink-0">
          <div className="flex gap-2 p-1" style={{ background: c.filterBg, borderRadius: c.filterRadius }}>
            {["Entry Open", "Monthly", "Mine"].map((tab, i) => (
              <div
                key={tab}
                className="flex-1 flex items-center justify-center py-3"
                style={{
                  background: i === 0 ? c.filterActiveBg : c.filterBg,
                  borderRadius: c.filterRadius,
                }}
              >
                <span
                  className="text-[12px] font-semibold tracking-[0.3px] leading-none whitespace-nowrap"
                  style={{ fontFamily: "Inter, sans-serif", color: i === 0 ? c.filterActiveText : c.filterInactiveText }}
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Count row */}
        <div className="relative flex items-center justify-between px-3 pb-5 shrink-0">
          <div className="flex gap-[6px] items-center">
            <div className="size-[20px] rounded-[6px] flex items-center justify-center shrink-0" style={{ background: c.countBg }}>
              <span className="text-white text-[12px] font-medium leading-none tracking-[0.3px]" style={{ fontFamily: "Oswald, sans-serif" }}>
                12
              </span>
            </div>
            <p className="text-[12px] font-medium tracking-[0.3px] leading-none whitespace-nowrap" style={{ fontFamily: "Oswald, sans-serif", color: c.countText }}>
              TOURNAMENTS NEAR YOU
            </p>
          </div>
          <img alt="" src={a.slidersH} className="size-5 object-contain shrink-0" />
        </div>

        {/* Scrollable cards */}
        <div className="relative flex-1 overflow-y-auto px-3 pb-4 flex flex-col gap-3" style={{ scrollbarWidth: "none" }}>
          {tournaments.map((t, i) => (
            <TournamentCard key={i} t={t} dark={dark} c={c} a={a} />
          ))}
        </div>

        {/* Bottom nav */}
        <div className="relative shrink-0 drop-shadow-[0px_-1px_17px_rgba(26,122,52,0.05)] rounded-t-[8px] transition-colors" style={{ background: c.navBg }}>
          {/* FAB */}
          <div
            className="absolute right-3 size-[56px] rounded-full flex items-center justify-center transition-colors"
            style={{ top: -68, background: c.fabBg, boxShadow: "0px 0px 6px rgba(22,105,38,0.1)" }}
          >
            <img alt="" src={a.plus} className="size-6 object-contain" />
          </div>

          <div className="flex items-stretch">
            {[
              { icon: a.navHome,    label: "Home",        active: false, iconW: 20, iconH: 20 },
              { icon: a.navTrophy,  label: "Tournaments", active: true,  iconW: 20, iconH: 20 },
              { icon: a.navPlayers, label: "Players",     active: false, iconW: 20, iconH: 20 },
              { icon: a.navRanking, label: "Leaderboard", active: false, iconW: 20, iconH: 20 },
              { icon: a.navAccount, label: "Account",     active: false, iconW: 20, iconH: 20 },
            ].map(({ icon, label, active, iconW, iconH }) => (
              <button key={label} className="relative flex flex-1 flex-col items-center justify-center gap-1 py-3">
                {active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[41px] h-1 rounded-b" style={{ background: c.navIndicator }} />
                )}
                <img src={icon} alt="" style={{ width: iconW, height: iconH }} className="object-contain" />
                <span className="text-[10px] tracking-[0.3px] leading-none font-semibold whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif", color: active ? c.navActive : c.navInactive }}>
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
