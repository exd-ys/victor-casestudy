"use client";

import Image from "next/image";
import {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViictorDashboardPrototype from "./ViictorDashboardPrototype";
import ViictorTournamentPrototype from "./ViictorTournamentPrototype";

type ThemeMode = "light" | "dark";
type NavMode = "hero" | "default" | "dark";
type ExpandedImage = { src: string; alt: string; title: string } | null;

const problems = [
  [
    "Split Personality",
    "Headers, forms, and screen treatments changed from place to place, so players had to relearn the interface on each screen and trust dropped.",
  ],
  [
    "No Next Move",
    "The dashboard showed stats without a clear next action, so players lost momentum when trying to continue into a challenge or tournament.",
  ],
  [
    "Harder Scanning",
    "Tournament details existed, but the layout slowed comparison, making it harder for players to quickly choose the right event.",
  ],
];

const solutionMoves = [
  [
    "Light where it matters",
    "The primary app surface is brighter for outdoor, between-game usage. Players can read status and match details faster in sunlight, with fewer missed actions and less visual strain.",
  ],
  [
    "Green with restraint",
    "Green is reserved for rank, primary actions, and live status. This makes important signals easier to notice quickly, so players can decide with more confidence.",
  ],
  [
    "Decisions first",
    "Rows, hierarchy, and bottom navigation prioritize what to compare and what to do next. Players spend less time searching and move to the next match step faster.",
  ],
];

const comparisons = [
  {
    title: "Dashboard",
    before: "/images/old-victor-home.jpg",
    afterLight: "/images/new-victor-dashboard-light.png",
    afterDark: "/images/new-victor-dashboard-dark.png",
    beforeAlt: "Original Viictor dashboard screen",
    afterAlt: "Redesigned Viictor dashboard screen",
    beforeNotes: [
      "Stats carried equal visual weight, so priority was unclear.",
      "Players had no obvious next action from Home.",
    ],
    afterNotes: [
      "Ranking becomes the visual anchor for faster orientation.",
      "A dedicated next-action area helps players move into challenges or tournaments faster.",
    ],
  },
  {
    title: "Tournament List",
    before: "/images/old-victor-tournament.jpg",
    afterLight: "/images/new-victor-tournament-light.png",
    afterDark: "/images/new-victor-tournament-dark.png",
    beforeAlt: "Original Viictor tournament screen",
    afterAlt: "Redesigned Viictor tournament list",
    beforeNotes: [
      "Entries were slower to compare at a glance.",
      "Prize, status, and timing were present but did not guide quick decisions.",
    ],
    afterNotes: [
      "Rows surface fee, date, status, and prize in one scan path.",
      "Clearer filtering helps players find the right tournament with less effort.",
    ],
  },
];

const progressSignals = [
  [
    "Coherence",
    "Home and Tournament now follow one system, reducing interpretation effort between screens.",
  ],
  [
    "Momentum",
    "The Home screen now points players to the next competitive action instead of ending at passive stats.",
  ],
  [
    "Scanability",
    "Tournament rows are structured for faster comparison of fee, timing, and status.",
  ],
];

const stillToTest = [
  "Time to first meaningful action from Home (challenge, entry, or results check) decreases.",
  "Tournament entry conversion from list view increases.",
  "Challenge acceptance rate increases after clearer Home prioritization.",
  "Weekly return rate improves after clearer ranking and status visibility.",
];

export default function CaseStudy() {
  const root = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const [activeOutputTab, setActiveOutputTab] = useState(0);
  const [navMode, setNavMode] = useState<NavMode>("hero");
  const [expandedAfterImage, setExpandedAfterImage] =
    useState<ExpandedImage>(null);

  const currentImages = useMemo(
    () =>
      comparisons.map((item) => ({
        ...item,
        after: theme === "light" ? item.afterLight : item.afterDark,
      })),
    [theme],
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
      gsap.set(".output-stage", { opacity: 0, y: 28 });
      gsap.set(".progress-left", { opacity: 0, y: 18 });
      gsap.set(".progress-cream", { opacity: 0, y: 18 });
      gsap.set(".progress-item", { opacity: 0, y: 10 });
      gsap.set(".score-fill", { scaleX: 0 });

      // -- Hero (mount, no ScrollTrigger) -----------------------------
      const heroTl = gsap.timeline({ delay: 0.1 });
      heroTl.to(".hero-drift", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "expo.out",
      });

      // -- Generic drift-in loop (Output SectionHeader + any remaining) -
      gsap.utils.toArray<HTMLElement>(".drift-in").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      // -- Overview ---------------------------------------------------
      const overviewSection = document.querySelector("#overview");
      if (overviewSection) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: overviewSection,
            start: "top 82%",
            once: true,
          },
        });
        tl.to(".overview-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "expo.out",
        })
          .to(
            ".overview-title",
            { opacity: 1, y: 0, duration: 0.75, ease: "expo.out" },
            "-=0.3",
          )
          .to(
            ".overview-body",
            { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" },
            "-=0.55",
          )
          .to(
            ".overview-aside",
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out" },
            "-=0.6",
          );
      }

      // -- Solution - header then staggered cards --------------------
      const solutionSection = document.querySelector("#solution");
      if (solutionSection) {
        const header = solutionSection.querySelector(".solution-header");
        const cards = solutionSection.querySelectorAll(".deck-reveal");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: solutionSection,
            start: "top 80%",
            once: true,
          },
        });

        if (header) {
          tl.to(header, { opacity: 1, y: 0, duration: 0.75, ease: "expo.out" });
        }

        if (cards.length) {
          tl.to(
            cards,
            { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.13 },
            "-=0.3",
          );
        }
      }

      // -- Output - stage rises on scroll ----------------------------
      const outputSection = document.querySelector("#output");
      if (outputSection) {
        const stage = outputSection.querySelector(".output-stage");
        if (stage) {
          gsap.to(stage, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: stage, start: "top 88%", once: true },
          });
        }
      }

      // -- Problem - sticky phone, scrolling text + nav dark mode -------------------
      const problemSection = document.querySelector("#problem");
      if (problemSection) {
        ScrollTrigger.create({
          trigger: problemSection,
          start: "top top",
          end: "bottom top",
          onEnter: () => setNavMode("dark"),
          onLeaveBack: () => setNavMode("default"),
          onLeave: () => setNavMode("default"),
          onEnterBack: () => setNavMode("dark"),
        });

        const problemItems = problemSection.querySelectorAll("[data-problem-index]");
        problemItems.forEach((item) => {
          const idx = Number((item as HTMLElement).dataset.problemIndex);
          ScrollTrigger.create({
            trigger: item,
            start: "center center",
            end: "center center",
            onEnter: () => setActiveProblemIndex(idx),
            onEnterBack: () => setActiveProblemIndex(idx),
          });
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
          scrollTrigger: {
            trigger: progressSection,
            start: "top 82%",
            once: true,
          },
        });

        if (leftCol) {
          tl.to(leftCol, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" });
        }
        if (scoreLine) {
          tl.to(
            scoreLine,
            { scaleX: 1, duration: 0.8, ease: "expo.out" },
            "-=0.4",
          );
        }
        if (creamBox) {
          tl.to(
            creamBox,
            { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" },
            "-=0.3",
          );
        }
        if (items.length) {
          tl.to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.08,
              ease: "expo.out",
            },
            "-=0.2",
          );
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
      { threshold: 0.05 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Mobile-only: fade items as they centre in the viewport (desktop uses GSAP pin)
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const items = document.querySelectorAll<HTMLElement>("[data-problem-index]");
    if (!items.length) return;

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(
            entry.target.getAttribute("data-problem-index") ?? "0",
            10,
          );
          ratios.set(idx, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestIdx = 0;
        let bestRatio = -1;
        ratios.forEach((ratio, idx) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        });

        setActiveProblemIndex(bestIdx);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!expandedAfterImage) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedAfterImage(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedAfterImage]);

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
            className={`nav-wordmark transition-colors duration-300 ${
              navMode === "dark" ? "text-white" : "text-[var(--forest)]"
            }`}
          >
            <span className="nav-wordmark__brand">Viictor</span>
            <span
              className={`nav-wordmark__context transition-colors duration-300 ${
                navMode === "dark"
                  ? "text-white/45"
                  : "text-[var(--soft)]"
              }`}
            >
              / Case Study
            </span>
          </a>
          <nav
            className={`hidden items-center gap-7 text-[0.82rem] font-medium transition-colors duration-300 sm:flex ${
              navMode === "dark" ? "text-white/70" : "text-[var(--soft)]"
            }`}
          >
            <a
              href="#problem"
              className={
                navMode === "dark"
                  ? "hover:text-white"
                  : "hover:text-[var(--forest)]"
              }
            >
              Problem
            </a>
            <a
              href="#solution"
              className={
                navMode === "dark"
                  ? "hover:text-white"
                  : "hover:text-[var(--forest)]"
              }
            >
              Solution
            </a>
            <a
              href="#output"
              className={
                navMode === "dark"
                  ? "hover:text-white"
                  : "hover:text-[var(--forest)]"
              }
            >
              Output
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative min-h-[760px] overflow-visible px-5 pt-24 sm:min-h-[840px] sm:px-8 lg:min-h-[900px] lg:px-10 lg:pt-28"
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Hero copy centered */}
          <div className="hero-drift relative z-10 flex flex-col items-center gap-7 text-center">
            <p className="font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--green)]">
              Viictor Home + Tournament Redesign
            </p>
            <h1 className="display-sport max-w-3xl text-[clamp(2.4rem,5.2vw,4.8rem)] text-[var(--forest)]">
              Strong product.
              <br />
              Clearer experience.
            </h1>
            <p className="max-w-2xl text-center text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--soft)]">
              We redesigned the existing Home and Tournament pages to make key
              actions easier to find, improve outdoor readability, and create
              one consistent visual system without changing core features.
            </p>
          </div>

          {/* Slider */}
          <div className="hero-drift hero-bridge">
            <RevealSlider />
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="relative px-5 pb-36 pt-80 sm:px-8 sm:pb-44 sm:pt-88 lg:px-10 lg:pb-52 lg:pt-140"
      >
        <div className="mx-auto max-w-6xl">
          <div className="overview-grid">
            {/* Left column: label + heading + body */}
            <div className="overview-copy">
              <p className="overview-eyebrow font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--green)]">
                Overview
              </p>
              <h2 className="overview-title display-sport text-[clamp(2rem,3.33vw,3rem)]">
                Same features, clearer decisions.
              </h2>
              <p className="overview-body text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.5] text-[var(--soft)]">
                Viictor supports competitive tennis players across adults and
                juniors, including serious social players and junior pathways
                supported by parents or coaches. This redesign focuses on the
                existing Home and Tournament pages, so players can understand
                status faster, choose their next action faster, and trust what
                they see at a glance.
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
        className="relative flex px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        style={{ background: "linear-gradient(to bottom, #141514, #161b18)" }}
      >
        {/* Ambient orbs */}
        <div className="problem-orb" aria-hidden="true" />

        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <Image
            src="/images/problem-section-bg.png"
            alt=""
            fill
            className="object-cover opacity-60 mix-blend-multiply"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="problem-grid">
            {/* Left: phone mockup — sticky on desktop, image swaps at problem 3 */}
            <div className="problem-sticky">
              <div className="problem-phone-frame">
                <div className="problem-images mockup-wrap">
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

            {/* Right: scroll-driven track, clipped inside .problem-copy */}
            <div className="problem-copy">
              <div className="problem-copy-track">
                <article
                  className={`problem-copy-intro ${activeProblemIndex === 0 ? "problem-item--active" : ""}`}
                  data-problem-index="0"
                >
                  <p className="font-bold text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.5] text-[oklch(0.72_0.18_142)]">
                    Problem
                  </p>
                  <h2 className="display-sport text-[clamp(2rem,3.33vw,3rem)] text-[var(--cream)]">
                    The ingredients were right; the interface undermined
                    trust.
                  </h2>
                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] text-[oklch(0.6_0.012_145)]">
                    Core features were already in place, but players spent
                    extra effort understanding screens, finding next steps,
                    and comparing options under match-day pressure.
                  </p>
                </article>
                <div className="problem-points-group">
                  {problems.map(([title, body], index) => {
                    const isActive = activeProblemIndex === index + 1;
                    return (
                      <article
                        key={title}
                        className={`problem-point ${isActive ? "problem-item--active" : ""}`}
                        data-problem-index={index + 1}
                      >
                        <span className="problem-point__num">0{index + 1}</span>
                        <h3 className="display-sport text-[clamp(1.5rem,2.78vw,2.5rem)] leading-[1.15] text-[var(--cream)]">
                          {title}
                        </h3>
                        <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] text-[oklch(0.6_0.012_145)]">
                          {body}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>{/* end problem-copy-track */}
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="px-5 pt-20 pb-10 sm:px-8 lg:px-10 lg:pt-28 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="solution-header text-center">
            <SectionHeader
              centered
              eyebrow="Solution"
              title="Design for clarity, not decoration."
              body="The new direction improves readability, decision speed, and confidence in each next step, especially for players coordinating competitive matches on the go."
            />
          </div>
          <div className="solution-stack">
            {solutionMoves.map(([title, body], i) => {
              const variants = ["light", "green", "dark"] as const;
              const tags = ["Principle", "System", "Principle"];
              return (
                <article
                  key={title}
                  className={`deck-reveal solution-card solution-card--${variants[i]}`}
                >
                  <span className="solution-card__label">{tags[i]}</span>
                  <div className="solution-card__content">
                    <h3 className="display-sport">{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="output" className="px-5 pt-10 pb-20 sm:px-8 lg:px-10 lg:pt-12 lg:pb-28">
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
                      activeOutputTab === i ? "output-tab--active" : ""
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="output-stage">
            <ComparisonBlock
              key={activeOutputTab}
              item={currentImages[activeOutputTab]}
              theme={theme}
              onToggle={() =>
                setTheme((value) => (value === "light" ? "dark" : "light"))
              }
              onOpenAfter={(src, alt, title) =>
                setExpandedAfterImage({ src, alt, title })
              }
              afterComponent={
                activeOutputTab === 0 ? <ViictorDashboardPrototype /> :
                activeOutputTab === 1 ? <ViictorTournamentPrototype /> :
                undefined
              }
            />
          </div>
        </div>
      </section>

      {false && (
      <section id="progress" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl border-t border-[var(--line)] pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <div className="progress-left">
              <p className="sport-label text-[var(--green)]">Progress</p>
              <h2 className="display-sport mt-4 max-w-xl text-[clamp(1.9rem,3.45vw,3.15rem)]">
                Progress, not proof.
              </h2>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-[var(--soft)] sm:text-[1.05rem]">
                The redesign improves clarity and decision flow by design. The
                next step is validating behavior change with measurable outcomes
                tied to action speed, conversion, and return usage.
              </p>
              <div className="score-fill mt-8 h-px w-16 origin-left bg-[var(--green)]" />
            </div>

            <div className="grid gap-10">
              <div className="progress-cream rounded-[1.5rem] bg-[var(--cream)] p-6 sm:p-8">
                <h3 className="text-lg font-medium">
                  What is directionally better
                </h3>
                <div className="mt-5 divide-y divide-[var(--line)]">
                  {progressSignals.map(([title, body]) => (
                    <div
                      key={title}
                      className="grid gap-2 py-5 sm:grid-cols-[0.42fr_1fr]"
                    >
                      <div className="font-medium text-[var(--forest)]">
                        {title}
                      </div>
                      <p className="leading-7 text-[var(--soft)]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Impact hypotheses to validate
                </h3>
                <ul className="mt-5 grid gap-3 text-[var(--soft)] sm:grid-cols-2">
                  {stillToTest.map((item) => (
                    <li
                      key={item}
                      className="progress-item flex items-center gap-3"
                    >
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
      )}

      {expandedAfterImage ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[oklch(0.2_0.04_145/.82)] p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setExpandedAfterImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded ${expandedAfterImage.title} redesign preview`}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl border border-[oklch(0.85_0.02_145/.35)] bg-gray-200 p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold tracking-[0.05em] text-[var(--soft)] uppercase">
                Expanded After Screen · {expandedAfterImage.title}
              </p>
              <button
                type="button"
                onClick={() => setExpandedAfterImage(null)}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-sm font-semibold text-[var(--forest)] transition hover:bg-[var(--cream)]"
              >
                Close
              </button>
            </div>
            <div className="relative flex max-h-[82vh] min-h-[320px] items-center justify-center">
              <Image
                src={expandedAfterImage.src}
                alt={expandedAfterImage.alt}
                width={1200}
                height={2400}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
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
        className="reveal-stage relative mx-auto aspect-[1080/1920] max-h-[680px] max-w-[430px] cursor-ew-resize overflow-visible bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)]"
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
        style={
          hinted ? { opacity: 0, transition: "opacity 0.4s ease" } : undefined
        }
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
  className = "",
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
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
  compact = false,
}: {
  theme: ThemeMode;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "drift-in"}>
      {compact ? null : (
        <p className="sport-label mb-2 text-[var(--soft)]">After theme</p>
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
  onToggle,
  onOpenAfter,
  afterComponent,
}: {
  item: (typeof comparisons)[number] & { after: string };
  theme: ThemeMode;
  onToggle: () => void;
  onOpenAfter: (src: string, alt: string, title: string) => void;
  afterComponent?: ReactNode;
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
        {afterComponent ? (
          <figure className="comparison-img flex justify-center items-start py-4">
            {afterComponent}
          </figure>
        ) : (
          <ComparisonImage
            image={item.after}
            alt={item.afterAlt}
            width={804}
            height={2036}
            positive
            figureClassName="comparison-img"
            onOpen={() => onOpenAfter(item.after, item.afterAlt, item.title)}
          />
        )}
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
  className = "",
}: {
  label: string;
  notes: string[];
  positive?: boolean;
  className?: string;
}) {
  return (
    <div className={`comparison-notes ${className}`}>
      <p className="display-sport">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
        {positive
          ? "User impact after redesign"
          : "User friction before redesign"}
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
  figureClassName = "",
  onOpen,
}: {
  image: string;
  alt: string;
  width: number;
  height: number;
  positive?: boolean;
  figureClassName?: string;
  onOpen?: () => void;
}) {
  return (
    <figure
      className={`comparison-frame relative overflow-hidden ${positive ? "comparison-frame--positive" : ""} ${figureClassName}`}
    >
      <div className="flex h-[533px] items-center justify-center sm:h-[637px] xl:h-[754px]">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-contain"
        />
      </div>
      {positive && onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className="absolute bottom-3 right-3 rounded-full border border-[var(--line)] bg-[oklch(0.985_0.01_145/.95)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--forest)] transition hover:bg-[var(--cream)]"
        >
          View larger
        </button>
      ) : null}
    </figure>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
