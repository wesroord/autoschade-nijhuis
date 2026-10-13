"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Schade melden", desc: "Bel ons, stuur een bericht of vul het online formulier in. Wij reageren binnen 24 uur." },
  { n: "02", title: "Gratis beoordeling", desc: "Wij beoordelen de schade vrijblijvend en maken een heldere offerte op maat." },
  { n: "03", title: "Vakkundige reparatie", desc: "Onze specialisten herstellen uw auto met hoogwaardige materialen. U krijgt een leenauto." },
  { n: "04", title: "Auto klaar", desc: "Uw auto is gereinigd en rijklaar. Wij leveren hem persoonlijk bij u af of u haalt hem op." },
];

export default function StappenSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* ── DESKTOP (lg+): horizontal with animated connector ── */}
      <div className="hidden lg:block relative">
        {/* Connector track — from badge-1 center to badge-4 center */}
        {/* right: calc(25% - 3rem) is exact for 4-col gap-8 grid */}
        <div
          className="absolute top-6 h-px z-0"
          style={{ left: "1.5rem", right: "calc(25% - 3rem)" }}
        >
          <div className="absolute inset-0 bg-gray-200" />
          {/* Animated fill */}
          <div
            className="absolute inset-y-0 left-0 bg-brand-400"
            style={{
              width: active ? "100%" : "0%",
              transition: "width 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          {/* Traveling dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-700 ring-2 ring-white shadow-lg shadow-brand-700/30 z-10"
            style={{
              left: active ? "calc(100% - 8px)" : "-8px",
              transition: "left 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(20px)",
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

      {/* ── MOBILE/TABLET (below lg): vertical timeline ── */}
      <div className="lg:hidden relative pl-14">
        {/* Animated vertical line */}
        <div
          className="absolute left-5 top-0 w-0.5 bg-gray-100 overflow-hidden"
          style={{ height: "calc(100% - 2.5rem)" }}
        >
          <div
            className="w-full bg-gradient-to-b from-brand-600 to-brand-300"
            style={{
              height: active ? "100%" : "0%",
              transition: "height 2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        <div className="space-y-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.5s ease ${i * 250 + 200}ms, transform 0.5s ease ${i * 250 + 200}ms`,
              }}
            >
              {/* Badge on the vertical line */}
              <div className="absolute -left-14 top-0 w-10 h-10 rounded-xl bg-white border-2 border-brand-200 flex items-center justify-center shadow-sm z-10">
                <span className="text-brand-700 font-black text-xs">{step.n}</span>
              </div>
              {/* Content card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-gray-900 text-base mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
