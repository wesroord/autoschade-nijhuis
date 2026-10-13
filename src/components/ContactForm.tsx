"use client";

import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xpwzgojq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors";
  const labelCls = "block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5";

  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h4 className="font-black text-white text-xl mb-2">Bericht verstuurd!</h4>
        <p className="text-white/60 text-sm">Wij nemen binnen 24 uur contact met u op.</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="font-black text-white text-2xl mb-1">Stuur ons een bericht</h3>
      <p className="text-white/50 text-sm mb-7">Gratis en vrijblijvend — binnen 24 uur reactie</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Naam *</label>
            <input type="text" name="naam" required placeholder="Uw naam" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Telefoon</label>
            <input type="tel" name="telefoon" placeholder="06-12345678" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>E-mailadres *</label>
          <input type="email" name="email" required placeholder="uw@email.nl" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Soort schade</label>
          <select name="onderwerp" className={inputCls + " text-white/70"}>
            <option value="" className="text-gray-900 bg-white">Selecteer een onderwerp</option>
            <option className="text-gray-900 bg-white">Gratis offerte aanvragen</option>
            <option className="text-gray-900 bg-white">Schadeherstel</option>
            <option className="text-gray-900 bg-white">Spuitwerk / Lakwerk</option>
            <option className="text-gray-900 bg-white">Hagelschade</option>
            <option className="text-gray-900 bg-white">Deukwerk / PDR</option>
            <option className="text-gray-900 bg-white">Caravan / Camper</option>
            <option className="text-gray-900 bg-white">Anders</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Bericht *</label>
          <textarea
            name="bericht"
            required
            rows={4}
            placeholder="Omschrijf uw schade of vraag..."
            className={inputCls + " resize-none"}
          />
        </div>
        {status === "error" && (
          <p className="text-red-400 text-sm">Er ging iets mis. Bel ons op 0541-354640.</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full bg-white text-brand-800 py-4 rounded-xl font-black text-sm hover:bg-brand-50 transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Versturen..." : "Bericht versturen →"}
        </button>
        <div className="flex items-center justify-center gap-2 pt-1">
          <Phone className="w-3.5 h-3.5 text-brand-400" />
          <p className="text-xs text-white/40">
            Of bel direct:{" "}
            <a href="tel:0541354640" className="text-white/70 font-bold hover:text-white transition-colors">
              0541-354640
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
