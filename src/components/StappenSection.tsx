"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Schade melden", desc: "Bel ons, stuur een bericht of vul het online formulier in. Wij reageren binnen 24 uur." },
  { n: "02", title: "Gratis beoordeling", desc: "Wij beoordelen de schade vrijblijvend en maken een heldere offerte op maat." },
  { n: "03", title: "Vakkundige reparatie", desc: "Onze specialisten herstellen uw auto met hoogwaardige materialen. U krijgt een leenauto." },
  { n: "04", title: "Auto klaar", desc: "Uw auto is gereinigd en rijklaar. Wij leveren hem persoonlijk bij u af of u haalt hem op." },
];

export default function StappenSection() {
  /* ── Desktop ── */
  const [desktopActive, setDesktopActive] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);

  /* ── Mobile ── */
  const [mobileCard, setMobileCard] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  /* Desktop: fire once when connector scrolls into view */
  useEffect(() => {
    const el = desktopRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setDesktopActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Mobile: set heights in px (avoids svh support issues) and use RAF
     so we don't depend on scroll events firing on any specific element. */
  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;

    const setHeights = () => {
      const vh = window.innerHeight;
      track.style.height = `${Math.round(vh * 2.4)}px`;   // 2.4 screens of scroll space
      sticky.style.height = `${Math.min(260, Math.max(190, Math.round(vh * 0.28)))}px`;
    };
    setHeights();
    window.addEventListener("resize", setHeights, { passive: true });

    /* RAF loop — read position every frame, no scroll events needed */
    let rafId: number;
    let looping = false;

    const tick = () => {
      const rect = track.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const scrollable = Math.max(1, track.offsetHeight - window.innerHeight);

      let card: number;
      if (scrolledIn <= 0) card = 0;
      else if (scrolledIn >= scrollable) card = 3;
      else card = Math.min(3, Math.floor((scrolledIn / scrollable) * 4));

      setMobileCard(prev => (prev !== card ? card : prev));
      if (looping) rafId = requestAnimationFrame(tick);
    };

    /* Only run the RAF loop while the track is near the viewport */
    const vis = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          looping = true;
          rafId = requestAnimationFrame(tick);
        } else {
          looping = false;
          cancelAnimationFrame(rafId);
        }
      },
      { rootMargin: "300px 0px 300px 0px" }
    );
    vis.observe(track);

    return () => {
      looping = false;
      cancelAnimationFrame(rafId);
      vis.disconnect();
      window.removeEventListener("resize", setHeights);
    };
  }, []);

  return (
    <div>
      {/* ── DESKTOP (lg+): horizontal with animated connector ── */}
      <div ref={desktopRef} className="hidden lg:block relative">
        <div className="absolute top-6 h-px z-0" style={{ left: "1.5rem", right: "calc(25% - 3rem)" }}>
          <div className="absolute inset-0 bg-gray-200" />
          <div
            className="absolute inset-y-0 left-0 bg-brand-400"
            style={{ width: desktopActive ? "100%" : "0%", transition: "width 1.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-700 ring-2 ring-white shadow-lg shadow-brand-700/30 z-10"
            style={{ left: desktopActive ? "calc(100% - 8px)" : "-8px", transition: "left 1.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
        </div>
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                opacity: desktopActive ? 1 : 0,
                transform: desktopActive ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 200 + 400}ms, transform 0.6s ease ${i * 200 + 400}ms`,
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border-2 border-brand-100 flex items-center justify-center mb-4">
                <span className="text-brand-700 font-black text-sm">{step.n}</span>
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE (below lg): scroll-driven stacking cards ──
          trackRef creates scroll space (height set in px via JS).
          stickyRef holds all cards stacked on top of each other.
          RAF loop maps scroll progress → mobileCard → translateY. */}
      <div ref={trackRef} className="lg:hidden relative">
        <div
          ref={stickyRef}
          className="sticky overflow-hidden"
          style={{ top: "72px" }}
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="absolute inset-0 bg-white rounded-2xl border border-gray-200 overflow-hidden"
              style={{
                zIndex: 10 + i,
                transform: i <= mobileCard ? "translateY(0)" : "translateY(110%)",
                transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: i === mobileCard
                  ? "0 8px 32px rgba(0,0,0,0.12)"
                  : "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div className="h-1 bg-brand-700" />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border-2 border-brand-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-700 font-black text-xs">{step.n}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                <div className="flex gap-1.5 mt-4">
                  {steps.map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${j <= i ? "bg-brand-600" : "bg-gray-100"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
