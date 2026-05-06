"use client";

import Image from "next/image";
import {
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ThemeMode = "light" | "dark";
type NavMode = "hero" | "default" | "dark";

const problems = [
  ["Split Personality", "Headers, forms, and screen treatments changed from place to place, so the app felt less confident than the product behind it."],
  ["No Next Move", "The dashboard reported stats, but did not guide a player toward the match, challenge, or tournament that needed attention."],
  ["Harder Scanning", "Tournament details were present, but the layout did not make the choice feel quick or obvious."]
];

const solutionMoves = [
  ["Light where it matters", "The primary app surface becomes brighter because the real use case is outdoors, between games, often one-handed."],
  ["Green with restraint", "Brand color becomes a signal for rank, action, and live status instead of a blanket sports-app treatment."],
  ["Decisions first", "Rows, hierarchy, and bottom navigation are shaped around what players need to compare or do next."]
];

const comparisons = [
  {
    title: "Dashboard",
    before: "/images/old-victor-home.jpg",
    afterLight: "/images/new-victor-dashboard-light.png",
    afterDark: "/images/new-victor-dashboard-dark.png",
    beforeAlt: "Original Viictor dashboard screen",
    afterAlt: "Redesigned Viictor dashboard screen",
    beforeNotes: ["Stats carried equal weight.", "The next action had no home."],
    afterNotes: ["Ranking becomes the visual anchor.", "A next-action area gives the screen momentum."]
  },
  {
    title: "Tournament List",
    before: "/images/old-victor-tournament.jpg",
    afterLight: "/images/new-victor-tournament-light.png",
    afterDark: "/images/new-victor-tournament-dark.png",
    beforeAlt: "Original Viictor tournament screen",
    afterAlt: "Redesigned Viictor tournament list",
    beforeNotes: ["Entries were slower to compare.", "Prize, status, and timing did not guide choice."],
    afterNotes: ["Rows surface fee, date, status, and prize together.", "Filters make the list feel more intentional."]
  }
];

const progressSignals = [
  ["Coherence", "The redesigned screens now feel like one product language."],
  ["Momentum", "The first screen can point to the next useful action."],
  ["Scanability", "Tournament information is arranged for comparison, not decoration."]
];

const stillToTest = [
  "Do players accept more challenges?",
  "Do tournament entries become easier to complete?",
  "Do players return more often to check progress?",
  "Does the large ranking treatment motivate or discourage?"
];

export default function CaseStudy() {
  const root = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const [activeOutputTab, setActiveOutputTab] = useState(0);
  const [navMode, setNavMode] = useState<NavMode>("hero");

  const currentImages = useMemo(
    () =>
      comparisons.map((item) => ({
        ...item,
        after: theme === "light" ? item.afterLight : item.afterDark
      })),
    [theme]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // -- Initial states ---------------------------------------------
      gsap.set(".hero-drift", { opacity: 0, y: 20 });
      gsap.set(".drift-in", { opacity: 0, y: 18 });
      gsap.set(".overview-eyebrow", { opacity: 0, y: 10 });
      gsap.set(".overview-title", { opacity: 0, y: 14 });
      gsap.set(".overview-body", { opacity: 0, y: 22 });
      gsap.set(".overview-aside", { opacity: 0, y: 28, scale: 0.97 });
      gsap.set(".solution-header", { opacity: 0, y: 18 });
      gsap.set(".deck-reveal", { opacity: 0, y: 28 });
      gsap.set(".progress-left", { opacity: 0, y: 18 });
      gsap.set(".progress-cream", { opacity: 0, y: 18 });
      gsap.set(".progress-item", { opacity: 0, y: 10 });
      gsap.set(".score-fill", { scaleX: 0 });

      // -- Hero (mount, no ScrollTrigger) -----------------------------
      const heroTl = gsap.timeline({ delay: 0.1 });
      heroTl
        .to(".hero-drift", {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "expo.out"
        })

      // -- Generic drift-in loop (Output SectionHeader + any remaining) -
      gsap.utils.toArray<HTMLElement>(".drift-in").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });

      // -- Overview ---------------------------------------------------
      const overviewSection = document.querySelector("#overview");
      if (overviewSection) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: overviewSection, start: "top 82%", once: true }
        });
        tl.to(".overview-eyebrow", { opacity: 1, y: 0, duration: 0.55, ease: "expo.out" })
          .to(".overview-title", { opacity: 1, y: 0, duration: 0.75, ease: "expo.out" }, "-=0.3")
          .to(".overview-body", { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.55")
          .to(".overview-aside", { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out" }, "-=0.6");
      }

      // -- Solution - header then staggered cards --------------------
      const solutionSection = document.querySelector("#solution");
      if (solutionSection) {
        const header = solutionSection.querySelector(".solution-header");
        const cards = solutionSection.querySelectorAll(".deck-reveal");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: solutionSection, start: "top 80%", once: true }
        });

        if (header) {
          tl.to(header, { opacity: 1, y: 0, duration: 0.75, ease: "expo.out" });
        }

        cards.forEach((card, i) => {
          tl.to(card, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" }, i === 0 ? "-=0.35" : ">-0.15");
        });
      }

      // -- Problem - pinned scroll + nav dark mode -------------------
      const problemSection = document.querySelector("#problem");
      if (problemSection) {
        let lastIdx = -1;

        // Nav turns dark while problem is pinned
        ScrollTrigger.create({
          trigger: problemSection,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          onEnter: () => setNavMode("dark"),
          onLeaveBack: () => setNavMode("default"),
          onLeave: () => setNavMode("default"),
          onEnterBack: () => setNavMode("dark"),
        });

        // Pin the section; advance through the intro plus 3 problem items
        ScrollTrigger.create({
          trigger: problemSection,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const next = Math.min(Math.floor(self.progress * 4), 3);
            if (next !== lastIdx) {
              lastIdx = next;
              setActiveProblemIndex(next);
            }
          },
        });
      }

      // Output: CSS keyframe animations handle entrances (no GSAP needed)

      // -- Progress - understated, staggered list ---------------------
      const progressSection = document.querySelector("#progress");
      if (progressSection) {
        const leftCol = progressSection.querySelector(".progress-left");
        const scoreLine = progressSection.querySelector(".score-fill");
        const creamBox = progressSection.querySelector(".progress-cream");
        const items = progressSection.querySelectorAll(".progress-item");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: progressSection, start: "top 82%", once: true }
        });

        if (leftCol) {
          tl.to(leftCol, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" });
        }
        if (scoreLine) {
          tl.to(scoreLine, { scaleX: 1, duration: 0.8, ease: "expo.out" }, "-=0.4");
        }
        if (creamBox) {
          tl.to(creamBox, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.3");
        }
        if (items.length) {
          tl.to(items, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "expo.out" }, "-=0.2");
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  // Nav mode - hero visibility via IntersectionObserver
  useEffect(() => {
    const heroSection = document.querySelector("#top");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Don't override 'dark' (GSAP problem trigger owns that)
        setNavMode((prev) => {
          if (prev === "dark") return "dark";
          return entry.isIntersecting ? "hero" : "default";
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={root} className="case-page min-h-screen text-[var(--forest)]">
      {/* -- Sticky nav - transparent over hero, frosted on default, white text on dark -- */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          navMode === "default"
            ? "border-b border-[var(--line)] bg-white/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-sm sm:px-8 lg:px-10">
          <a
            href="#top"
            className={`font-semibold tracking-[-0.01em] transition-colors duration-300 ${
              navMode === "dark" ? "text-white" : "text-[var(--forest)]"
            }`}
          >
            Viictor / case study
          </a>
          <nav
            className={`hidden items-center gap-7 text-[0.82rem] font-medium transition-colors duration-300 sm:flex ${
              navMode === "dark" ? "text-white/70" : "text-[var(--soft)]"
            }`}
          >
            <a href="#problem" className={navMode === "dark" ? "hover:text-white" : "hover:text-[var(--forest)]"}>Problem</a>
            <a href="#solution" className={navMode === "dark" ? "hover:text-white" : "hover:text-[var(--forest)]"}>Solution</a>
            <a href="#output" className={navMode === "dark" ? "hover:text-white" : "hover:text-[var(--forest)]"}>Output</a>
            <a href="#progress" className={navMode === "dark" ? "hover:text-white" : "hover:text-[var(--forest)]"}>Progress</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] overflow-visible px-5 pt-24 sm:min-h-[840px] sm:px-8 lg:min-h-[900px] lg:px-10 lg:pt-28">
        <div className="relative mx-auto max-w-7xl">
          {/* Hero copy centered */}
          <div className="hero-drift relative z-10 flex flex-col items-center gap-7 text-center">
            <p className="font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--green)]">
              Viictor App Redesign
            </p>
            <h1 className="display-sport max-w-3xl text-[clamp(3.2rem,7vw,6.75rem)] text-[var(--forest)]">
              Right product. Wrong face.
            </h1>
            <p className="max-w-2xl text-center text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--soft)]">
              Redesigning the match-day experience for players who compete
              together, creating a clearer first impression and a more direct path to action.
            </p>
          </div>

          {/* Slider */}
          <div className="hero-drift hero-bridge">
            <RevealSlider />
          </div>
        </div>
      </section>

      <section id="overview" className="relative px-5 pb-36 pt-80 sm:px-8 sm:pb-44 sm:pt-88 lg:px-10 lg:pb-52 lg:pt-104">
        <div className="mx-auto max-w-6xl">
          <div className="overview-grid">
            {/* Left column: label + heading + body */}
            <div className="overview-copy">
              <p className="overview-eyebrow font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--green)]">
                Overview
              </p>
              <h2 className="overview-title display-sport text-[clamp(2rem,3.33vw,3rem)]">
                No new features, just about making the existing ones easier to trust.
              </h2>
              <p className="overview-body text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.5] text-[var(--soft)]">
                Viictor is a match-day app for amateur players. The redesign simplifies
                the system, clarifies the first screen, and makes tournaments easier to compare.
              </p>
            </div>
            {/* Right column: phone mockup */}
            <div className="overview-aside overview-phone">
              <Image
                src="/images/overview-mockup.png"
                alt="Redesigned Viictor app on mobile"
                width={600}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="problem"
        className="relative flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        style={{ background: "linear-gradient(to bottom, #141514, #161b18)" }}
      >
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/problem-section-bg.png"
            alt=""
            fill
            className="object-cover opacity-60 mix-blend-multiply"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div
            className="problem-grid"
            style={{ "--problem-step": activeProblemIndex } as CSSProperties}
          >
            {/* Left: centered phone mockup */}
            <div className="problem-sticky">
              <div className="problem-phone-frame">
              <div className="problem-images mockup-wrap">
                {/* Image 1: visible for the intro and dashboard issues */}
                <figure
                    className={`problem-image ${activeProblemIndex <= 2 ? "problem-image--active" : ""}`}
                >
                  <Image
                    src={comparisons[0].before}
                    alt={comparisons[0].beforeAlt}
                    width={380}
                    height={760}
                    className="w-full object-contain"
                  />
                </figure>
                {/* Image 2: visible for the tournament scanning issue */}
                <figure
                    className={`problem-image ${activeProblemIndex >= 3 ? "problem-image--active" : ""}`}
                >
                  <Image
                    src={comparisons[1].before}
                    alt={comparisons[1].beforeAlt}
                    width={380}
                    height={760}
                    className="w-full object-contain"
                  />
                </figure>
              </div>
              </div>
            </div>

            {/* Right: the whole text stack scrolls as one list */}
            <div className="problem-copy">
              <div className="problem-copy-rail">
                <div className="problem-copy-track">
                  <article
                    className={`problem-copy-intro ${activeProblemIndex === 0 ? "problem-point--active" : ""}`}
                  >
                    <p className="font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[oklch(0.72_0.18_142)]">
                      Problem
                    </p>
                    <h2 className="display-sport text-[clamp(2rem,3.33vw,3rem)] text-[var(--cream)]">
                      The ingredients were right; the interface undermined trust.
                    </h2>
                    <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] text-[oklch(0.6_0.012_145)]">
                      The old experience needed clearer, more confident visuals, and a stronger
                      sense of what comes next.
                    </p>
                  </article>
                  <div className="problem-points-group">
                    {problems.map(([title, body], index) => {
                      const isActive = activeProblemIndex === index + 1;
                      return (
                        <article
                          key={title}
                          className={`problem-point ${isActive ? "problem-point--active" : ""}`}
                        >
                          <h3
                            className={`display-sport text-[clamp(1.5rem,2.78vw,2.5rem)] leading-[1.15] transition-colors duration-500 ${
                              isActive ? "text-[var(--cream)]" : "text-[#474747]"
                            }`}
                          >
                            {title}
                          </h3>
                          <p
                            className={`text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] transition-colors duration-500 ${
                              isActive ? "text-[oklch(0.6_0.012_145)]" : "text-[#3d3d3d]"
                            }`}
                          >
                            {body}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="solution-header text-center">
            <SectionHeader
              centered
              eyebrow="Solution"
              title="Design for clarity, not decoration."
              body="The new direction uses quieter surfaces and clearer information order."
            />
          </div>
          <div className="solution-stack">
            {solutionMoves.map(([title, body], i) => {
              const isDark = i === 1;
              return (
                <article
                  key={title}
                  className={`deck-reveal solution-card ${isDark ? "solution-card--dark" : ""}`}
                  style={{ "--card-index": i } as CSSProperties}
                >
                  <div className="solution-card__top">
                    <span>{`0${i + 1}`}</span>
                    <span>{isDark ? "System" : "Principle"}</span>
                  </div>
                  <div className="solution-card__content">
                    <h3 className="display-sport">
                      {title}
                    </h3>
                    <p>
                      {body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="output" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="drift-in flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-sport text-[clamp(2rem,3.33vw,3rem)] text-[var(--forest)]">
              Output
            </h2>
            <div className="output-controls">
              <div className="output-tabs">
                {comparisons.map((c, i) => (
                  <button
                    key={c.title}
                    onClick={() => setActiveOutputTab(i)}
                    className={`sport-label output-tab ${
                      activeOutputTab === i
                        ? "output-tab--active"
                        : ""
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
              <ThemeToggle
                theme={theme}
                onToggle={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
                compact
              />
            </div>
          </div>

          <div className="output-stage">
            <ComparisonBlock
              key={activeOutputTab}
              item={currentImages[activeOutputTab]}
              theme={theme}
              onToggle={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
            />
          </div>
        </div>
      </section>

      <section id="progress" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl border-t border-[var(--line)] pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <div className="progress-left">
              <p className="sport-label text-[var(--green)]">
                Progress
              </p>
              <h2 className="display-sport mt-4 max-w-xl text-[clamp(1.9rem,3.45vw,3.15rem)]">
                Progress, not proof.
              </h2>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-[var(--soft)] sm:text-[1.05rem]">
                The redesign gives the product a clearer direction. Whether it
                improves player behavior still needs validation with real use.
              </p>
              <div className="score-fill mt-8 h-px w-16 origin-left bg-[var(--green)]" />
            </div>

            <div className="grid gap-10">
              <div className="progress-cream rounded-[1.5rem] bg-[var(--cream)] p-6 sm:p-8">
                <h3 className="text-lg font-medium">What is directionally better</h3>
                <div className="mt-5 divide-y divide-[var(--line)]">
                  {progressSignals.map(([title, body]) => (
                    <div key={title} className="grid gap-2 py-5 sm:grid-cols-[0.42fr_1fr]">
                      <div className="font-medium text-[var(--forest)]">{title}</div>
                      <p className="leading-7 text-[var(--soft)]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Still to test</h3>
                <ul className="mt-5 grid gap-3 text-[var(--soft)] sm:grid-cols-2">
                  {stillToTest.map((item) => (
                    <li key={item} className="progress-item flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function RevealSlider() {
  const stage = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(58);
  const [hinted, setHinted] = useState(false);

  const updateFromMouse = (event: MouseEvent<HTMLDivElement>) => {
    const rect = stage.current?.getBoundingClientRect();
    if (!rect) return;

    if (!hinted) setHinted(true);
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next, 8, 92));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => clamp(value - 4, 8, 92));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => clamp(value + 4, 8, 92));
    }
  };

  return (
    <div className="mockup-wrap">
      <div
        ref={stage}
        role="slider"
        tabIndex={0}
        aria-label="Reveal redesigned dashboard"
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(position)}
        onMouseMove={updateFromMouse}
        onFocus={() => setPosition(58)}
        onKeyDown={handleKeyDown}
        className="reveal-stage relative mx-auto aspect-[1080/1920] max-h-[560px] max-w-[350px] cursor-ew-resize overflow-visible bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)]"
      >
        <Image
          src="/images/old-dashboard-mockup.png"
          alt="Original Viictor dashboard mockup"
          width={1080}
          height={1920}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/images/new-dashboard_mockup.png"
            alt="Redesigned Viictor dashboard mockup"
            width={1080}
            height={1920}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-[oklch(0.98_0.006_145/.9)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--soft)]">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-[var(--green)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--cream)]">
          After
        </div>

        <div
          className="absolute inset-y-0 w-px bg-[var(--cream)]"
          style={{ left: `${position}%` }}
        >
          <div className="reveal-halo absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--line)] bg-[var(--cream)] text-xs font-semibold text-[var(--forest)] shadow-[0_12px_36px_oklch(0.22_0.025_145/.18)]">
            {"<>"}
          </div>
        </div>
      </div>
      <p
        className="slider-hint mt-4 text-center text-xs font-medium tracking-[0.06em] text-[var(--soft)]"
        style={hinted ? { opacity: 0, transition: "opacity 0.4s ease" } : undefined}
        aria-hidden="true"
      >
        Drag to compare
      </p>
    </div>
  );
}


function SectionHeader({
  eyebrow,
  title,
  body,
  dark = false,
  centered = false,
  className = ""
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <p
        className={`font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] ${
          dark ? "text-[oklch(0.72_0.18_142)]" : "text-[var(--green)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="display-sport mt-4 text-[clamp(2rem,3.33vw,3rem)]">
        {title}
      </h2>
      <p
        className={`mt-5 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.5] ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        } ${dark ? "text-[oklch(0.58_0.01_145)]" : "text-[var(--soft)]"}`}
      >
        {body}
      </p>
    </div>
  );
}

function ThemeToggle({
  theme,
  onToggle,
  compact = false
}: {
  theme: ThemeMode;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "drift-in"}>
      {compact ? null : (
        <p className="sport-label mb-2 text-[var(--soft)]">
          After theme
        </p>
      )}
      <button
        type="button"
        onClick={onToggle}
        className={`flex ${compact ? "min-w-[132px] bg-[oklch(0.986_0.018_96/.92)] px-3 py-2 text-xs shadow-[0_10px_30px_oklch(0.22_0.04_148/.12)]" : "min-w-[168px] bg-[var(--cream)] px-4 py-3 text-sm"} items-center justify-between rounded-full border border-[var(--line)] font-semibold text-[var(--forest)] ${theme === "dark" ? "toggle-on" : ""}`}
        aria-pressed={theme === "dark"}
      >
        <span>{theme === "light" ? "Light" : "Dark"}</span>
        <span className="relative h-7 w-14 rounded-full bg-[var(--surface)]">
          <span className="toggle-knob absolute left-1 top-1 h-5 w-5 rounded-full bg-[var(--green)]" />
        </span>
      </button>
    </div>
  );
}

function ComparisonBlock({
  item,
  theme,
  onToggle
}: {
  item: (typeof comparisons)[number] & { after: string };
  theme: ThemeMode;
  onToggle: () => void;
}) {
  return (
    <article className="comparison-block">
      <div className="grid gap-8 xl:grid-cols-[minmax(190px,0.62fr)_minmax(260px,0.95fr)_minmax(260px,0.95fr)_minmax(190px,0.62fr)] xl:items-center">
        <ComparisonNotes
          label="Before"
          notes={item.beforeNotes}
          className="comparison-notes-before"
        />
        <ComparisonImage
          image={item.before}
          alt={item.beforeAlt}
          width={1080}
          height={2340}
          figureClassName="comparison-img"
        />
        <ComparisonImage
          image={item.after}
          alt={item.afterAlt}
          width={804}
          height={2036}
          positive
          figureClassName="comparison-img"
        />
        <ComparisonNotes
          label="After"
          notes={item.afterNotes}
          positive
          className="comparison-notes-after"
        />
      </div>
    </article>
  );
}

function ComparisonNotes({
  label,
  notes,
  positive = false,
  className = ""
}: {
  label: string;
  notes: string[];
  positive?: boolean;
  className?: string;
}) {
  return (
    <div className={`comparison-notes ${className}`}>
      <p className="display-sport">
        {label}
      </p>
      <ul>
        {notes.map((note) => (
          <li key={note} className="flex gap-3">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                positive ? "bg-[var(--green)]" : "bg-[var(--soft)]"
              }`}
            />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonImage({
  image,
  alt,
  width,
  height,
  positive = false,
  figureClassName = ""
}: {
  image: string;
  alt: string;
  width: number;
  height: number;
  positive?: boolean;
  figureClassName?: string;
}) {
  return (
    <figure className={`comparison-frame relative overflow-hidden ${positive ? "comparison-frame--positive" : ""} ${figureClassName}`}>
      <div className="flex h-[410px] items-center justify-center sm:h-[490px] xl:h-[580px]">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-contain"
        />
      </div>
    </figure>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}


