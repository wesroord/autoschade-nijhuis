"use client";
import { useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Diensten",  href: "#diensten" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Partners", href: "#partners" },
  { label: "Contact",  href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menu sluiten" : "Menu openen"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden overflow-y-auto">
          <nav className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 text-lg font-semibold py-4 border-b border-gray-100 flex items-center justify-between hover:text-brand-700 transition-colors"
              >
                {item.label}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:0541354640"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-4 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-700" />
                0541-354640
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-brand-700 hover:bg-brand-600 text-white rounded-xl py-4 text-center font-bold transition-colors"
              >
                Schade melden
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
