"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const contactRef = useRef<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    contactRef.current = document.getElementById("contact");
    if (!contactRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  if (!mounted || !visible) return null;

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-[150] lg:hidden">
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-lg">
        <a
          href="tel:0541354640"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-700 text-brand-700 rounded-xl py-3 font-bold text-sm"
        >
          <Phone className="w-4 h-4" />
          Bel direct
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-700 text-white rounded-xl py-3 font-bold text-sm"
        >
          Offerte aanvragen
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>,
    document.body
  );
}
