"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Schade melden",       desc: "Bel ons, stuur een bericht of vul het online formulier in. Wij reageren binnen 24 uur." },
  { n: "02", title: "Gratis beoordeling",   desc: "Wij beoordelen de schade vrijblijvend en maken een heldere offerte op maat." },
  { n: "03", title: "Vakkundige reparatie", desc: "Onze specialisten herstellen uw auto met hoogwaardige materialen. U krijgt een leenauto." },
  { n: "04", title: "Auto klaar",           desc: "Uw auto is gereinigd en rijklaar. Wij leveren hem persoonlijk bij u af of u haalt hem op." },
];

/* Each card's peek height above the next card (px) */
const PEEK = 52;

export default function StappenSection() {
  const [desktopActive, setDesktopActive] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);

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

      {/* ── MOBILE: CSS sticky stack ──
          Each card has position:sticky with an increasing top offset.
          As the user scrolls, each card slides up OVER the previous one,
          which peeks PEEK px above it. Pure CSS — no JavaScript needed.
          Fallback (if sticky broken): cards show as a normal vertical list. */}
      <div className="lg:hidden">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className="sticky bg-white rounded-2xl overflow-hidden border border-gray-100"
            style={{
              top: `${72 + i * PEEK}px`,
              zIndex: 10 + i,
              marginBottom: i < steps.length - 1 ? "12px" : "0",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            }}
          >
            <div className="h-1 bg-brand-700" />
            <div className="px-5 pt-4 pb-6">
              <span className="text-brand-700 font-black text-lg mb-3 block">{step.n}</span>
              <h3 className="font-black text-gray-900 text-xl mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              <div className="flex gap-1.5 mt-5">
                {steps.map((_, j) => (
                  <div
                    key={j}
                    className={`h-1 flex-1 rounded-full ${j <= i ? "bg-brand-600" : "bg-gray-100"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
